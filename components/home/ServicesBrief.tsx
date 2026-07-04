import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesBrief } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

export function ServicesBrief() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* soft background depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F8FAFF] dark:bg-background" />
        <div
          className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full blur-[90px] opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(10,92,255,0.30), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-[-5%] h-[350px] w-[350px] rounded-full blur-[80px] opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(37,99,235,0.25), transparent 70%)",
          }}
        />
      </div>
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 items-end">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                Our Services
              </p>
              <h2 className="mt-4 text-[36px] md:text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                Enterprise engineering,
                <br />
                delivered end to end.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-muted-foreground max-w-xl lg:ml-auto">
              From high-performance websites to AI-driven automation and cloud
              infrastructure — we design, build, and scale the systems that power
              modern businesses.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesBrief.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="group relative flex flex-col h-full rounded-xl border border-[#E2E8F6] dark:border-border bg-white/80 dark:bg-card/80 backdrop-blur-sm p-5 md:p-5.5 transition-all hover:border-primary/40 hover:shadow-[0_16px_48px_-16px_rgba(10,92,255,0.18)] hover:-translate-y-1">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-semibold text-primary">
                    {s.n}
                  </span>
                  
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/5 dark:bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-3 flex flex-col flex-grow">
                  <h3 className="text-[16px] md:text-[18px] font-semibold tracking-tight text-ink group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[13px] md:text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-3.5 space-y-1 border-t border-[#E2E8F6] dark:border-border pt-2.5 flex-grow">
                    {s.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-1.5 text-[11.5px] md:text-[12.5px] text-foreground/80">
                        <span className="flex h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:gap-3 transition-all"
          >
            Explore all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
