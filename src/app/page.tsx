'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MoveRight, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// FAQ data
const mockFAQ = [
  { q: "What services does Aremu Consulting provide?", a: "We specialize in building and managing critical business systems, from marketing infrastructure to process automation. We help B2B clients optimize their operations with robust, scalable solutions." },
  { q: "Do you work with international clients?", a: "Yes, we work remotely with clients globally, particularly those needing robust systems and strategic infrastructure support." },
  { q: "What technologies do you use?", a: "We use modern tools including Next.js, React, n8n for automation, Google Workspace, and various cloud services tailored to each project's needs." },
  { q: "How can I get started?", a: "Simply reach out via email at segun.a@aremuconsulting.com with your project details, and we'll schedule a consultation to discuss your needs." },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function ScrollReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="grain gradient-mesh min-h-screen bg-[#0A192F]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Image 
                src="/logo-with-name.png" 
                alt="Aremu Consulting" 
                width={180} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-slate-text hover:text-electric transition-colors">Services</a>
              <a href="#about" className="text-sm text-slate-text hover:text-electric transition-colors">About</a>
              <a href="#faq" className="text-sm text-slate-text hover:text-electric transition-colors">FAQ</a>
              <Button 
                asChild 
                size="sm"
                className="bg-transparent border border-electric text-electric hover:bg-electric-dim hover:text-electric"
              >
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(17, 34, 64, 0.8) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hero Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-electric mb-8 border border-electric/20">
              {siteConfig.hero.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
            variants={itemVariants}
          >
            <span className="block text-white">Building</span>
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Critical Systems
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-electric text-navy hover:bg-electric-dark px-8 py-6 text-lg font-semibold rounded-lg animate-pulse-glow"
              >
                <a href={siteConfig.hero.cta.href}>
                  {siteConfig.hero.cta.text} <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-electric border-electric/30 hover:bg-electric-dim hover:border-electric/50 px-8 py-6 text-lg rounded-lg backdrop-blur-sm"
              >
                <a href={siteConfig.hero.secondaryCta.href}>
                  {siteConfig.hero.secondaryCta.text}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-muted"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Strategic Services
            </h2>
            <p className="text-lg text-slate-text max-w-2xl mx-auto">
              Essential systems for B2B growth. Built to last, designed to scale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="h-full bg-navy-light/50 border border-white/10 backdrop-blur-sm hover:border-electric/30 transition-all duration-500 group">
                    <CardHeader>
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-electric-dim flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <feature.icon className="w-7 h-7 text-electric" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-text leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Precision Engineering<br />for Business Growth
              </h2>
              <p className="text-lg text-slate-text mb-6 leading-relaxed">
                We build the infrastructure that powers your business. From marketing automation to process optimization, we deliver systems that are robust, scalable, and strategically aligned with your goals.
              </p>
              <p className="text-base text-slate-text leading-relaxed">
                Our approach combines technical depth with business acumen. We don't just implement tools—we architect solutions that become competitive advantages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-electric/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: '320px', height: '320px', top: '-20px', left: '-20px' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-electric/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ width: '360px', height: '360px', top: '-40px', left: '-40px' }}
                />
                {/* Logo */}
                <div className="relative w-72 h-72 rounded-full bg-navy-light flex items-center justify-center backdrop-blur-sm border border-electric/20">
                  <Image 
                    src="/logo-icon.png" 
                    alt="Aremu Consulting" 
                    width={200} 
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {mockFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-white/10 rounded-xl px-6 bg-navy-light/30 backdrop-blur-sm data-[state=open]:border-electric/30 transition-colors"
                  >
                    <AccordionTrigger className="text-white hover:text-electric text-left text-lg font-semibold py-5 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-text pb-5 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build?
            </h2>
            <p className="text-lg text-slate-text mb-10">
              Let's discuss how we can optimize your systems and accelerate your growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-electric text-navy hover:bg-electric-dark px-10 py-6 text-lg font-semibold rounded-lg animate-pulse-glow"
              >
                <a href="mailto:segun.a@aremuconsulting.com">
                  Start a Conversation <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-navy-light/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-icon.png" 
                alt="Aremu Consulting" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-slate-text text-sm">Aremu Consulting</span>
            </div>
            <p className="text-slate-muted text-sm">© 2026 Aremu Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
