import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedProjects() {
  return (
    <section className="relative py-12 md:py-16 bg-surface/60 border-y border-border">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                Selected Work
              </p>
              <h2 className="mt-4 text-[36px] md:text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                Real products.
                <br />
                Real results.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:text-primary transition-colors"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.12}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex flex-col rounded-3xl border border-border bg-white dark:bg-card overflow-hidden shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-30px_rgba(10,92,255,0.45)] hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    fill
                    className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Shine sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 transition-transform duration-[1200ms] ease-out group-hover:translate-x-full" />
                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-card/95 backdrop-blur px-3 py-1.5 text-[11px] font-medium text-ink opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Visit live <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[20px] font-semibold tracking-tight text-ink">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-[13px] text-muted-foreground">
                        {p.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-6 border-t border-border pt-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[18px] font-semibold text-ink">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
