import { Zap, Settings, Shield } from "lucide-react";

export const siteConfig = {
  name: "Aremu Consulting",
  tagline: "Strategic Business Systems",
  description: "Building critical infrastructure for B2B growth. Systems that scale, processes that deliver.",
  url: "https://aremuconsulting.com",
  
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get Started", href: "#contact" },
  },
  
  hero: {
    badge: "",
    title: "Aremu Consulting",
    subtitle: "Building systems that just work.",
    cta: { text: "Start a Project", href: "#contact" },
    secondaryCta: { text: "Our Services", href: "#services" },
  },
  
  features: [
    {
      title: "Systems Architecture",
      description: "Design and implementation of robust infrastructure that keeps your business running smoothly and scales with your growth.",
      icon: Zap,
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation. Reduce manual work, eliminate errors, and free your team to focus on what matters.",
      icon: Settings,
    },
    {
      title: "Strategic Security",
      description: "Comprehensive approaches to data protection, compliance, and business continuity planning for peace of mind.",
      icon: Shield,
    },
  ],
}

export type SiteConfig = typeof siteConfig
