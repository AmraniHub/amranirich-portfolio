"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    const GOLD = "201, 168, 76";
    const NODE_COUNT = 55;
    const MAX_DIST = 140;
    const MOUSE_REPEL_DIST = 120;

    const nodes: Node[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawnNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    resize();
    spawnNodes();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const ro = new ResizeObserver(() => {
      resize();
      spawnNodes();
    });
    ro.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw nodes
      nodes.forEach((n) => {
        // Mouse repel
        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
          n.vx += (dx / dist) * force * 0.6;
          n.vy += (dy / dist) * force * 0.6;
        }

        // Dampen
        n.vx *= 0.98;
        n.vy *= 0.98;

        n.x += n.vx;
        n.y += n.vy;

        // Bounce edges
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > canvas.width) { n.x = canvas.width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1; }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD}, ${n.alpha})`;
        ctx.fill();
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${GOLD}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw mouse node if hovering
      if (mouseX > 0) {
        nodes.forEach((n) => {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST * 1.5) {
            const alpha = (1 - dist / (MAX_DIST * 1.5)) * 0.5;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(${GOLD}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD}, 0.7)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
