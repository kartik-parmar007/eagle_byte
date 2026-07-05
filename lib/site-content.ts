// Site content — ported from TanStack Start src/lib/site-content.ts
// Images now use local /public paths or live external URLs

export const contactInfo = {
  phone: "+91 97734 05142",
  phoneHref: "tel:+919773405142",
  whatsapp:
    "https://wa.me/919773405142?text=Hi!%20I%27m%20interested%20in%20Eagle%20Byte%27s%20services.",
  email: "contact@eaglebyte.in",
  emailHref: "mailto:contact@eaglebyte.in",
  location: "Gujarat, India",
  responseTime: "Within 24 hours",
  founder: "Kartik Parmar",
  founderRole: "Founder & Lead Developer",
  linkedin: "https://www.linkedin.com/company/eaglebyte/",
  instagram: "https://www.instagram.com/eaglebyte.in",
  founderLinkedin: "https://www.linkedin.com/in/kartik-parmar-/",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const servicesBrief = [
  { 
    n: "01", 
    title: "Web Development", 
    desc: "Fast, modern websites engineered for scale.", 
    image: "/service-web.webp",
    features: ["Custom SaaS Platforms", "Marketing & Landing Pages", "High-Conversion E-Commerce", "Headless CMS Integration"]
  },
  { 
    n: "02", 
    title: "Mobile Applications", 
    desc: "Native-grade apps for iOS and Android.", 
    image: "/service-mobile.webp",
    features: ["iOS & Android Native Apps", "Cross-Platform React Native", "App Store Publishing", "Offline-First Sync"]
  },
  { 
    n: "03", 
    title: "Cloud & DevOps", 
    desc: "Infrastructure that scales silently.", 
    image: "/service-cloud.webp",
    features: ["AWS/GCP Infrastructure", "CI/CD Auto-Deployments", "Docker & Kubernetes", "Performance & Cost Audit"]
  },
  { 
    n: "04", 
    title: "AI & Machine Learning", 
    desc: "Ship AI that actually works in production.", 
    image: "/service-ai.webp",
    features: ["Autonomous AI Agents", "LLM Integration & Tuning", "Predictive Analytics", "Workflow Automation"]
  },
  { 
    n: "05", 
    title: "Product Design", 
    desc: "Interfaces people love to use.", 
    image: "/service-design.webp",
    features: ["Interactive Prototyping", "UI/UX Design Systems", "Wireframing & Workflows", "Brand & Logo Identity"]
  },
  { 
    n: "06", 
    title: "Technical Consulting", 
    desc: "A senior team, on demand.", 
    image: "/service-consulting.webp",
    features: ["Tech Stack Architecture", "Performance & SEO Audit", "Security & Compliance", "Fractional CTO Services"]
  },
] as const;

export const servicesFull = [
  {
    title: "Custom Website Development",
    desc: "Handcrafted marketing sites and content platforms with world-class performance, accessibility, and SEO baked in.",
    icon: "Globe",
  },
  {
    title: "Enterprise Web Applications",
    desc: "Complex, mission-critical software with role-based access, audit trails, and integrations built to enterprise standards.",
    icon: "Building2",
  },
  {
    title: "AI Agents",
    desc: "Autonomous agents that read, decide, and act — connected to your tools, data, and customers.",
    icon: "Bot",
  },
  {
    title: "Workflow Automation",
    desc: "Replace repetitive work with reliable pipelines across CRM, email, sheets, and internal systems.",
    icon: "Workflow",
  },
  {
    title: "Custom SaaS Platforms",
    desc: "Multi-tenant products with billing, admin, analytics, and a roadmap to product-market fit.",
    icon: "LayoutDashboard",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS-first architecture, CI/CD, observability, and cost-aware infrastructure that scales quietly.",
    icon: "Cloud",
  },
  {
    title: "Business Process Digitization",
    desc: "Turn spreadsheets and paper trails into structured, auditable digital workflows.",
    icon: "Layers",
  },
  {
    title: "Maintenance & Support",
    desc: "SLA-backed support, monitoring, and continuous improvement long after launch.",
    icon: "Wrench",
  },
] as const;

export const whyUs = [
  {
    title: "Business First",
    desc: "Technology aligned with business outcomes, not vanity metrics.",
    icon: "Target",
  },
  {
    title: "Performance Driven",
    desc: "Sub-second interactions, 95+ Lighthouse, zero-compromise engineering.",
    icon: "Zap",
  },
  {
    title: "Enterprise Security",
    desc: "Secure by design — RLS, least privilege, encryption, audit logs.",
    icon: "ShieldCheck",
  },
  {
    title: "AI Automation Expertise",
    desc: "Reduce manual work and multiply team productivity with agents.",
    icon: "Sparkles",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Architected for tomorrow's traffic on day one.",
    icon: "Server",
  },
  {
    title: "Long-Term Partnership",
    desc: "Continuous support, iteration, and roadmap co-ownership.",
    icon: "Handshake",
  },
] as const;

export const process = [
  { n: "01", title: "Discovery", desc: "Understand business goals, users, and constraints." },
  { n: "02", title: "Strategy", desc: "Scope, architecture, and success metrics." },
  { n: "03", title: "Design", desc: "Interfaces and systems worth using." },
  { n: "04", title: "Development", desc: "Ship in weekly increments." },
  { n: "05", title: "Testing", desc: "Automated + real-world QA." },
  { n: "06", title: "Deployment", desc: "Zero-downtime release pipelines." },
  { n: "07", title: "Growth", desc: "Iterate, measure, compound." },
];

export const solutions = [
  {
    title: "Healthcare",
    desc: "HIPAA-aware patient portals, telemedicine, and clinical workflows.",
    icon: "Stethoscope",
  },
  {
    title: "Finance",
    desc: "KYC, dashboards, and regulatory-grade audit trails.",
    icon: "Landmark",
  },
  {
    title: "Education",
    desc: "LMS platforms, admissions, and student engagement.",
    icon: "GraduationCap",
  },
  {
    title: "Manufacturing",
    desc: "IoT dashboards, MES integrations, and production visibility.",
    icon: "Factory",
  },
  {
    title: "E-Commerce",
    desc: "High-conversion storefronts with modern checkout and CMS.",
    icon: "ShoppingBag",
  },
  { title: "Startups", desc: "MVPs shipped in weeks — designed to scale.", icon: "Rocket" },
] as const;

export const projects = [
  {
    slug: "v2enterprise",
    name: "V2 Enterprise",
    url: "https://v2enterprise.in/",
    tagline: "A Smart Fashion World",
    desc: "A refined multi-category fashion storefront built for scale — editorial hero storytelling, category-driven browsing, a friction-free cash-on-delivery checkout, and a CMS that lets the team push new drops in minutes, not days.",
    image: "/v2enterprise.webp",
    tags: ["Next.js", "E-Commerce", "CMS", "SEO"],
    metrics: [
      { label: "Faster load", value: "3.2×" },
      { label: "Cart conversion", value: "+42%" },
    ],
  },
  {
    slug: "sitaramorganic",
    name: "Sitaram Organic",
    url: "https://www.sitaramorganic.com/",
    tagline: "Farm-direct organic marketplace",
    desc: "A regional-language commerce experience connecting farms directly to households. Built with daily-price feeds, WhatsApp-native ordering, and a mobile-first checkout tuned for rural connectivity — helping farmers reach urban buyers without middlemen.",
    image: "/sitaramorganic.webp",
    tags: ["React", "Commerce", "WhatsApp API", "Mobile-First"],
    metrics: [
      { label: "Orders / month", value: "1.4K+" },
      { label: "Repeat rate", value: "68%" },
    ],
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "Support Coverage" },
];

export const testimonials = [
  {
    quote:
      "Eagle Byte re-engineered our internal workflows end-to-end. What used to take our ops team two days is now a two-minute click. Serious engineering discipline.",
    author: "Head of Operations",
    company: "Regional Retail Group",
  },
  {
    quote:
      "The team shipped an AI agent that qualifies leads while we sleep. Our sales calendar has never been fuller. They think like founders.",
    author: "Founder",
    company: "B2B SaaS Startup",
  },
  {
    quote:
      "Enterprise-grade delivery without enterprise-grade friction. Clear communication, tight scope, exceptional craft. They set a new bar for our vendors.",
    author: "CTO",
    company: "Fintech Scale-up",
  },
];

export const faqs = [
  {
    q: "What services does Eagle Byte offer?",
    a: "Custom websites, enterprise web applications, AI agents & automation, workflow automation, SaaS product development, cloud & DevOps, business process digitization, and long-term maintenance & support.",
  },
  {
    q: "Who is Kartik Parmar?",
    a: "Kartik Parmar is the founder and lead engineer at Eagle Byte. He leads architecture, engineering standards, and client strategy across every project the studio ships.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "A marketing site typically ships in 2–4 weeks. Enterprise applications and SaaS products range from 6 to 16 weeks depending on scope. Every engagement starts with a discovery call to set a firm timeline.",
  },
  {
    q: "What is your pricing structure?",
    a: "We work in fixed-scope engagements and monthly retainers. Typical projects range from ₹2L to ₹20L. You'll get a written proposal with milestones and deliverables before we start.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes — SLA-backed maintenance, monitoring, security patches, and continuous improvement are available on monthly retainers. Most clients stay with us for years, not weeks.",
  },
  {
    q: "Does Eagle Byte handle SEO and performance?",
    a: "Every site we ship targets a 95+ Lighthouse score, structured metadata, semantic HTML, and Core Web Vitals as a baseline — not an add-on. Advanced SEO retainers are available.",
  },
];

export const techLogos = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Supabase",
  "Firebase",
  "OpenAI",
  "Google AI",
];

export const workflow = [
  "Lead Capture",
  "AI Qualification",
  "CRM Update",
  "Email Automation",
  "Follow-up Agent",
  "Sales Dashboard",
];
