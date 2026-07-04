import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Analytics, GtmNoScript } from "@/components/site/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A5CFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglebyte.in"),
  title: {
    default: "Eagle Byte — Premium Digital Engineering Studio",
    template: "%s | Eagle Byte",
  },
  description:
    "Eagle Byte engineers high-performance websites, enterprise applications, and AI-powered automation systems for modern businesses.",
  keywords: [
    "Eagle Byte",
    "custom website development",
    "enterprise web applications",
    "AI agents",
    "workflow automation",
    "SaaS development",
    "business process digitization",
    "cloud solutions",
    "DevOps",
    "digital engineering",
    "software agency India",
  ],
  authors: [{ name: "Eagle Byte" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    siteName: "Eagle Byte",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eaglebyte",
    creator: "@eaglebyte",
  },
  verification: {
    google: "V5AZ_iJGTAamzZjX4DaZjhm1xmHubexQK29oD_V7EGE",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eagle Byte",
  url: "https://eaglebyte.in",
  logo: "https://eaglebyte.in/eaglebyte-logo-transparent.webp",
  description:
    "Premium digital engineering studio specializing in custom websites, enterprise web applications, AI agents, and workflow automation.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Dark mode anti-flash: apply .dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var mql=window.matchMedia('(prefers-color-scheme:dark)');function u(){document.documentElement.classList.toggle('dark',mql.matches);}u();mql.addEventListener('change',u);})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* All images are served from ImageKit — warm the connection early (LCP) */}
        <link rel="preconnect" href="https://ik.imagekit.io" />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <GtmNoScript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
