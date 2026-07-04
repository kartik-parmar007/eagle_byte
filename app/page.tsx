import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const ServicesBrief = dynamic(() => import("@/components/home/ServicesBrief").then((mod) => mod.ServicesBrief));
const FeaturedProjects = dynamic(() => import("@/components/home/FeaturedProjects").then((mod) => mod.FeaturedProjects));
const WhyEagleByte = dynamic(() => import("@/components/home/WhyEagleByte").then((mod) => mod.WhyEagleByte));
const AIWorkflow = dynamic(() => import("@/components/home/AIWorkflow").then((mod) => mod.AIWorkflow));
const Process = dynamic(() => import("@/components/home/Process").then((mod) => mod.Process));
const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => mod.FAQ));
const QuoteForm = dynamic(() => import("@/components/home/QuoteForm").then((mod) => mod.QuoteForm));

export const metadata: Metadata = {
  title: "Eagle Byte — Build Faster. Automate Smarter. Scale Without Limits.",
  description:
    "Premium digital engineering studio building websites, enterprise applications, and AI-powered automation for serious businesses.",
  keywords:
    "digital engineering, custom website development, AI automation, workflow automation, enterprise web applications, SaaS development, cloud solutions, Eagle Byte",
  alternates: {
    canonical: "https://eaglebyte.in/",
  },
  openGraph: {
    title: "Eagle Byte — Digital Engineering Studio",
    description:
      "Websites, enterprise apps, AI agents, and workflow automation, engineered end-to-end.",
    url: "https://eaglebyte.in/",
    images: [
      {
        url: "https://eaglebyte.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Eagle Byte — Build Faster. Automate Smarter.",
      },
    ],
  },
  twitter: {
    title: "Eagle Byte — Digital Engineering Studio",
    description:
      "Websites, enterprise apps, AI agents, and workflow automation.",
    images: ["https://eaglebyte.in/og-cover.jpg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eagle Byte",
  url: "https://eaglebyte.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://eaglebyte.in/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eagle Byte",
  url: "https://eaglebyte.in",
  logo: "https://eaglebyte.in/eaglebyte-logo-transparent.webp",
  description:
    "Premium digital engineering studio building enterprise websites, business applications and AI-powered automation.",
  sameAs: ["https://eaglebyte.in"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@eaglebye.in",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Eagle Byte",
  url: "https://eaglebyte.in",
  image: "https://eaglebyte.in/og-cover.jpg",
  priceRange: "$$$",
  serviceType: [
    "Custom Website Development",
    "Enterprise Web Applications",
    "AI Agents & Automation",
    "Workflow Automation",
    "SaaS Development",
    "Cloud Solutions",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <ServicesBrief />
      <FeaturedProjects />
      <WhyEagleByte />
      <AIWorkflow />
      <Process />
      <FAQ />
      <QuoteForm />
    </>
  );
}
