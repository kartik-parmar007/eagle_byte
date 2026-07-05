import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MessageCircle, Linkedin } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { contactInfo } from "@/lib/site-content";
import Image from "next/image";

const pillars = [
  {
    title: "Innovation",
    desc: "We keep a research budget for every engagement — new tools, new patterns, new ways to compress delivery time.",
  },
  {
    title: "Engineering Excellence",
    desc: "Type-safe, tested, observable code. No shortcuts on the parts that will bite you in year two.",
  },
  {
    title: "Automation",
    desc: "Every repetitive task is a candidate for AI. We compound our own leverage — and pass it to clients.",
  },
  {
    title: "Digital Transformation",
    desc: "We don't just build software. We help organizations rewire how they operate.",
  },
];

export const metadata: Metadata = {
  title: "About Eagle Byte — Founder-led Digital Engineering Studio",
  description:
    "Eagle Byte is a founder-led digital engineering studio building websites, enterprise applications, and AI-powered automation.",
  keywords:
    "about Eagle Byte, digital engineering studio, founder-led agency, innovation, engineering excellence, automation, digital transformation",
  alternates: {
    canonical: "https://www.eaglebyte.in/about/",
  },
  openGraph: {
    title: "About Eagle Byte",
    description:
      "Innovation. Engineering excellence. Automation. Digital transformation.",
    url: "https://www.eaglebyte.in/about/",
    images: [{ url: "https://www.eaglebyte.in/og-cover.jpg" }],
  },
  twitter: {
    title: "About Eagle Byte",
    description: "Innovation. Engineering excellence. Automation.",
    images: ["https://www.eaglebyte.in/og-cover.jpg"],
  },
};

export default function About() {
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-border/80 overflow-hidden">
        {/* Decorative grid pattern and glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        
        <div className="container-x">
          <Reveal>
            <div className="text-center md:text-left mb-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">Leadership</p>
              <h1 className="mt-4 text-[32px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
                Meet the Founder
              </h1>
            </div>
          </Reveal>
          
          <div className="grid gap-10 md:grid-cols-[1.2fr_2fr] items-center">
            {/* Founder Image Card */}
            <Reveal delay={0.1}>
              <div className="group relative mx-auto md:mx-0 max-w-[360px] md:max-w-none w-full aspect-[5/4] rounded-[32px] overflow-hidden border border-border/80 shadow-[var(--shadow-elegant)] bg-card hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(10,92,255,0.25)] transition-all duration-500">
                <Image 
                  src="/public/professional%20image%20with%20logo.png" 
                  alt={contactInfo.founder} 
                  width={520}
                  height={416}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg">{contactInfo.founder}</p>
                  <p className="text-white/80 text-sm">{contactInfo.founderRole}</p>
                </div>
              </div>
            </Reveal>

            {/* Founder Info & Bio */}
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[28px] font-semibold text-ink leading-tight">{contactInfo.founder}</h3>
                  <p className="text-primary text-[15px] font-medium mt-1">{contactInfo.founderRole}</p>
                </div>
                
                <div className="space-y-4 text-[16px] leading-relaxed text-muted-foreground">
                  <p>
                    I founded Eagle Byte with a single mission: to build clean, high-performance software that helps businesses scale without technical friction. With a background in full-stack engineering and cloud architecture, I oversee every project we ship to ensure it meets our strict standard of craft.
                  </p>
                  <p>
                    We don&apos;t believe in templates or generic solutions. Every line of code, from autonomous AI agents to complex enterprise databases, is engineered specifically to yield business outcomes.
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a 
                    href={contactInfo.emailHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-card px-5 py-2.5 text-[14px] font-medium text-ink hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/5 shadow-sm transition-all"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{contactInfo.email}</span>
                  </a>
                  
                  <a 
                    href={contactInfo.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-card px-5 py-2.5 text-[14px] font-medium text-ink hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/5 shadow-sm transition-all"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{contactInfo.phone}</span>
                  </a>

                  <a 
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-card px-5 py-2.5 text-[14px] font-medium text-ink hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/5 shadow-sm transition-all"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={contactInfo.founderLinkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white dark:bg-card px-5 py-2.5 text-[14px] font-medium text-ink hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/5 shadow-sm transition-all"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="max-w-3xl text-[32px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
              What we optimize for.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-white dark:bg-card p-8 md:p-10 shadow-[var(--shadow-elegant)]">
                  <div className="text-[11px] font-mono text-primary">
                    P{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[24px] font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/60 border-t border-border">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[32px] md:text-[44px] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
              Let&apos;s build something enduring.
            </h2>
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
