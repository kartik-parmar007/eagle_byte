import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { contactInfo } from "@/lib/site-content";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", to: "/services" },
      { label: "AI Agents", to: "/services" },
      { label: "Workflow Automation", to: "/services" },
      { label: "Cloud & DevOps", to: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare", to: "/solutions" },
      { label: "Finance", to: "/solutions" },
      { label: "E-Commerce", to: "/solutions" },
      { label: "Startups", to: "/solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Book Strategy Call", to: "/contact" },
      { label: "Request a Quote", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="cv-auto relative border-t border-border bg-white dark:bg-background">
      <div className="container-x py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/eaglebyte-logo-transparent.webp"
                alt="Eagle Byte"
                width={56}
                height={56}
                className="h-14 w-14 object-contain dark:invert dark:hue-rotate-180"
              />
              <span className="text-[17px] font-semibold tracking-tight text-ink">
                Eagle<span className="text-primary">Byte</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              A premium digital engineering studio building websites, enterprise
              applications, and AI-powered automation for serious businesses.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[12px] font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[12px] font-semibold tracking-widest text-ink uppercase">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      href={l.to}
                      className="text-[14px] text-muted-foreground hover:text-ink transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Eagle Byte · Founded by{" "}
            {contactInfo.founder} · {contactInfo.location}
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Phone, href: contactInfo.phoneHref, label: "Call" },
              {
                Icon: MessageCircle,
                href: contactInfo.whatsapp,
                label: "WhatsApp",
                external: true,
              },
              { Icon: Mail, href: contactInfo.emailHref, label: "Email" },
              {
                Icon: Linkedin,
                href: contactInfo.linkedin,
                label: "LinkedIn",
                external: true,
              },
              {
                Icon: Instagram,
                href: contactInfo.instagram,
                label: "Instagram",
                external: true,
              },
            ].map(({ Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
