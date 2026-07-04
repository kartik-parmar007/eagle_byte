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
    "Eagle Byte, EagleByte, Eagle Byte Digital, Eagle Byte India, Kartik Parmar, Kartik Parmar Eagle Byte, digital engineering studio, custom website development, website development company India, web development Gujarat, AI automation agency, AI agents development, workflow automation services, enterprise web applications, SaaS development company, mobile app development India, Next.js development agency, cloud solutions, DevOps services, UI UX design India, hire web developers India, digital transformation company",
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
        url: "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
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
    images: [
      "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
    ],
  },
};

// Organization, WebSite, and ProfessionalService JSON-LD is emitted once for
// every page from app/layout.tsx as a single cross-linked @graph — duplicating
// it here would register conflicting entities with search engines.

export default function Home() {
  return (
    <>
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
