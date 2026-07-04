import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Analytics, GtmNoScript } from "@/components/site/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A5CFF",
};

const SITE_URL = "https://eaglebyte.in";
const LOGO_URL =
  "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp";
const FOUNDER_PHOTO_URL =
  "https://ik.imagekit.io/eaglebyte/public/kartik-parmar.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Eagle Byte",
  title: {
    default:
      "Eagle Byte — Premium Digital Engineering Studio | Web, AI & Automation",
    template: "%s | Eagle Byte",
  },
  description:
    "Eagle Byte is a premium digital engineering studio founded by Kartik Parmar in Gujarat, India — engineering high-performance websites, enterprise applications, AI agents, and workflow automation for modern businesses worldwide.",
  keywords: [
    // Brand
    "Eagle Byte",
    "EagleByte",
    "Eagle Byte Digital",
    "Eagle Byte India",
    "Eagle Byte Gujarat",
    "Eagle Byte web development",
    "Eagle Byte software company",
    "Eagle Byte digital engineering studio",
    "eaglebyte.in",
    // Founder
    "Kartik Parmar",
    "Kartik Parmar Eagle Byte",
    "Kartik Parmar developer",
    "Kartik Parmar founder",
    "Kartik Parmar Gujarat",
    "Kartik Parmar full stack developer",
    "Kartik Parmar web developer India",
    // Core services
    "custom website development",
    "website development company India",
    "web development company Gujarat",
    "web development agency Ahmedabad",
    "enterprise web applications",
    "enterprise software development",
    "custom software development company",
    "SaaS development company",
    "SaaS product development India",
    "MVP development for startups",
    "startup app development India",
    "mobile app development company India",
    "React Native app development",
    "iOS and Android app development",
    "Next.js development agency",
    "React development company",
    "TypeScript development services",
    "headless CMS development",
    "e-commerce website development",
    "high conversion landing pages",
    "progressive web apps",
    // AI & automation
    "AI agents development",
    "autonomous AI agents",
    "AI automation agency",
    "AI development company India",
    "LLM integration services",
    "ChatGPT integration for business",
    "AI chatbot development",
    "workflow automation services",
    "business process automation",
    "business process digitization",
    "AI powered automation systems",
    "machine learning solutions",
    "predictive analytics services",
    // Cloud & DevOps
    "cloud solutions provider",
    "AWS consulting India",
    "GCP cloud services",
    "DevOps services company",
    "CI/CD pipeline setup",
    "Docker Kubernetes consulting",
    "cloud cost optimization",
    // Design & consulting
    "UI UX design agency India",
    "product design studio",
    "design systems",
    "brand identity design",
    "technical consulting services",
    "fractional CTO services",
    "software architecture consulting",
    "performance and SEO audit",
    "website maintenance and support",
    // Location / intent
    "hire web developers India",
    "hire full stack developer Gujarat",
    "best software agency India",
    "digital transformation company India",
    "software development studio Gujarat",
    "digital engineering",
    "premium web design studio",
  ],
  authors: [
    { name: "Kartik Parmar", url: `${SITE_URL}/about/` },
    { name: "Eagle Byte", url: SITE_URL },
  ],
  creator: "Kartik Parmar",
  publisher: "Eagle Byte",
  category: "technology",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    siteName: "Eagle Byte",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Eagle Byte — Premium Digital Engineering Studio",
    description:
      "High-performance websites, enterprise applications, AI agents, and workflow automation. Founded by Kartik Parmar. Based in Gujarat, India — serving clients worldwide.",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Eagle Byte — Premium Digital Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eaglebyte",
    creator: "@eaglebyte",
    title: "Eagle Byte — Premium Digital Engineering Studio",
    description:
      "Websites, enterprise apps, AI agents & automation — engineered by Eagle Byte, founded by Kartik Parmar.",
    images: [LOGO_URL],
  },
  verification: {
    google: "V5AZ_iJGTAamzZjX4DaZjhm1xmHubexQK29oD_V7EGE",
  },
};

// One JSON-LD @graph shared by every page: Organization + WebSite + founder
// Person, cross-linked by @id so Google and AI engines (ChatGPT, Perplexity,
// Gemini) associate "Eagle Byte" and "Kartik Parmar" as one entity.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Eagle Byte",
      alternateName: [
        "EagleByte",
        "Eagle Byte Digital",
        "Eagle Byte India",
        "Eagle Byte Digital Engineering Studio",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      image: LOGO_URL,
      description:
        "Premium digital engineering studio specializing in custom websites, enterprise web applications, mobile apps, AI agents, workflow automation, cloud infrastructure, and product design.",
      slogan: "Build Faster. Automate Smarter. Scale Without Limits.",
      email: "contact@eaglebyte.in",
      telephone: "+91 97734 05142",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      areaServed: ["India", "Worldwide"],
      founder: { "@id": `${SITE_URL}/#kartik-parmar` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@eaglebyte.in",
        telephone: "+91 97734 05142",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      knowsAbout: [
        "Custom Website Development",
        "Enterprise Web Applications",
        "Mobile App Development",
        "SaaS Development",
        "AI Agents",
        "LLM Integration",
        "Workflow Automation",
        "Cloud Infrastructure & DevOps",
        "UI/UX & Product Design",
        "Technical Consulting",
      ],
      sameAs: ["https://wa.me/919773405142"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Eagle Byte",
      alternateName: ["EagleByte", "eaglebyte.in", "Eagle Byte Digital"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#kartik-parmar`,
      name: "Kartik Parmar",
      url: `${SITE_URL}/about/`,
      image: FOUNDER_PHOTO_URL,
      jobTitle: "Founder & Lead Developer",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      email: "contact@eaglebyte.in",
      knowsAbout: [
        "Full-Stack Engineering",
        "Cloud Architecture",
        "Next.js",
        "React",
        "TypeScript",
        "AI Agents & LLM Integration",
        "Workflow Automation",
        "DevOps",
      ],
      sameAs: ["https://wa.me/919773405142"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Dark mode anti-flash: apply .dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var mql=window.matchMedia('(prefers-color-scheme:dark)');function u(){document.documentElement.classList.toggle('dark',mql.matches);}u();mql.addEventListener('change',u);})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {/* All images are served from ImageKit — warm the connection early (LCP) */}
        <link rel="preconnect" href="https://ik.imagekit.io" />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <GtmNoScript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
