import { process } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

export function Process() {
  return (
    <section className="cv-auto relative py-12 md:py-16 overflow-hidden">
      {/* subtle background tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[#FAFBFF] dark:bg-background"
      />
      <div className="container-x relative">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
              How we work
            </p>
            <h2 className="mt-4 text-[36px] md:text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              A seven-step process, refined across dozens of ships.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 relative">
          {/* Horizontal connector on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.04}>
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white dark:bg-card text-[15px] font-mono font-semibold text-primary shadow-[var(--shadow-elegant)]">
                    {s.n}
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-[16px] font-semibold tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
