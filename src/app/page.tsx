'use client';

import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MoveRight, ArrowDown, ExternalLink, Database, Workflow, BarChart3, Mail, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// FAQ data
const mockFAQ = [
  { q: "What services does Aremu Consulting provide?", a: "We specialize in building and managing critical business systems, from marketing infrastructure to process automation. We help B2B clients optimize their operations with robust, scalable solutions." },
  { q: "Do you work with international clients?", a: "Yes, we work remotely with clients globally, particularly those needing robust systems and strategic infrastructure support." },
  { q: "What technologies do you use?", a: "We use modern tools including Next.js, React, n8n for automation, Google Workspace, and various cloud services tailored to each project's needs." },
  { q: "How can I get started?", a: "Simply fill out the enquiry form or email us at segun.a@aremuconsulting.com with your project details, and we'll schedule a consultation." },
];

// Projects data - client-agnostic descriptions
const projects = [
  {
    title: "Lead Management Infrastructure",
    description: "End-to-end business system with automated lead intake, agent tracking dashboards, email automation, and real-time performance monitoring. Scaled to handle 500+ leads monthly.",
    tags: ["n8n", "Google Sheets", "Automation", "Dashboard"],
    icon: Workflow,
    stats: "500+ leads/month",
    images: [
      "/images/cas-tracker/main-tracker.jpg",
      "/images/cas-tracker/n8n-automation.png"
    ]
  },
  {
    title: "Claims Processing System",
    description: "Custom tracking system with automated data aggregation, duplicate detection, and performance alerts. Reduced manual processing time by 70%.",
    tags: ["Process Design", "Data Pipeline", "Alerts"],
    icon: Database,
    stats: "70% faster processing",
    images: [
      "/images/dashboard/dashboard-1.jpg",
      "/images/dashboard/dashboard-2.jpg"
    ]
  },
  {
    title: "MealPrep OS",
    description: "Order management system for meal prep business featuring active order tracking, dispatch coordination, recipe management, and nutritional data handling.",
    tags: ["Next.js", "Order Management", "Inventory"],
    icon: BarChart3,
    stats: "100+ orders/week",
    images: [
      "/images/mealprep-exe/active-orders-v2.jpg",
      "/images/mealprep-exe/dispatch-page.jpg"
    ]
  }
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

// Contact Form Component
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just open mailto with the form data
    const subject = `Enquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:segun.a@aremuconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-electric" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-text">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-slate-text mb-2">Name</label>
          <Input 
            required
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-navy-light/50 border-white/10 text-white placeholder:text-slate-muted focus:border-electric"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-text mb-2">Email</label>
          <Input 
            required
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-navy-light/50 border-white/10 text-white placeholder:text-slate-muted focus:border-electric"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-text mb-2">Company</label>
        <Input 
          type="text"
          placeholder="Your company name"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          className="bg-navy-light/50 border-white/10 text-white placeholder:text-slate-muted focus:border-electric"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-text mb-2">Project Details</label>
        <Textarea 
          required
          rows={5}
          placeholder="Tell us about your project, challenges, and goals..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="bg-navy-light/50 border-white/10 text-white placeholder:text-slate-muted focus:border-electric resize-none"
        />
      </div>
      <Button 
        type="submit"
        size="lg" 
        className="w-full bg-electric text-navy hover:bg-electric-dark py-6 text-lg font-semibold rounded-lg animate-pulse-glow"
      >
        Send Enquiry <MoveRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="grain gradient-mesh min-h-screen bg-[#0A192F]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with white/light background to make it visible */}
            <a href="/" className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <Image 
                  src="/logo-icon.png" 
                  alt="Aremu Consulting" 
                  width={36} 
                  height={36}
                  className="h-9 w-9 object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-white text-lg hidden sm:block">Aremu Consulting</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-slate-text hover:text-electric transition-colors">Services</a>
              <a href="#projects" className="text-sm text-slate-text hover:text-electric transition-colors">Projects</a>
              <a href="#about" className="text-sm text-slate-text hover:text-electric transition-colors">About</a>
              <a href="#faq" className="text-sm text-slate-text hover:text-electric transition-colors">FAQ</a>
              <Button 
                asChild 
                size="sm"
                className="bg-electric text-navy hover:bg-electric-dark font-semibold"
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
                <a href="#projects">
                  View Projects
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

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 relative bg-navy-light/30">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-text max-w-2xl mx-auto">
              Real systems built for real businesses. Results that speak for themselves.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="h-full bg-navy/50 border border-white/10 backdrop-blur-sm hover:border-electric/30 transition-all duration-500 group overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-xs text-electric font-medium px-3 py-1 rounded-full bg-navy/80 backdrop-blur-sm border border-electric/30">
                          {project.stats}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between mb-3">
                        <motion.div 
                          className="w-10 h-10 rounded-lg bg-electric-dim flex items-center justify-center group-hover:bg-electric/20 transition-colors duration-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          <project.icon className="w-5 h-5 text-electric" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-lg font-bold text-white group-hover:text-electric transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-text leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs text-slate-text px-2 py-1 rounded-md bg-white/5 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
              <p className="text-base text-slate-text leading-relaxed mb-8">
                Our approach combines technical depth with business acumen. We don't just implement tools—we architect solutions that become competitive advantages.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-electric">5+</div>
                  <div className="text-sm text-slate-text">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric">50+</div>
                  <div className="text-sm text-slate-text">Systems Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric">99%</div>
                  <div className="text-sm text-slate-text">Uptime</div>
                </div>
              </div>
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
                {/* Logo with white background */}
                <div className="relative w-72 h-72 rounded-full bg-white flex items-center justify-center backdrop-blur-sm border-4 border-electric/30 shadow-2xl shadow-electric/20">
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

      {/* Contact Section with Form */}
      <section id="contact" className="py-24 md:py-32 relative bg-navy-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-electric mb-4 border border-electric/20 uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Build?
              </h2>
              <p className="text-lg text-slate-text max-w-2xl mx-auto">
                Let's discuss how we can optimize your systems and accelerate your growth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Contact Info */}
                <div className="md:col-span-2 space-y-6">
                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-electric-dim flex items-center justify-center">
                        <Mail className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-text">Email</div>
                        <a href="mailto:segun.a@aremuconsulting.com" className="text-white hover:text-electric transition-colors">
                          segun.a@aremuconsulting.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-electric-dim flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-text">Company</div>
                        <span className="text-white">Aremu Consulting Ltd</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-dim flex items-center justify-center">
                        <Users className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-text">Clients</div>
                        <span className="text-white">B2B & Enterprise</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-3">
                  <div className="glass rounded-xl p-8">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-navy-light/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded p-1">
                <Image 
                  src="/logo-icon.png" 
                  alt="Aremu Consulting" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-slate-text text-sm">Aremu Consulting Ltd</span>
            </div>
            <p className="text-slate-muted text-sm">© 2026 Aremu Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
