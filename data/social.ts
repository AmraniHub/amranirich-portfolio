export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string; // lucide icon name or "custom"
  active: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amranirich/",
    icon: "linkedin",
    active: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/AmraniHub",
    icon: "github",
    active: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/amranirich/",
    icon: "instagram",
    active: true,
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com/users/1417879237419077727",
    icon: "discord",
    active: true,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "#",
    icon: "youtube",
    active: false,
  },
];
