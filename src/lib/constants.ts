export const SITE = {
  name: "Bharat AI Solutions",
  tagline: "AI Solutions for Modern Businesses",
  description:
    "We build AI-powered websites, marketing content, automation systems, chatbots and business solutions that save time, increase revenue and reduce manual work.",
  url: "https://bharataisolutions.com",
  whatsapp: "919518846970",
  email: "hello@bharataisolutions.com",
  location: "India",
  startingPrice: "₹6,999",
} as const;

export const WHATSAPP_MESSAGE =
  "Hi Bharat AI Solutions, I'd like to discuss AI solutions for my business.";

export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "95+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
] as const;

export const SERVICES = [
  {
    id: "websites",
    title: "AI Websites",
    description:
      "Fast, modern websites designed to convert visitors into customers — built with AI-assisted design and clean code.",
    points: ["Mobile-first design", "Lead capture forms", "WhatsApp integration"],
  },
  {
    id: "videos",
    title: "AI Marketing Videos",
    description:
      "Scroll-stopping product and brand videos created with AI — ready for Instagram, YouTube, and ads.",
    points: ["Product demos", "Reels & shorts", "Ad creatives"],
  },
  {
    id: "automation",
    title: "AI Business Automation",
    description:
      "Automate follow-ups, lead handling, invoicing workflows, and daily operations so your team focuses on growth.",
    points: ["Lead workflows", "CRM sync", "Task automation"],
  },
  {
    id: "agents",
    title: "AI Agents & Chatbots",
    description:
      "24/7 assistants that answer customer questions, book appointments, and qualify leads on your website and WhatsApp.",
    points: ["Website chat", "WhatsApp bots", "Lead qualification"],
  },
  {
    id: "seo",
    title: "SEO & Google Business",
    description:
      "Get found by local customers with search-optimized pages and a polished Google Business Profile.",
    points: ["Local SEO", "GBP setup", "Keyword pages"],
  },
  {
    id: "custom",
    title: "Custom AI Software",
    description:
      "Tailored AI tools for your industry — dashboards, internal tools, and intelligent systems built around your process.",
    points: ["Custom workflows", "Admin panels", "API integrations"],
  },
] as const;

export const PRICING = [
  {
    id: "starter",
    name: "Website Starter",
    price: "₹6,999",
    period: "one-time",
    description: "A clean, professional website to get your business online fast.",
    featured: false,
    features: [
      "Responsive website",
      "Domain guidance",
      "Basic SEO",
      "Contact form",
      "WhatsApp integration",
      "1 year maintenance",
    ],
  },
  {
    id: "growth",
    name: "Growth Package",
    price: "₹14,999",
    period: "one-time",
    description: "Website plus marketing assets to attract and convert more customers.",
    featured: true,
    features: [
      "Everything in Starter",
      "AI marketing videos",
      "Google Business setup",
      "Lead capture system",
      "On-page SEO boost",
      "Priority support",
    ],
  },
  {
    id: "automation",
    name: "Business Automation",
    price: "₹24,999",
    period: "starting at",
    description: "Automate operations with AI agents, chatbots, and workflow systems.",
    featured: false,
    features: [
      "AI chatbot / WhatsApp agent",
      "Lead & follow-up automation",
      "CRM / sheet integrations",
      "Custom workflows",
      "Training for your team",
      "30-day optimization",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise AI",
    price: "Custom",
    period: "quote",
    description: "End-to-end AI systems for growing companies with unique requirements.",
    featured: false,
    features: [
      "Custom AI software",
      "Multi-system integrations",
      "Dedicated project manager",
      "Security & compliance review",
      "SLA-backed support",
      "Ongoing partnership",
    ],
  },
] as const;

export const PORTFOLIO = [
  {
    title: "MediCare Clinic Portal",
    industry: "Healthcare",
    timeline: "12 days",
    result: "3.2× more appointment bookings",
    accent: "#2563EB",
  },
  {
    title: "LearnSphere Academy",
    industry: "Education",
    timeline: "14 days",
    result: "68% increase in course inquiries",
    accent: "#0B0B0B",
  },
  {
    title: "ForgeWorks Manufacturing",
    industry: "Manufacturing",
    timeline: "21 days",
    result: "Automated 40% of lead follow-ups",
    accent: "#1D4ED8",
  },
  {
    title: "SpiceRoute Kitchen",
    industry: "Restaurants",
    timeline: "8 days",
    result: "2× online orders in 30 days",
    accent: "#111827",
  },
  {
    title: "Nestora Realty",
    industry: "Real Estate",
    timeline: "16 days",
    result: "Qualified leads up 55%",
    accent: "#2563EB",
  },
  {
    title: "UrbanCart Retail",
    industry: "Retail",
    timeline: "18 days",
    result: "Reduced support load by 35%",
    accent: "#0F172A",
  },
] as const;

export const WHY_US = [
  {
    title: "AI-first company",
    description: "Every project is designed with AI capabilities that deliver measurable business outcomes.",
  },
  {
    title: "Affordable pricing",
    description: "Premium quality starting at ₹6,999 — built for Indian SMBs, not enterprise budgets alone.",
  },
  {
    title: "Fast delivery",
    description: "Clear timelines and focused execution so your website or automation launches quickly.",
  },
  {
    title: "1-year maintenance",
    description: "We stay with you after launch with included maintenance on website packages.",
  },
  {
    title: "WhatsApp support",
    description: "Talk to us where you already work — fast responses, no ticket queues.",
  },
  {
    title: "Built for Indian businesses",
    description: "Local SEO, WhatsApp-first flows, INR pricing, and industry-aware solutions.",
  },
] as const;

export const PROCESS = [
  { step: "01", title: "Consultation", description: "We understand your business goals, customers, and current challenges." },
  { step: "02", title: "Planning", description: "We define scope, features, timeline, and the best AI approach for you." },
  { step: "03", title: "Design", description: "Clean, premium visuals that match your brand and convert visitors." },
  { step: "04", title: "Development", description: "We build your website, automation, or AI system with care and speed." },
  { step: "05", title: "Testing", description: "Everything is checked for quality, speed, and mobile experience." },
  { step: "06", title: "Launch", description: "Your solution goes live with guidance on how to use it day-to-day." },
  { step: "07", title: "Support", description: "Ongoing help, updates, and improvements as your business grows." },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    company: "CarePlus Clinic",
    role: "Founder",
    rating: 5,
    review:
      "Our new website and WhatsApp booking flow made a real difference. Patients can reach us easily, and our team spends less time on calls.",
    initials: "AS",
  },
  {
    name: "Rahul Mehta",
    company: "BuildRight Fabrication",
    role: "Director",
    rating: 5,
    review:
      "Bharat AI Solutions automated our lead follow-ups. We respond faster and close more inquiries without hiring extra staff.",
    initials: "RM",
  },
  {
    name: "Priya Nair",
    company: "BrightSteps Learning",
    role: "CEO",
    rating: 5,
    review:
      "Professional work from start to finish. The site looks premium, loads fast, and our inquiry form converts better than before.",
    initials: "PN",
  },
  {
    name: "Vikram Singh",
    company: "Homestead Realty",
    role: "Owner",
    rating: 5,
    review:
      "Clear communication, fair pricing, and delivery on time. The chatbot qualifies property leads before they reach my team.",
    initials: "VS",
  },
] as const;

export const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Our Website Starter package begins at ₹6,999 and includes a responsive site, basic SEO, contact form, WhatsApp integration, and 1 year of maintenance. Growth and automation packages are available if you need more.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites are delivered in 7–14 days. Automation and custom AI projects usually take 2–4 weeks depending on scope and integrations.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Website packages include 1 year of maintenance. You can also reach us on WhatsApp for quick help with updates and questions.",
  },
  {
    question: "What is included in maintenance?",
    answer:
      "Maintenance covers content updates within a reasonable scope, security patches, uptime checks, and minor fixes to keep your site running smoothly.",
  },
  {
    question: "Can you build AI chatbots for WhatsApp?",
    answer:
      "Yes. We build website chatbots and WhatsApp agents that answer FAQs, capture leads, book appointments, and hand off complex queries to your team.",
  },
  {
    question: "Do you work with businesses outside metro cities?",
    answer:
      "Absolutely. We work with SMBs across India — from local shops and clinics to manufacturers and startups — entirely online via WhatsApp and video calls.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every website we build is mobile-first and tested on phones, tablets, and desktops so customers get a smooth experience everywhere.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tap Chat on WhatsApp, share a short note about your business, and we will recommend the right package with a clear timeline and quote.",
  },
] as const;

export const CLIENT_LOGOS = [
  "CarePlus",
  "ForgeWorks",
  "Nestora",
  "UrbanCart",
  "BrightSteps",
  "SpiceRoute",
  "Homestead",
  "LearnSphere",
] as const;
