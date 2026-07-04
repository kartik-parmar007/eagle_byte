import type { Metadata } from "next";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact Eagle Byte — Book a Free Strategy Call",
  description:
    "Book a free strategy call with Eagle Byte. Response within one business day.",
  keywords:
    "contact Eagle Byte, Eagle Byte phone number, Eagle Byte email, book strategy call, free consultation, hire developers India, hire web developer Gujarat, hire full stack developer, project quote, website development quote, app development cost India, digital engineering agency, contact Kartik Parmar",
  alternates: {
    canonical: "https://eaglebyte.in/contact/",
  },
  openGraph: {
    title: "Contact Eagle Byte",
    description: "Let's build something great.",
    url: "https://eaglebyte.in/contact/",
    images: [
      {
        url: "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
      },
    ],
  },
  twitter: {
    title: "Contact Eagle Byte",
    description: "Book a free strategy call.",
    images: [
      "https://ik.imagekit.io/eaglebyte/public/eaglebyte-logo-transparent.webp",
    ],
  },
};

export default function ContactPage() {
  return <ContactFormClient />;
}
