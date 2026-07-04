"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-12 md:py-16 bg-surface/60 border-y border-border">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                FAQ
              </p>
              <h2 className="mt-4 text-[36px] md:text-[48px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                Frequently Asked Questions
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-md">
                Got questions? We&apos;ve got answers. If you don&apos;t find
                what you&apos;re looking for, feel free to contact us.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white dark:bg-card overflow-hidden divide-y divide-border shadow-[var(--shadow-elegant)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-start justify-between gap-6 text-left px-6 md:px-8 py-6 hover:bg-surface/60 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-[13px] font-mono text-muted-foreground mt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[16px] md:text-[17px] font-medium text-ink">
                          {f.q}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all ${
                          isOpen
                            ? "bg-primary text-white border-primary rotate-45"
                            : "text-ink"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="px-6 md:px-8 pb-6 pl-16 text-[15px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
