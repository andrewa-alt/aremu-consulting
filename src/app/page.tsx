// src/app/page.tsx
/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MoveRight, Leaf, Zap, Shield } from 'lucide-react'; // Example icons
import { Suspense } from 'react';

// Mock data for demonstration - replace with actual fetched or configured data
const mockFeatures = [
  { icon: Zap, title: "Instant Marketing Systems", description: "Own and optimize critical infrastructure for immediate impact." },
  { icon: Leaf, title: "Nigerian Plantation Venture", description: "Developing sustainable agro-business for long-term value and independence." },
  { icon: Shield, title: "Security & Independence", description: "Fortifying systems and operations with robust security protocols." },
];

const mockFAQ = [
  { q: "What is Aremu Consulting?", a: "We build and manage critical systems for businesses, focusing on efficiency, security, and strategic growth." },
  { q: "What kind of systems do you build?", a: "We specialize in integrated marketing and operational systems, leveraging automation and data aggregation." },
];

async function PageContent() {
  // In a real app, you might fetch data here.
  // For now, we'll use static data defined in siteConfig or mock data above.
  
  // Attempt to use placeholder icons if available, otherwise just use text.
  const FeatureIcon = ({ icon, title }: { icon: any, title: string }) => {
    if (icon) {
      const IconComponent = icon; // Assuming icon is a React component like Lucide React
      return <IconComponent className="w-8 h-8 text-accent mb-4" />;
    }
    // Fallback if icon component is not suitable or found
    return <div className="w-8 h-8 mb-4 rounded-full bg-accent flex items-center justify-center text-white font-bold">{title.charAt(0)}</div>;
  };

  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      
      {/* Hero Section */}
      <section id="hero" className="text-center pt-20 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-bold uppercase text-accent mb-3 inline-block px-3 py-1 bg-secondary-bg rounded-full">{siteConfig.hero.badge}</p>
        <h1 className="text-display-xl font-display font-bold leading-tight mb-6">
          {siteConfig.hero.title}
        </h1>
        <p className="text-body-lg text-text-secondary max-w-3xl mx-auto mb-12">
          {siteConfig.hero.subtitle}
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-accent text-primary-bg hover:bg-accent-hover">
            <a href={siteConfig.hero.cta.href}>
              {siteConfig.hero.cta.text} <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-text-primary border-text-secondary hover:bg-secondary-bg">
            <a href={siteConfig.hero.secondaryCta.href}>
              {siteConfig.hero.secondaryCta.text}
            </a>
          </Button>
        </div>
      </section>

      {/* Services / Features Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-display-lg font-display font-bold text-text-primary mb-4">
            Strategic Pillars
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Where essential systems meet visionary growth. Explore the core of our offerings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockFeatures.map((feature, index) => (
            <Card key={index} className="bg-secondary-bg border-none">
              <CardHeader>
                <CardTitle className="flex items-center font-display text-text-primary mb-2">
                  <FeatureIcon icon={feature.icon} title={feature.title} />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-body-md">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Features Section (alternative to services, more details) */}
      {/* <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="text-center mb-12">
          <h2 className="text-display-lg font-display font-bold text-text-primary mb-4">Our Approach</h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">Discover how we leverage cutting-edge systems for your advantage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.features.slice(3).map((feature, index) => ( // Example of more features
            <Card key={index} className="bg-primary-bg border-text-secondary">
              <CardHeader>
                <CardTitle className="font-display text-text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-body-md">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-display-lg font-display font-bold text-text-primary mb-6">About Aremu Consulting</h2>
            <p className="text-body-lg text-text-secondary mb-6">
              We are dedicated to building and managing critical systems that drive efficiency, security, and strategic growth for businesses. With a focus on foundational infrastructure and forward-thinking ventures, we empower our clients to achieve lasting impact.
            </p>
            <p className="text-body-md text-text-secondary">
              Our roots in hands-on system development and a pragmatic approach ensure that we deliver solutions that are not just advanced, but also robust and reliable. From optimizing marketing infrastructure to developing sustainable agro-businesses, we bring a unique blend of technical depth and strategic vision.
            </p>
            {/* Add a link to a more detailed about page or specific sections */}
            {/* <Button asChild variant="link" className="mt-6 text-accent">
              <a href="#more-about">Learn More <MoveRight className="ml-2 h-4 w-4" /></a>
            </Button> */}
          </div>
          <div className="flex justify-center">
            {/* Placeholder for an avatar or relevant image */}
            <Avatar className="w-64 h-64 md:w-96 md:h-96">
              <AvatarImage src="/images/avatar.png" alt="Aremu Consulting Avatar" /> {/* Placeholder image */}
              <AvatarFallback>AC</AvatarFallback> {/* Fallback text */}
            </Avatar>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-secondary-bg">
        <div className="text-center mb-12">
          <h2 className="text-display-lg font-display font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {mockFAQ.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-text-primary font-display hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="py-16 md:py-24 text-center">
        <h2 className="text-display-lg font-display font-bold text-text-primary mb-6">Get in Touch</h2>
        <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8">
          Ready to optimize your infrastructure or explore new growth avenues? Contact us for a consultation.
        </p>
        <Button asChild size="lg" className="bg-accent text-primary-bg hover:bg-accent-hover">
          <a href="mailto:segun.a@aremuconsulting.com">Contact Us <MoveRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
