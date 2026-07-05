import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Landmark,
  GraduationCap,
  Factory,
  ShoppingBag,
  Rocket,
} from "lucide-react";
import { solutions } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Landmark,
  GraduationCap,
  Factory,
  ShoppingBag,
  Rocket,
};

export const metadata: Metadata = {
  title: "Solutions by Industry — Healthcare, Finance, SaaS | Eagle Byte",
  description:
    "Enterprise-ready solutions for healthcare, finance, education, manufacturing, e-commerce, and startups.",
  keywords:
    "healthcare software, fintech applications, edtech platforms, manufacturing automation, ecommerce development, startup MVP, industry solutions",
  alternates: {
    canonical: "https://www.eaglebyte.in/solutions/",
  },
  openGraph: {
    title: "Solutions by Industry — Eagle Byte",
    description: "Software patterns adapted for your industry.",
    url: "https://www.eaglebyte.in/solutions/",
    images: [{ url: "https://www.eaglebyte.in/og-cover.jpg" }],
  },
  twitter: {
    title: "Solutions by Industry — Eagle Byte",
    description: "Software patterns adapted for your industry.",
    images: ["https://www.eaglebyte.in/og-cover.jpg"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="container-x max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
              Solutions
            </p>
            <h1 className="mt-4 text-[44px] md:text-[68px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              Built for your{" "}
              <span className="text-gradient">industry.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground max-w-2xl">
              We adapt proven engineering patterns to the regulatory, operational,
              and user-experience realities of your industry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF2FF]/70 via-[#F4F8FF]/60 to-transparent dark:from-[#0A5CFF]/8 dark:via-[#060A14]/60 dark:to-transparent" />
        <div className="pointer-events-none absolute -z-10 top-24 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[#0A5CFF]/10 blur-[120px]" />
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative h-full">
                  <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-[#93C5FD] via-cyan-200 to-[#93C5FD] opacity-20 blur transition duration-500 group-hover:opacity-30 dark:from-[#0A5CFF] dark:via-[#2563EB] dark:to-[#0A5CFF] dark:opacity-25" />
                  <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/60 dark:border-[#1A2340]/60 bg-white/40 dark:bg-[#0F1529]/60 p-8 shadow-[0_20px_50px_-10px_rgba(10,92,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-10px_rgba(10,92,255,0.22)]">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[#DBEAFE]/60 dark:bg-[#0A5CFF]/8" />
                    <div className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-[#93C5FD]/40 blur-3xl dark:bg-[#0A5CFF]/25" />

                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] text-white shadow-lg shadow-[#60A5FA]/30">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h2 className="mt-6 text-[22px] font-semibold tracking-tight text-[#0B1F4D] dark:text-[#E2E8F7]">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#0B1F4D]/75 dark:text-[#8895B8]">
                      {s.desc}
                    </p>
                    <div className="mt-6 flex items-center text-[13px] font-semibold text-[#0A5CFF] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      Talk to us <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="container-x mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-medium text-white shadow-[var(--shadow-glow)]"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
