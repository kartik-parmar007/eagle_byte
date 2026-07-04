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

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});
type Values = z.infer<typeof schema>;

export function ContactFormClient() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: Values) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("[Eagle Byte] Contact", { ...v, email: "***" });
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 8000);
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
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className={inputCls}
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email *" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Phone *" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    className={inputCls}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className={inputCls}
                    placeholder="Company name"
                  />
                </Field>
                <Field
                  label="Project Type *"
                  error={errors.projectType?.message}
                >
                  <select
                    {...register("projectType")}
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Custom Website</option>
                    <option>Enterprise Web App</option>
                    <option>AI Agent / Automation</option>
                    <option>SaaS Product</option>
                    <option>Cloud & DevOps</option>
                    <option>Mobile Application</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Budget *" error={errors.budget?.message}>
                  <select
                    {...register("budget")}
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Under ₹2L</option>
                    <option>₹2L – ₹5L</option>
                    <option>₹5L – ₹10L</option>
                    <option>₹10L – ₹20L</option>
                    <option>₹20L +</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message *" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={inputCls + " resize-y min-h-[140px]"}
                    placeholder="What are you trying to build? Timeline? Current stack?"
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

const inputCls =
  "w-full rounded-xl border border-border bg-white dark:bg-background px-4 py-3 text-[14px] text-ink placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all";

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
