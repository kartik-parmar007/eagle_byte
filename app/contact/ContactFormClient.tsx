"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { contactInfo } from "@/lib/site-content";
import { insertContactMessage } from "@/lib/supabase";

const BUDGETS = [
  "Under ₹10K",
  "₹10K – ₹30K",
  "₹30K – ₹75K",
  "₹75K – ₹100K",
  "₹100K+",
] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be under 80 characters")
    .regex(
      /^[A-Za-z][A-Za-z\s.'-]*$/,
      "Name can only contain letters, spaces, and . ' -"
    ),
  email: z
    .string()
    .trim()
    .min(5, "Enter your email address")
    .max(120, "Email must be under 120 characters")
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s-]+$/, "Phone can only contain digits")
    .refine(
      (v) => v.replace(/\D/g, "").length === 10,
      "Enter a 10-digit mobile number (no +91 needed)"
    ),
  company: z
    .string()
    .trim()
    .max(120, "Company must be under 120 characters")
    .optional()
    .or(z.literal("")),
  projectTitle: z
    .string()
    .trim()
    .min(3, "Give your project a short title (at least 3 characters)")
    .max(120, "Project title must be under 120 characters"),
  budget: z.enum(BUDGETS, {
    message: "Select a budget range",
  }),
  message: z
    .string()
    .trim()
    .min(100, "Please describe your project in at least 100 characters")
    .max(2000, "Message must be under 2000 characters"),
});
type Values = z.infer<typeof schema>;

export function ContactFormClient() {
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    // Validate on blur first, then re-validate as the user types a fix
    mode: "onTouched",
  });

  const onSubmit = async (v: Values) => {
    setFailed(false);
    try {
      await insertContactMessage({
        name: v.name,
        email: v.email,
        // Store digits only, e.g. "98765 43210" -> "9876543210"
        phone: v.phone.replace(/\D/g, ""),
        company: v.company?.trim() ? v.company.trim() : null,
        project_title: v.projectTitle,
        budget: v.budget,
        message: v.message,
      });
      setDone(true);
      reset();
      setTimeout(() => setDone(false), 8000);
    } catch {
      setFailed(true);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="container-x max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                Contact
              </p>
              <h1 className="mt-4 text-[44px] md:text-[60px] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                Let&apos;s Build Something{" "}
                <span className="text-gradient">Great.</span>
              </h1>
              <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground max-w-md">
                Tell us about your project. We reply within one business day —
                usually with a suggested next step and a rough timeline.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  {
                    Icon: Mail,
                    k: "Email",
                    v: contactInfo.email,
                    href: contactInfo.emailHref,
                  },
                  {
                    Icon: Phone,
                    k: "Phone",
                    v: contactInfo.phone,
                    href: contactInfo.phoneHref,
                  },
                  {
                    Icon: MessageCircle,
                    k: "WhatsApp",
                    v: "Chat with us",
                    href: contactInfo.whatsapp,
                  },
                  { Icon: MapPin, k: "Location", v: contactInfo.location },
                  {
                    Icon: Clock,
                    k: "Response Time",
                    v: contactInfo.responseTime,
                  },
                ].map(({ Icon, k, v, href }) => (
                  <div key={k} className="flex items-start gap-4">
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/15">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[12px] uppercase tracking-widest text-muted-foreground">
                        {k}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="text-[15px] text-ink font-medium hover:text-primary transition-colors"
                        >
                          {v}
                        </a>
                      ) : (
                        <div className="text-[15px] text-ink font-medium">
                          {v}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border bg-white dark:bg-card p-7 md:p-10 shadow-[var(--shadow-card)]"
            >
              {done && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-950/30 p-4 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                  <div className="text-[14px]">
                    Message received. We&apos;ll be in touch within one
                    business day.
                  </div>
                </div>
              )}
              {failed && (
                <div
                  role="alert"
                  className="mb-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-[14px] text-destructive"
                >
                  Couldn&apos;t send your message. Please try again, or email
                  us directly at {contactInfo.email}.
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className={inputCls}
                    placeholder="Your full name"
                    autoComplete="name"
                    maxLength={80}
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field label="Email *" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className={inputCls}
                    placeholder="you@company.com"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={120}
                    aria-invalid={!!errors.email}
                  />
                </Field>
                <Field label="Phone *" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={inputCls}
                    placeholder="10-digit mobile number"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={13}
                    aria-invalid={!!errors.phone}
                  />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className={inputCls}
                    placeholder="Company name"
                    autoComplete="organization"
                    maxLength={120}
                    aria-invalid={!!errors.company}
                  />
                </Field>
                <Field
                  label="Project Title *"
                  error={errors.projectTitle?.message}
                >
                  <input
                    {...register("projectTitle")}
                    className={inputCls}
                    placeholder="e.g. E-commerce site for my store"
                    maxLength={120}
                    aria-invalid={!!errors.projectTitle}
                  />
                </Field>
                <Field label="Budget *" error={errors.budget?.message}>
                  <select
                    {...register("budget")}
                    className={inputCls}
                    defaultValue=""
                    aria-invalid={!!errors.budget}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message *" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={inputCls + " resize-y min-h-[140px]"}
                    placeholder="What are you trying to build? Goals, timeline, current stack… (at least 100 characters)"
                    maxLength={2000}
                    aria-invalid={!!errors.message}
                  />
                </Field>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-[14px] font-medium text-white shadow-[var(--shadow-glow)] hover:shadow-[0_30px_80px_-20px_rgba(10,92,255,0.55)] transition-shadow disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Let's Build Something Great"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 16px on mobile is required: iOS Safari force-zooms the page when
// focusing any input with a font size below 16px
const inputCls =
  "w-full rounded-xl border border-border bg-white dark:bg-background px-4 py-3 text-[16px] md:text-[14px] text-ink placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-medium text-ink">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-[12px] text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}
