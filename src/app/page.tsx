'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MoveRight, Leaf, Zap, Shield, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// FAQ data
const mockFAQ = [
  { q: "What services does Aremu Consulting provide?", a: "We specialize in building and managing critical business systems, from marketing infrastructure to process automation. We also manage sustainable agribusiness ventures in Nigeria." },
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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
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

function ParallaxSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="grain gradient-mesh min-h-screen">
      {/* Hero Section - Dramatic Full-Height with Floating Elements */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)',
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
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric accent lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="10%" y1="20%" x2="30%" y2="40%"
            stroke="rgba(255,107,53,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="85%" y1="15%" x2="70%" y2="35%"
            stroke="rgba(255,107,53,0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.3 }}
          />
          <motion.circle
            cx="15%" cy="75%" r="60"
            stroke="rgba(255,107,53,0.15)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </svg>

        {/* Hero Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-8 border border-accent/20">
              {siteConfig.hero.badge}
            </span>
          </motion.div>

          {/* Main Title - Split for dramatic effect */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-['Cormorant_Garamond'] leading-[0.9]"
            variants={itemVariants}
          >
            <span className="block text-white">{siteConfig.hero.title.split(' ')[0]}</span>
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {siteConfig.hero.title.split(' ').slice(1).join(' ')}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-['Plus_Jakarta_Sans'] leading-relaxed"
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
                className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-lg font-semibold rounded-xl animate-pulse-glow"
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
                className="text-white border-white/20 hover:bg-white/5 hover:border-white/40 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
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
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section with Scroll Reveals */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-accent mb-4 border border-accent/20 uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Cormorant_Garamond']">
              Strategic Pillars
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Where essential systems meet visionary growth. Explore the core of our offerings.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="h-full bg-[#141414]/50 border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 group">
                    <CardHeader>
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <feature.icon className="w-7 h-7 text-accent" />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold text-white font-['Cormorant_Garamond']">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 font-['Plus_Jakarta_Sans'] leading-relaxed">
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

      {/* About Section with Parallax */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-accent mb-4 border border-accent/20 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cormorant_Garamond']">
                About Aremu Consulting
              </h2>
              <p className="text-lg text-gray-400 mb-6 font-['Plus_Jakarta_Sans'] leading-relaxed">
                We are dedicated to building and managing critical systems for businesses, focusing on efficiency, security, and strategic growth. With a focus on foundational infrastructure and forward-thinking ventures, we empower our clients to achieve lasting impact.
              </p>
              <p className="text-base text-gray-400 font-['Plus_Jakarta_Sans'] leading-relaxed">
                Our roots in hands-on system development and a pragmatic approach ensure that we deliver solutions that are not just advanced, but also robust and reliable. From optimizing marketing infrastructure to developing sustainable agro-businesses, we bring a unique blend of technical depth and strategic vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div 
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-accent/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                {/* Main circle */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <span className="text-7xl font-bold text-white font-['Cormorant_Garamond']">AC</span>
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
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-accent mb-4 border border-accent/20 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Cormorant_Garamond']">
              Frequently Asked Questions
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
                    className="border border-white/10 rounded-xl px-6 bg-[#141414]/30 backdrop-blur-sm data-[state=open]:border-accent/30 transition-colors"
                  >
                    <AccordionTrigger className="text-white hover:text-accent text-left text-lg font-semibold py-5 hover:no-underline font-['Plus_Jakarta_Sans']">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-5 font-['Plus_Jakarta_Sans'] leading-relaxed">
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
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-accent mb-4 border border-accent/20 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Cormorant_Garamond']">
              Let&apos;s Build Something
            </h2>
            <p className="text-lg text-gray-400 mb-10 font-['Plus_Jakarta_Sans']">
              Ready to optimize your infrastructure or explore new growth avenues? Contact us for a consultation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 px-10 py-6 text-lg font-semibold rounded-xl animate-pulse-glow"
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
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-['Plus_Jakarta_Sans']">
            <p>© 2026 Aremu Consulting. All rights reserved.</p>
            <p>Built with precision.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
