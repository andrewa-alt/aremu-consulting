export const siteConfig = {
  name: "My Site",
  tagline: "Build something amazing",
  description: "A modern website built with Next.js, Tailwind, and shadcn/ui",
  url: "https://mysite.com",
  
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Get Started", href: "/signup" },
  },
  
  // Add more sections as needed
}

export type SiteConfig = typeof siteConfig
