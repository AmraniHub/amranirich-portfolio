export type ProjectStatus = "Active" | "In Development" | "Completed" | "Published";
export type ProjectCategory =
  | "Web3 & RWA"
  | "Media Buying"
  | "Apps"
  | "AI Systems"
  | "E-Commerce";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  href?: string;
  featured?: boolean;
  imagePlaceholder?: string;
}

export const projects: Project[] = [
  {
    id: "amrania",
    title: "Amrania",
    description:
      "Tokenized luxury real estate advisory for UHNWIs and family offices. Operating at the intersection of RWA tokenization, blockchain infrastructure, and institutional wealth management.",
    longDescription:
      "Amrania is a tokenized luxury real estate and Web3 wealth advisory firm being built for UHNWIs and family offices in Dubai. It operates at the intersection of real-world asset tokenization (RWA), blockchain infrastructure, and institutional wealth management. The platform enables fractional ownership of prime real estate assets via blockchain-issued security tokens, with full regulatory compliance.",
    tags: ["RWA", "Tokenization", "Dubai", "UHNWI", "Web3", "Family Office"],
    status: "In Development",
    category: "Web3 & RWA",
    href: "/ventures",
    featured: true,
    imagePlaceholder: "amrania",
  },
  {
    id: "amraniads",
    title: "AmraniAds",
    description:
      "Performance media buying agency specializing in Meta, Google, and TikTok ads for e-commerce and lead generation campaigns across Morocco, UAE, and MENA.",
    longDescription:
      "AmraniAds is a performance media buying agency operating across Morocco, UAE, and MENA. Specialized in direct response campaigns across Meta, Google Ads, and TikTok with a focus on measurable ROAS and scalable paid acquisition systems.",
    tags: ["Meta Ads", "Google Ads", "TikTok", "MENA", "Performance Marketing"],
    status: "Active",
    category: "Media Buying",
    href: "/ventures#amraniads",
    featured: false,
    imagePlaceholder: "amraniads",
  },
  {
    id: "android-app",
    title: "Android Application",
    description:
      "Published Android application on Google Play Store. Details available on request — reach out via the contact page.",
    longDescription:
      "A published Android application available on the Google Play Store. Built with modern Android development practices.",
    tags: ["Android", "Mobile", "Google Play"],
    status: "Published",
    category: "Apps",
    imagePlaceholder: "android",
  },
  {
    id: "shopify-app",
    title: "Shopify Application",
    description:
      "Published Shopify app extending e-commerce functionality for merchants. Available on the Shopify App Store.",
    longDescription:
      "A published Shopify application available on the Shopify App Store, extending merchant functionality for e-commerce operations.",
    tags: ["Shopify", "E-Commerce", "SaaS", "App Store"],
    status: "Published",
    category: "Apps",
    imagePlaceholder: "shopify",
  },
  {
    id: "ai-automation",
    title: "AI Automation Systems",
    description:
      "Internal operations tools and Claude-powered pipelines automating workflows across research, content, media buying reporting, and client intelligence.",
    longDescription:
      "A suite of AI-powered automation systems built on Claude AI and custom orchestration layers. Handles automated research pipelines, content generation, media buying report analysis, and client intelligence workflows. Reduces manual ops time by 60%+.",
    tags: ["Claude AI", "Automation", "LLM", "Pipelines", "Operations"],
    status: "Active",
    category: "AI Systems",
    imagePlaceholder: "ai",
  },
  {
    id: "cod-ecommerce",
    title: "COD E-Commerce Operations",
    description:
      "Cash-on-delivery e-commerce operation running TikTok and Meta campaigns targeting the Morocco market with full fulfillment infrastructure.",
    longDescription:
      "Cash-on-delivery e-commerce operation running paid social campaigns on TikTok Ads and Meta targeting the Moroccan market. Full stack: creative production, ad buying, fulfillment coordination, and customer service systems.",
    tags: ["COD", "TikTok Ads", "Meta Ads", "Morocco", "E-Commerce"],
    status: "Active",
    category: "E-Commerce",
    imagePlaceholder: "ecommerce",
  },
];

export const projectCategories = [
  "All",
  "Web3 & RWA",
  "Media Buying",
  "Apps",
  "AI Systems",
  "E-Commerce",
] as const;
