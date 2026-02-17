'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
    <main className="grain gradient-mesh min-h-screen">
      {/* Hero Section */}
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
          className="container mx-auto px-6 relative z-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block p-4 rounded-2xl glass glow mb-8 animate-float">
              <Image 
                src="/images/acl-logo.png" 
                alt="ACL Logo" 
                width={80} 
                height={80} 
                className="rounded-xl"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Infrastructure That{' '}
            <span className="gradient-text">Just Works</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Eliminating technical pain points for SMBs — one streamlined system at a time.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-accent/80 rounded-xl font-semibold transition-all duration-300 animate-pulse-glow text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Consultation
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 glass hover:bg-white/5 rounded-xl font-semibold transition-all duration-300 text-white border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I Build
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Practical solutions that solve real business problems
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📊', title: 'Spreadsheet Systems', desc: 'Custom spreadsheet solutions that bring clarity to chaos. Multi-user, real-time, automated.', tags: ['Real-time Sync', 'Custom Dashboards', 'Automated Reports'] },
              { icon: '🖥️', title: 'Dashboard Development', desc: 'Executive-ready dashboards that turn raw data into instant insights.', tags: ['Beautiful UI', 'Live Data', 'Mobile Ready'] },
              { icon: '⚡', title: 'Workflow Automation', desc: "Eliminate manual work. Automations that run 24/7, so you don't have to.", tags: ['Email Processing', 'Data Sync', 'Smart Routing'] },
              { icon: '🔧', title: 'Custom Solutions', desc: 'Built to fit your exact business needs. You own everything.', tags: ['Tailored to You', 'Full Documentation', 'Ongoing Support'] },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-8 glass rounded-2xl hover:glow transition-all duration-300 group h-full"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.desc}</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <li key={i} className="text-sm px-3 py-1 bg-accent/10 rounded-full text-accent">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-dark via-card/30 to-dark">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real projects. Real results.
            </p>
          </ScrollReveal>

          <div className="space-y-24 max-w-6xl mx-auto">
            {/* CAS Claim Tracker */}
            <ScrollReveal>
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Instant Marketing
                  </span>
                  <h3 className="text-3xl font-bold text-white">CAS Claim Tracker System</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <span>⚠️</span> The Problem
                    </h4>
                    <p className="text-gray-400">
                      Manual tracking across 8 agents, inconsistent data, payroll errors, and zero visibility into performance. Management was flying blind.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <span>✅</span> The Solution
                    </h4>
                    <p className="text-gray-400">
                      A complete claims management ecosystem with individual agent trackers, centralised reporting, and automated commission calculations — all working together seamlessly.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                    <span>📈</span> Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Zero data entry errors', 'Real-time visibility', 'Payroll streamlined', 'Performance leaderboards'].map((result, i) => (
                      <div key={i} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                        <span className="text-sm text-green-400">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">Project Gallery</h4>
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent" style={{ width: 'calc(100% + 2rem)' }}>
                    {[
                      '/images/cas-tracker/Agent personal tracker - Agent Input Page.jpg',
                      '/images/cas-tracker/Agent personal tracker - Leaderboard Page.jpg',
                      '/images/cas-tracker/Main Campaign Tracker - Main tracker page_ pulls all Agent personal tracker claim data into one place.jpg',
                      '/images/cas-tracker/Main Campaign Tracker - Data Page_ puts all agent data together.jpg',
                      '/images/cas-tracker/Main Campaign Tracker - Leaderboard Page_ generates the leaderboard, agents personal tracker - leaderboard page is pulled directly from here.jpg',
                      '/images/cas-tracker/Main Campaign Tracker - Comms Page. used for payroll purposes to calculate commision to be payed to each agent.jpg',
                    ].map((src, i) => (
                      <div key={i} className="relative flex-shrink-0 w-80 h-48 md:w-96 md:h-56 bg-card rounded-xl overflow-hidden group">
                        <Image
                          src={src}
                          alt={`Project screenshot ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-white/70 text-sm mt-2">← Scroll to see more →</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vibe Performance Dashboard */}
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Instant Marketing
                  </span>
                  <h3 className="text-3xl font-bold text-white">Vibe Performance Dashboard</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <span>⚠️</span> The Problem
                    </h4>
                    <p className="text-gray-400">
                      Raw spreadsheets that were impossible to interpret at executive level. No way to see daily performance across campaigns without digging through tabs.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <span>✅</span> The Solution
                    </h4>
                    <p className="text-gray-400">
                      A premium, real-time business intelligence dashboard with a sleek dark-mode interface — instant pulse checks on campaign performance.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                    <span>📈</span> Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Instant KPI visibility', 'Executive-ready UI', 'Mobile responsive', 'Live sync indicator'].map((result, i) => (
                      <div key={i} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                        <span className="text-sm text-green-400">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">Project Gallery</h4>
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent" style={{ width: 'calc(100% + 2rem)' }}>
                    {[
                      '/images/dashboard/dashboard secure log in first page.png',
                      '/images/dashboard/dash board now using google sheets as a back end 1-3.jpg',
                      '/images/dashboard/dash board now using google sheets as a back end 2-3.jpg',
                      '/images/dashboard/dash board now using google sheets as a back end 3-3.jpg',
                      '/images/dashboard/performance sheet before creatig app dashboard viewer pt 1-2.jpg',
                      '/images/dashboard/performance sheet before creatig app dashboard viewer pt 2-2.jpg',
                    ].map((src, i) => (
                      <div key={i} className="relative flex-shrink-0 w-80 h-48 md:w-96 md:h-56 bg-card rounded-xl overflow-hidden group">
                        <Image
                          src={src}
                          alt={`Project screenshot ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-white/70 text-sm mt-2">← Scroll to see more →</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                From Messy to Streamlined
              </h2>
              <p className="text-lg text-gray-400">My process is simple and effective</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Discovery', desc: 'Understand your pain points and current workflows' },
                { num: '02', title: 'Design', desc: 'Architecture that fits how you already work' },
                { num: '03', title: 'Build', desc: 'Clean, documented, maintainable systems' },
                { num: '04', title: 'Deploy', desc: 'You own it. No vendor lock-in.' },
              ].map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-16 p-8 glass rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Work With Me?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-400">
                  <div>
                    <div className="text-3xl mb-2">🎯</div>
                    <p><strong className="text-white">Practical Solutions</strong><br/>I build what you actually need, not what looks good on a proposal</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🔓</div>
                    <p><strong className="text-white">You Own Everything</strong><br/>No vendor lock-in. Full documentation. Your data, your systems.</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⚡</div>
                    <p><strong className="text-white">Fast Delivery</strong><br/>Working systems in weeks, not months. I test fast and iterate.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-dark via-primary/10 to-dark">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Tell me about your biggest technical pain point
            </p>

            <form className="space-y-6 text-left" action="https://formsubmit.co/segun.a@aremuconsulting.com" method="POST">
              <input type="text" style={{ display: 'none' }} name="_honey" />
              <input type="hidden" name="_subject" value="New enquiry from Aremu Consulting website" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <input 
                    type="text" 
                    required 
                    name="name"
                    className="w-full px-4 py-3 bg-card border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <input 
                    type="email" 
                    required 
                    name="email"
                    className="w-full px-4 py-3 bg-card border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Business Type</label>
                <select 
                  name="industry"
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-white"
                >
                  <option value="">Select your industry</option>
                  <option value="marketing">Marketing / Advertising</option>
                  <option value="insurance">Insurance / Claims</option>
                  <option value="realestate">Real Estate</option>
                  <option value="ecommerce">E-commerce / Retail</option>
                  <option value="professional">Professional Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">What&apos;s your biggest pain point?</label>
                <textarea 
                  name="message"
                  required 
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors resize-none text-white"
                  placeholder="Describe the problem you need solved..."
                />
              </div>

              <motion.button 
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent/80 rounded-xl font-semibold transition-all duration-300 text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            <p className="mt-8 text-gray-400 text-sm">
              Or email me directly:{' '}
              <a href="mailto:segun.a@aremuconsulting.com" className="text-accent hover:underline">
                segun.a@aremuconsulting.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-3">
              <Image src="/images/acl-logo.png" alt="ACL" width={32} height={32} className="rounded" />
              <span className="font-semibold text-white">Aremu Consulting Ltd</span>
            </div>
            <p>© 2026 Aremu Consulting Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
