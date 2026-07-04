import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Projects — Real Products We've Shipped | Eagle Byte",
  description:
    "Selected work from Eagle Byte — real products shipped for real businesses across commerce, portfolio, and organic marketplaces.",
  keywords:
    "projects, portfolio, V2 Enterprise, Sitaram Organic, client work, product engineering, web development results",
  alternates: {
    canonical: "https://eaglebyte.in/projects/",
  },
  openGraph: {
    title: "Projects — Eagle Byte",
    description: "Real products. Real results.",
    url: "https://eaglebyte.in/projects/",
    images: [{ url: "https://eaglebyte.in/og-cover.jpg" }],
  },
  twitter: {
    title: "Projects — Eagle Byte",
    description: "Real products. Real results.",
    images: ["https://eaglebyte.in/og-cover.jpg"],
  },
};

export default function Projects() {
  return (
    <>
      <section className="pb-16 md:pb-20 pt-16 md:pt-20">
        <div className="container-x space-y-10 md:space-y-14">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.05}>
              <article className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative block overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)] hover:shadow-[0_30px_80px_-30px_rgba(10,92,255,0.35)] transition-shadow"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-card/95 backdrop-blur px-3 py-1.5 text-[11px] font-medium text-ink">
                      Live <ExternalLink className="h-3 w-3" />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[44px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-[15px] text-muted-foreground">
                    {p.tagline}
                  </p>
                  <p className="mt-6 text-[16px] leading-relaxed text-foreground/80">
                    {p.desc}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[28px] font-semibold text-ink">
                          {m.value}
                        </div>
                        <div className="text-[12px] uppercase tracking-widest text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[12px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-9 inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:gap-3 transition-all"
                  >
                    Visit live project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/60 border-t border-border">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[32px] md:text-[44px] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
              Your project could be next.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-medium text-white shadow-[var(--shadow-glow)]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
