import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MoveRight, Leaf, Zap, Shield } from 'lucide-react'; // Example icons
import { Suspense } from 'react';

// FAQ data
const mockFAQ = [
  { q: "What services does Aremu Consulting provide?", a: "We specialize in building and managing critical business systems, from marketing infrastructure to process automation. We also manage sustainable agribusiness ventures in Nigeria." },
  { q: "Do you work with international clients?", a: "Yes, we work remotely with clients globally, particularly those needing robust systems and strategic infrastructure support." },
  { q: "What technologies do you use?", a: "We use modern tools including Next.js, React, n8n for automation, Google Workspace, and various cloud services tailored to each project's needs." },
  { q: "How can I get started?", a: "Simply reach out via email at segun.a@aremuconsulting.com with your project details, and we'll schedule a consultation to discuss your needs." },
]

async function PageContent() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      
      {/* Hero Section */}
      <section id="hero" className="text-center pt-20 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex flex-col justify-center items-center">
        <p className="text-sm font-bold uppercase text-accent mb-3 inline-block px-3 py-1 bg-[#141414] rounded-full">{siteConfig.hero.badge}</p>
        <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white font-['Cormorant Garamond', serif]">
          {siteConfig.hero.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 font-['Plus Jakarta Sans', sans-serif] font-normal">
          {siteConfig.hero.subtitle}
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-accent text-primary hover:bg-orange-500">
            <a href={siteConfig.hero.cta.href}>
              {siteConfig.hero.cta.text} <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-gray-600 hover:bg-[#141414]">
            <a href={siteConfig.hero.secondaryCta.href}>
              {siteConfig.hero.secondaryCta.text}
            </a>
          </Button>
        </div>
      </section>

      {/* Services / Features Section */}
      <section id="services" className="py-16 md:py-24 bg-[#141414]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display font-bold text-white mb-4 font-['Cormorant Garamond', serif]">
            Strategic Pillars
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-['Plus Jakarta Sans', sans-serif] font-normal">
            Where essential systems meet visionary growth. Explore the core of our offerings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {siteConfig.features.map((feature, index) => (
            <Card key={index} className="bg-[#0a0a0a] border border-gray-700 ">
              <CardHeader>
                <CardTitle className="flex items-center font-display text-white mb-2 text-3xl font-bold">
                  <feature.icon className="w-8 h-8 text-accent mr-3" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-base font-['Plus Jakarta Sans', sans-serif] font-normal">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
          <div>
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              About Aremu Consulting
            </h2>
            <p className="text-lg text-gray-400 mb-6 font-['Plus Jakarta Sans', sans-serif] font-normal">
              We are dedicated to building and managing critical systems for businesses, focusing on efficiency, security, and strategic growth. With a focus on foundational infrastructure and forward-thinking ventures, we empower our clients to achieve lasting impact.
            </p>
            <p className="text-base text-gray-400 font-['Plus Jakarta Sans', sans-serif] font-normal">
              Our roots in hands-on system development and a pragmatic approach ensure that we deliver solutions that are not just advanced, but also robust and reliable. From optimizing marketing infrastructure to developing sustainable agro-businesses, we bring a unique blend of technical depth and strategic vision.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for an avatar or relevant image */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent flex items-center justify-center text-white text-6xl font-['Cormorant Garamond'] font-bold">
              AC
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-[#141414]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-display font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            {mockFAQ.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-white font-display hover:no-underline text-2xl font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 text-center">
        <h2 className="text-5xl font-display font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 font-['Plus Jakarta Sans', sans-serif] font-normal">
          Ready to optimize your infrastructure or explore new growth avenues? Contact us for a consultation.
        </p>
        <Button asChild size="lg" className="bg-accent text-primary hover:bg-orange-500">
          <a href="mailto:segun.a@aremuconsulting.com">
            Contact Us <MoveRight className="ml-2 h-4 w-4" />
          </a>
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
