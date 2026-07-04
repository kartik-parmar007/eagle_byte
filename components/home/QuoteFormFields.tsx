"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  mobile: z.string().trim().min(6, "Enter a valid mobile number").max(20),
  title: z.string().trim().min(3, "Give your project a title").max(120),
  description: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (min 10 chars)")
    .max(1200),
});
type Values = z.infer<typeof schema>;

export function QuoteFormFields() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: Values) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("[Eagle Byte] Quote request", { ...v, email: "***" });
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 6000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-3xl border border-border bg-white dark:bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
    >
      {done && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-950/30 p-4 text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
          <div className="text-[14px]">
            Thanks! Your request is in. We&apos;ll reply within one business
            day.
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Your full name"
            className={inputCls}
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register("email")}
            placeholder="your@email.com"
            className={inputCls}
          />
        </Field>
        <Field label="Mobile Number *" error={errors.mobile?.message}>
          <input
            {...register("mobile")}
            placeholder="+91 XXXXX XXXXX"
            className={inputCls}
          />
        </Field>
        <Field label="Project Title *" error={errors.title?.message}>
          <input
            {...register("title")}
            placeholder="Project Title"
            className={inputCls}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field
          label="Project Description *"
          error={errors.description?.message}
        >
          <textarea
            {...register("description")}
            rows={5}
            placeholder="What are you building? Goals, timeline, current stack…"
            className={inputCls + " resize-y min-h-[120px]"}
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
      <p className="mt-3 text-center text-[12px] text-muted-foreground">
        By submitting you agree to be contacted about your enquiry.
      </p>
    </form>
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
