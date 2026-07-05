import { Reveal } from "@/components/shared/Reveal";
import { LazyQuoteForm } from "./LazyQuoteForm";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="quote"
      className={`cv-auto relative overflow-hidden ${compact ? "py-10" : "py-12 md:py-16"}`}
    >
      {/* soft background depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F5F8FF] dark:from-background dark:to-[#0B1022]" />
        <div
          className="absolute -top-20 right-[10%] h-[300px] w-[400px] rounded-full blur-[80px] opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(10,92,255,0.28), transparent 70%)",
          }}
        />
      </div>
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-start">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                Contact
              </p>
              <h2 className="mt-4 text-[36px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                Request a Free Quote
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground max-w-md">
                Tell us about your project. We&apos;ll respond within one
                business day with next steps and a rough timeline.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  ["Response time", "< 24 hours"],
                  ["Discovery call", "Free, 30 minutes"],
                  ["Typical scope", "₹2L – ₹20L per engagement"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-border pb-4"
                  >
                    <span className="text-[13px] uppercase tracking-widest text-muted-foreground">
                      {k}
                    </span>
                    <span className="text-[15px] font-medium text-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LazyQuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
