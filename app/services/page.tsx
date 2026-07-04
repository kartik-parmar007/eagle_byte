import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Building2,
  Bot,
  Workflow,
  LayoutDashboard,
  Cloud,
  Layers,
  Wrench,
} from "lucide-react";
import { servicesFull } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";
import { Process } from "@/components/home/Process";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Building2,
  Bot,
  Workflow,
  LayoutDashboard,
  Cloud,
  Layers,
  Wrench,
};

export const metadata: Metadata = {
  title: "Services — Custom Websites, AI Agents & Automation | Eagle Byte",
  description:
    "Eight focused services — custom websites, enterprise apps, AI agents, workflow automation, SaaS, DevOps, cloud, and maintenance.",
  keywords:
    "Eagle Byte services, custom website development, website design and development company, enterprise web applications, enterprise software development, AI agents development, autonomous AI agents, LLM integration services, AI chatbot development, workflow automation services, business process automation, SaaS development company, SaaS product engineering, MVP development, mobile app development, React Native development, cloud DevOps services, AWS GCP consulting, CI/CD pipelines, Docker Kubernetes, business process digitization, website maintenance and support, UI UX design services, e-commerce development, headless CMS development, Next.js React development",
  alternates: {
    canonical: "https://eaglebyte.in/services/",
  },
  openGraph: {
    title: "Services — Eagle Byte",
    description: "Engineering practices for teams that ship.",
    url: "https://eaglebyte.in/services/",
    images: [
      {
        url: "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
      },
    ],
  },
  twitter: {
    title: "Services — Eagle Byte",
    description: "Engineering practices for teams that ship.",
    images: [
      "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="container-x max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
              Services
            </p>
            <h1 className="mt-4 text-[44px] md:text-[68px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              Everything you need to{" "}
              <span className="text-gradient">build, launch, and scale.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground max-w-2xl">
              Eight focused practices, shipped by senior engineers. Pick one —
              or let us assemble a team that covers the whole stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20 overflow-hidden">
        {/* Light blue tinted backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF2FF]/70 via-[#F4F8FF]/60 to-transparent dark:from-[#0A5CFF]/8 dark:via-[#060A14]/60 dark:to-transparent" />
        <div className="pointer-events-none absolute -z-10 top-24 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[#0A5CFF]/10 blur-[120px]" />
        <div className="container-x grid gap-6 md:grid-cols-2">
          {servicesFull.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group relative h-full">
                  {/* Outer gradient glow */}
                  <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-[#93C5FD] via-cyan-200 to-[#93C5FD] opacity-20 blur transition duration-500 group-hover:opacity-30 dark:from-[#0A5CFF] dark:via-[#2563EB] dark:to-[#0A5CFF] dark:opacity-25" />
                  {/* Glass card */}
                  <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/60 dark:border-[#1A2340]/60 bg-white/40 dark:bg-[#0F1529]/60 p-8 md:p-10 shadow-[0_20px_50px_-10px_rgba(10,92,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-10px_rgba(10,92,255,0.22)]">
                    {/* Blue tint layer */}
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[#DBEAFE]/60 dark:bg-[#0A5CFF]/8" />
                    {/* Corner flare */}
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#93C5FD]/40 blur-3xl dark:bg-[#0A5CFF]/25" />

                    <div className="flex items-start justify-between gap-6">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] text-white shadow-lg shadow-[#60A5FA]/30">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <span className="text-[13px] font-mono text-[#0A5CFF] dark:text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-8 text-[22px] md:text-[26px] font-semibold tracking-tight text-[#0B1F4D] dark:text-[#E2E8F7]">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#0B1F4D]/75 dark:text-[#8895B8]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Process />

      <section className="py-16 md:py-20 bg-surface/60 border-t border-border">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[32px] md:text-[44px] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
              Ready to scope your project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-muted-foreground">
              Book a free 30-minute strategy call. Bring the problem — we&apos;ll
              bring the plan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-medium text-white shadow-[var(--shadow-glow)]"
            >
              Book Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
