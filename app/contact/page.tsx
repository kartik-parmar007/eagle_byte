import type { Metadata } from "next";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Eagle Byte — Book a Free Strategy Call",
  description:
    "Book a free strategy call with Eagle Byte. Response within one business day.",
  keywords:
    "contact Eagle Byte, book strategy call, free consultation, hire developers, project quote, digital engineering agency",
  alternates: {
    canonical: "https://eaglebyte.in/contact/",
  },
  openGraph: {
    title: "Contact Eagle Byte",
    description: "Let's build something great.",
    url: "https://eaglebyte.in/contact/",
    images: [{ url: "https://eaglebyte.in/og-cover.jpg" }],
  },
  twitter: {
    title: "Contact Eagle Byte",
    description: "Book a free strategy call.",
    images: ["https://eaglebyte.in/og-cover.jpg"],
  },
};

export default function ContactPage() {
  return <ContactFormClient />;
}
