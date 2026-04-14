"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on pointer:fine devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.left = `${trailX}px`;
        trailRef.current.style.top = `${trailY}px`;
      }
      rafId = requestAnimationFrame(animateTrail);
    };

    const onMouseDown = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = "translate(-50%, -50%) scale(1.4)";
      }
    };

    const onMouseUp = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (trailRef.current) {
        trailRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const onMouseEnterLink = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "6px";
        dotRef.current.style.height = "6px";
      }
      if (trailRef.current) {
        trailRef.current.style.width = "44px";
        trailRef.current.style.height = "44px";
        trailRef.current.style.borderColor = "rgba(201, 168, 76, 0.6)";
      }
    };

    const onMouseLeaveLink = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "10px";
        dotRef.current.style.height = "10px";
      }
      if (trailRef.current) {
        trailRef.current.style.width = "28px";
        trailRef.current.style.height = "28px";
        trailRef.current.style.borderColor = "rgba(201, 168, 76, 0.4)";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    addLinkListeners();
    rafId = requestAnimationFrame(animateTrail);

    // Re-attach on DOM changes for dynamic elements
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="custom-cursor"
        ref={dotRef}
        style={{ left: "-100px", top: "-100px" }}
        aria-hidden="true"
      />
      <div
        id="cursor-trail"
        ref={trailRef}
        style={{ left: "-100px", top: "-100px" }}
        aria-hidden="true"
      />
    </>
  );
}
