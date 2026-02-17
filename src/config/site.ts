import { Leaf, Zap, Shield } from "lucide-react";

export const siteConfig = {
  name: "Aremu Consulting",
  tagline: "Strategic Systems & Sustainable Growth",
  description: "Building critical infrastructure and exploring forward-thinking ventures in agribusiness and technology.",
  url: "https://aremuconsulting.com",
  
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get Started", href: "#contact" },
  },
  
  hero: {
    badge: "Systems & Growth",
    title: "Aremu Consulting",
    subtitle: "Building critical infrastructure for businesses while exploring sustainable ventures in agribusiness and technology. Strategic systems meet visionary growth.",
    cta: { text: "Start a Project", href: "#contact" },
    secondaryCta: { text: "Learn More", href: "#about" },
  },
  
  features: [
    {
      title: "Systems Architecture",
      description: "Design and implementation of robust infrastructure that keeps your business running smoothly.",
      icon: Zap,
    },
    {
      title: "Agribusiness Ventures",
      description: "Sustainable palm oil production and agricultural investments with long-term growth potential.",
      icon: Leaf,
    },
    {
      title: "Strategic Security",
      description: "Comprehensive approaches to data protection and business continuity planning.",
      icon: Shield,
    },
  ],
}

export type SiteConfig = typeof siteConfig
