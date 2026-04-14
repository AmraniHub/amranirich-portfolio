export type CertCategory =
  | "AI & ML"
  | "Web3 & Blockchain"
  | "Marketing"
  | "Cloud & Tech"
  | "Business";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  category: CertCategory;
  credentialUrl?: string;
  icon?: string;
}

// ─── Edit this array to populate your 29 verified certificates ───────────────
// Each entry maps to one card in the /credentials grid.
// credentialUrl defaults to the wallet URL if left empty.
export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "Blockchain Fundamentals",
    issuer: "IBM / Coursera",
    issueDate: "2024-01",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-2",
    name: "DeFi & Decentralized Applications",
    issuer: "Ethereum Foundation",
    issueDate: "2024-02",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-3",
    name: "Real World Asset Tokenization",
    issuer: "Binance Academy",
    issueDate: "2024-03",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-4",
    name: "Smart Contract Development",
    issuer: "Alchemy University",
    issueDate: "2024-04",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-5",
    name: "Meta Blueprint — Media Buying",
    issuer: "Meta",
    issueDate: "2023-06",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-6",
    name: "Google Ads Search Certification",
    issuer: "Google",
    issueDate: "2023-07",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-7",
    name: "Google Analytics 4 Certification",
    issuer: "Google",
    issueDate: "2023-08",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-8",
    name: "TikTok Ads Academy",
    issuer: "TikTok",
    issueDate: "2023-09",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-9",
    name: "AI for Everyone",
    issuer: "DeepLearning.AI / Coursera",
    issueDate: "2024-05",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-10",
    name: "Generative AI with LLMs",
    issuer: "DeepLearning.AI / AWS",
    issueDate: "2024-06",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-11",
    name: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI / Anthropic",
    issueDate: "2024-07",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-12",
    name: "Machine Learning Specialization",
    issuer: "Stanford / Coursera",
    issueDate: "2024-08",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-13",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2023-11",
    category: "Cloud & Tech",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-14",
    name: "Next.js — Full Stack Development",
    issuer: "Vercel / Frontend Masters",
    issueDate: "2023-12",
    category: "Cloud & Tech",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-15",
    name: "Shopify Partner Developer",
    issuer: "Shopify",
    issueDate: "2023-05",
    category: "Cloud & Tech",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-16",
    name: "Financial Markets",
    issuer: "Yale / Coursera",
    issueDate: "2024-09",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-17",
    name: "Investment Management",
    issuer: "Geneva Finance Research Institute",
    issueDate: "2024-10",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-18",
    name: "Real Estate Finance & Investment",
    issuer: "MIT OpenCourseWare",
    issueDate: "2024-11",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-19",
    name: "Entrepreneurship Specialization",
    issuer: "Wharton / Coursera",
    issueDate: "2023-03",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-20",
    name: "Web3 Business Strategy",
    issuer: "INSEAD",
    issueDate: "2024-12",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-21",
    name: "Crypto & Digital Assets",
    issuer: "University of Michigan",
    issueDate: "2024-01",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-22",
    name: "Digital Marketing Analytics",
    issuer: "Columbia University",
    issueDate: "2023-04",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-23",
    name: "Growth Hacking & Performance",
    issuer: "CXL Institute",
    issueDate: "2023-10",
    category: "Marketing",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-24",
    name: "AI Agents & Automation",
    issuer: "DeepLearning.AI",
    issueDate: "2025-01",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-25",
    name: "LangChain for LLM Applications",
    issuer: "DeepLearning.AI",
    issueDate: "2025-02",
    category: "AI & ML",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-26",
    name: "Tokenomics & Token Engineering",
    issuer: "Token Engineering Academy",
    issueDate: "2025-01",
    category: "Web3 & Blockchain",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-27",
    name: "Private Equity & Venture Capital",
    issuer: "Bocconi University",
    issueDate: "2025-02",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-28",
    name: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    issueDate: "2024-03",
    category: "Cloud & Tech",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
  {
    id: "cert-29",
    name: "Product Management",
    issuer: "Product School",
    issueDate: "2024-04",
    category: "Business",
    credentialUrl: "https://credentials.net/profile/amranirich/wallet",
  },
];

export const certCategories = [
  "All",
  "AI & ML",
  "Web3 & Blockchain",
  "Marketing",
  "Cloud & Tech",
  "Business",
] as const;
