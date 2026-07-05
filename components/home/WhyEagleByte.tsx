import {
  Target,
  Zap,
  ShieldCheck,
  Sparkles,
  Server,
  Handshake,
} from "lucide-react";
import { whyUs } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Zap,
  ShieldCheck,
  Sparkles,
  Server,
  Handshake,
};

export function WhyEagleByte() {
  return (
    <section className="cv-auto relative py-12 md:py-16 overflow-hidden">
      {/* soft background depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F8FF] via-white to-[#F8FAFF] dark:from-[#0B1022] dark:via-background dark:to-[#060A14]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full blur-[100px] opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(10,92,255,0.35), transparent 70%)",
          }}
        />
      </div>
      <div className="container-x relative">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold text-center">
            Why Eagle Byte
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-[36px] md:text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
            Enterprise-grade delivery, without enterprise-grade friction.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = icons[w.icon];
            return (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="group relative h-full rounded-2xl border border-border bg-white dark:bg-card p-8 shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_rgba(10,92,255,0.35)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
