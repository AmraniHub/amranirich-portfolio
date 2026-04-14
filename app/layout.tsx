import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdelali El Amrani — RWA & Tokenization Strategist | amranirich",
  description:
    "Founder of Amrania. RWA tokenization, Web3 wealth advisory, and performance media buying for UHNWI and institutional clients. Dubai-focused.",
  keywords: [
    "RWA tokenization",
    "real estate tokenization",
    "Web3 wealth advisory",
    "UHNWI",
    "family office",
    "Dubai",
    "DeFi",
    "media buying",
    "Meta Ads",
    "Amrania",
    "amranirich",
    "Abdelali El Amrani",
  ],
  authors: [{ name: "Abdelali El Amrani", url: "https://amranirich.com" }],
  creator: "Abdelali El Amrani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amranirich.com",
    siteName: "amranirich",
    title: "Abdelali El Amrani — RWA & Tokenization Strategist | amranirich",
    description:
      "Founder of Amrania. RWA tokenization, Web3 wealth advisory, and performance media buying for UHNWI and institutional clients.",
    images: [
      {
        url: "/og?title=Abdelali%20El%20Amrani&subtitle=RWA%20%26%20Tokenization%20Strategist",
        width: 1200,
        height: 630,
        alt: "Abdelali El Amrani — RWA & Tokenization Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelali El Amrani — RWA & Tokenization Strategist",
    description:
      "Founder of Amrania. RWA tokenization, Web3 wealth advisory, and performance media buying for UHNWI clients.",
    images: ["/og?title=Abdelali%20El%20Amrani&subtitle=RWA%20%26%20Tokenization%20Strategist"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdelali El Amrani",
  alternateName: "amranirich",
  jobTitle: "RWA & Tokenization Strategist",
  description:
    "Founder of Amrania. RWA tokenization, Web3 wealth advisory, and performance media buying for UHNWI and institutional clients.",
  url: "https://amranirich.com",
  sameAs: [
    "https://www.linkedin.com/in/amranirich/",
    "https://github.com/AmraniHub",
    "https://www.instagram.com/amranirich/",
    "https://discord.com/users/1417879237419077727",
  ],
  knowsAbout: [
    "Real World Asset Tokenization",
    "Web3",
    "DeFi",
    "Blockchain",
    "Real Estate Investment",
    "Performance Marketing",
    "Meta Ads",
    "AI Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
