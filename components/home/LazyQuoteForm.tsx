"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

function FormSkeleton() {
  return (
    <div
      aria-hidden
      className="relative min-h-[600px] rounded-3xl border border-border bg-white dark:bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="mb-2 h-4 w-24 rounded bg-surface animate-pulse" />
            <div className="h-[46px] rounded-xl border border-border bg-surface/60 animate-pulse" />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="mb-2 h-4 w-32 rounded bg-surface animate-pulse" />
        <div className="h-[144px] rounded-xl border border-border bg-surface/60 animate-pulse" />
      </div>
      <div className="mt-7 h-[52px] rounded-full bg-primary/20 animate-pulse" />
    </div>
  );
}

const QuoteFormFields = dynamic(
  () => import("./QuoteFormFields").then((m) => m.QuoteFormFields),
  { ssr: false, loading: () => <FormSkeleton /> }
);

export function LazyQuoteForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      // Start loading the form chunk well before it scrolls into view
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{near ? <QuoteFormFields /> : <FormSkeleton />}</div>;
}
