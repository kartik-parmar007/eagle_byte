import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const rotators = ["Websites.", "Agentic AI.", "DevOps.", "Automations.", "SaaS Products."];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background Image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 select-none pointer-events-none"
      >
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-25 dark:opacity-10 mix-blend-overlay dark:mix-blend-normal"
        />
      </div>
      {/* Visible blue depth backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* strong central glow */}
        <div
          className="absolute top-[-5%] left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-[40px] opacity-80"
          style={{
            background:
              "radial-gradient(closest-side, #8FB5FF, transparent 65%)",
          }}
        />
        {/* left blob */}
        <div
          className="absolute top-[10%] -left-12 h-[280px] w-[280px] rounded-full blur-[35px] opacity-75 animate-aurora"
          style={{
            background:
              "radial-gradient(closest-side, #7AA8FF, transparent 65%)",
          }}
        />
        {/* right blob */}
        <div
          className="absolute top-[15%] right-[-6%] h-[320px] w-[320px] rounded-full blur-[40px] opacity-70 animate-aurora"
          style={{
            background:
              "radial-gradient(closest-side, #6B9EFF, transparent 65%)",
            animationDelay: "-6s",
          }}
        />
        {/* bottom-left blob */}
        <div
          className="absolute bottom-[-5%] left-[5%] h-[300px] w-[300px] rounded-full blur-[45px] opacity-60 animate-aurora"
          style={{
            background:
              "radial-gradient(closest-side, #A8C6FF, transparent 65%)",
            animationDelay: "-11s",
          }}
        />
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,92,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container-x relative">
        {/* Headline */}
        <div className="mt-8 text-center">
          <h1 className="animate-rise mx-auto max-w-5xl text-[44px] leading-[1.02] sm:text-[62px] lg:text-[80px] font-semibold tracking-[-0.035em] text-ink">
            We engineer the
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block">
              <span className="text-shimmer">next generation</span>
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute left-0 -bottom-2 w-full h-3 text-primary/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 80 2, 220 12, 298 4"
                  pathLength={1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-draw"
                />
              </svg>
            </span>{" "}
            <span className="text-ink/80 font-normal">of</span>
            <span className="mt-3 block text-center">
              <span
                className="relative inline-block h-[1.25em] overflow-hidden align-bottom text-center w-full"
              >
                <span className="animate-rotate-words flex flex-col text-gradient font-bold">
                  {[...rotators, rotators[0]].map((w, i) => (
                    <span
                      key={i}
                      className="leading-[1.25] whitespace-nowrap pb-[0.1em] text-center block w-full"
                    >
                      {w}
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </h1>

          <p className="animate-fade-up [animation-delay:250ms] mt-7 mx-auto max-w-2xl text-[16px] md:text-[19px] leading-relaxed text-muted-foreground">
            Eagle Byte is a premium digital engineering studio building
            enterprise-grade websites, business applications and{" "}
            <span className="text-ink font-medium">AI-powered automation</span>{" "}
            that compound your revenue — not your headcount.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up [animation-delay:350ms] mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[14px] font-medium text-white shadow-[var(--shadow-glow)] hover:shadow-[0_30px_80px_-20px_rgba(10,92,255,0.6)] transition-all hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.35) 45%, transparent 70%)",
                }}
              />
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/70 dark:bg-card/70 backdrop-blur px-7 py-4 text-[14px] font-medium text-ink hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-0.5"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom tech ticker */}
      <div
        aria-hidden
        className="mt-10 md:mt-14 border-y border-[#E2E8F6] dark:border-border bg-[#F4F7FF]/70 dark:bg-[#0B1022]/70 backdrop-blur"
      >
        <div className="overflow-hidden py-4 md:py-5">
          <div className="flex items-center whitespace-nowrap animate-ticker">
            {Array.from({ length: 2 }).flatMap((_, r) =>
              [
                "React",
                "Next.js",
                "TanStack",
                "Node",
                "Python",
                "OpenAI",
                "Anthropic",
                "LangChain",
                "AWS",
                "Cloudflare",
                "Postgres",
                "Supabase",
                "Stripe",
                "Vercel",
                "Kubernetes",
              ].map((t, i) => (
                <div key={`${r}-${i}`} className="flex items-center">
                  <span className="px-6 md:px-10 text-[13px] md:text-[15px] font-semibold tracking-wide text-[#4A5B82]">
                    {t}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
