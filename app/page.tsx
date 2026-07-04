import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesBrief } from "@/components/home/ServicesBrief";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyEagleByte } from "@/components/home/WhyEagleByte";
import { AIWorkflow } from "@/components/home/AIWorkflow";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { QuoteForm } from "@/components/home/QuoteForm";

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
