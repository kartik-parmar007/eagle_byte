import { workflow } from "@/lib/site-content";
import { Reveal } from "@/components/shared/Reveal";
import {
  MousePointerClick,
  Brain,
  Database,
  Mail,
  Users,
  BarChart3,
} from "lucide-react";

const icons = [MousePointerClick, Brain, Database, Mail, Users, BarChart3];

export function AIWorkflow() {
  return (
    <section className="relative py-12 md:py-16 bg-[#0B1F4D] text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 10%, rgba(10,92,255,0.35), transparent 60%), radial-gradient(600px 300px at 80% 90%, rgba(37,99,235,0.25), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <Reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8FB5FF] font-semibold">
                AI Automation Showcase
              </p>
              <h2 className="mt-4 text-[36px] md:text-[52px] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
                One agent.
                <br />
                <span
                  className="bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)",
                    color: "transparent",
                  }}
                >
                  Six systems.
                </span>
                <br />
                Zero manual work.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70">
                We wire your CRM, email, and internal tools into a single
                AI-driven pipeline. Leads get captured, qualified, routed, and
                followed up — while your team focuses on closing.
              </p>
              <ul className="mt-8 space-y-3 text-[14px] text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Runs 24/7 without human intervention
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Integrates with Salesforce, HubSpot, Google Workspace, Slack
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  Auditable, observable, and roll-back-safe
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <div className="flex flex-col gap-3">
                {workflow.map((step, i) => {
                  const Icon = icons[i];
                  return (
                    <div key={step} className="flex flex-col items-stretch">
                      <Reveal
                        x={-12}
                        y={0}
                        duration={0.5}
                        delay={i * 0.1}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] font-mono text-white/60">
                            STEP {String(i + 1).padStart(2, "0")}
                          </div>
                          <div className="text-[15px] font-semibold text-white">
                            {step}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                          live
                        </div>
                      </Reveal>
                      {i < workflow.length - 1 && (
                        <div className="mx-auto h-6 w-px relative overflow-hidden">
                          <svg
                            width="2"
                            height="24"
                            className="absolute inset-0"
                            aria-hidden
                          >
                            <line
                              x1="1"
                              y1="0"
                              x2="1"
                              y2="24"
                              stroke="#0A5CFF"
                              strokeWidth="2"
                              className="animate-flow"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
