"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { nav } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "animate-header-in fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 dark:bg-[#060A14]/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(17,24,39,0.04)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/eaglebyte-logo-transparent.webp"
            alt="Eagle Byte"
            width={64}
            height={64}
            className="h-14 w-14 md:h-16 md:w-16 object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "relative px-4 py-2 text-[14px] font-medium transition-colors",
                  isActive
                    ? "text-ink"
                    : "text-foreground/75 hover:text-ink"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0B1F4D] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-primary transition-colors group"
          >
            Book Strategy Call
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "lg:hidden grid bg-white dark:bg-card transition-[grid-template-rows,opacity] duration-300 ease-out",
          open
            ? "grid-rows-[1fr] opacity-100 border-t border-border"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-[15px] font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F4D] px-5 py-3 text-[14px] font-medium text-white"
            >
              Book Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
