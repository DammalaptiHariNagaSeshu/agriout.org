/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Tractor, 
  ShoppingCart, 
  Globe, 
  Instagram, 
  MessageCircle,
  Users,
  Search,
  ChevronRight,
  TrendingUp,
  Layers,
  Sparkles,
  Zap,
  Building2,
  CheckCircle2,
  AlertCircle,
  Truck,
  Handshake,
  Quote
} from 'lucide-react';

import logoText from './assets/logo-text.jpg';
import heroImage from './assets/hero_farm.png';
import visionImage from './assets/vision.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-xl text-primary tracking-tight font-medium w-full sticky top-0 z-50 border-b border-stone-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-2">
          <img 
            alt="AgriOut Logo" 
            className="h-18 w-auto mix-blend-multiply transition-transform hover:scale-105 duration-300" 
            src={logoText} 
          />
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
          <a href="#problem" className="hover:text-secondary transition-colors">The Challenge</a>
          <a href="#solution" className="hover:text-secondary transition-colors">Our Solution</a>
          <a href="#how-it-works" className="hover:text-secondary transition-colors">How It Works</a>
          <a href="#vision" className="hover:text-secondary transition-colors">Vision</a>
          <a href="#leadership" className="hover:text-secondary transition-colors">Leadership</a>
          <div className="h-6 w-px bg-stone-200 mx-2"></div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all font-semibold shadow-lg shadow-primary/20 active:scale-95">
            Get Started
          </button>
        </div>

        <button 
          className="p-2 active:scale-95 duration-200 ease-in-out hover:bg-stone-100 rounded-full md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="text-primary w-6 h-6" /> : <Menu className="text-primary w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-stone-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#hero" onClick={() => setIsOpen(false)} className="text-lg py-2">Home</a>
              <a href="#problem" onClick={() => setIsOpen(false)} className="text-lg py-2">The Challenge</a>
              <a href="#solution" onClick={() => setIsOpen(false)} className="text-lg py-2">Our Solution</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg py-2">How It Works</a>
              <a href="#vision" onClick={() => setIsOpen(false)} className="text-lg py-2">Vision</a>
              <a href="#leadership" onClick={() => setIsOpen(false)} className="text-lg py-2">Leadership</a>
              <button className="bg-primary text-on-primary py-4 rounded-xl font-semibold w-full mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src={heroImage} 
        alt="AgriOut Platform" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 backdrop-blur-[2px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-full text-secondary font-bold text-sm uppercase tracking-wider">
          Digital Agricultural Marketplace
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          AgriOut<span className="text-secondary">.org</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connecting Farmers to the Market, Digitally.
        </p>
      </motion.div>

      {/* Flow Visualization */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-black/20">
            <Tractor className="w-10 h-10 text-primary" />
          </div>
          <span className="text-white font-bold text-lg">Farmers</span>
        </div>

        <div className="hidden md:flex items-center text-secondary/60">
          <ArrowRight className="w-8 h-8 animate-pulse" />
        </div>
        <div className="md:hidden flex items-center text-secondary/60">
          <ArrowRight className="w-8 h-8 rotate-90 animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/40 border-4 border-white/20">
            <span className="text-white font-black text-2xl tracking-tighter">AgriOut</span>
          </div>
          <span className="text-white font-bold text-lg">Platform</span>
        </div>

        <div className="hidden md:flex items-center text-secondary/60">
          <ArrowRight className="w-8 h-8 animate-pulse" />
        </div>
        <div className="md:hidden flex items-center text-secondary/60">
          <ArrowRight className="w-8 h-8 rotate-90 animate-pulse" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-black/20">
            <Building2 className="w-10 h-10 text-primary" />
          </div>
          <span className="text-white font-bold text-lg">Companies</span>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all flex items-center gap-3 shadow-xl shadow-secondary/20 active:scale-95">
          Join the Platform <ChevronRight className="w-5 h-5" />
        </button>
        <a 
          href="https://wa.me/917013014131" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all flex items-center gap-3 shadow-xl shadow-green-600/20 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" /> +91 7013014131
        </a>
        <a 
          href="https://www.instagram.com/agrioutorg?igsh=MWx0d3N3dHdsMWw5YQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center gap-3 active:scale-95"
        >
          <Instagram className="w-5 h-5" /> @agrioutorg
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
       <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
       </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">The Problem We're Solving</h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            title: "Middlemen Dependency", 
            desc: "Farmers depend heavily on middlemen who capture a large share of the profit.",
            icon: <Users className="w-8 h-8" />
          },
          { 
            title: "Unfair Pricing", 
            desc: "Prices are often unfair or inconsistent, leaving farmers with minimal earnings.",
            icon: <Zap className="w-8 h-8" />
          },
          { 
            title: "No Direct Access", 
            desc: "Buyers don't have direct access to farmers, leading to supply chain inefficiencies.",
            icon: <AlertCircle className="w-8 h-8" />
          },
          { 
            title: "Scattered Markets", 
            desc: "Products are scattered across different local markets, making sourcing difficult.",
            icon: <Layers className="w-8 h-8" />
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-stone-100 sunlight-shadow group hover:border-secondary/20 transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section id="solution" className="py-24 bg-primary text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">How AgriOut Helps</h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* For Farmers */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-[40px] border border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
              <Tractor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">For Farmers</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">List products (grains, vegetables, fruits) with ease.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">Reach companies directly without intermediaries.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">Full control over pricing and product visibility.</p>
            </li>
          </ul>
        </motion.div>

        {/* For Companies */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-[40px] border border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">For Companies</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">Access multiple farmers in one centralized place.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">Compare products and prices in real-time.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
              <p className="text-xl">Buy fresh produce directly from the source.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How It Works</h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-stone-200 -z-0"></div>
        
        {[
          { step: "01", title: "Farmer Profiles", desc: "Farmers create detailed profiles and upload their quality products.", icon: <Users className="w-6 h-6" /> },
          { step: "02", title: "Smart Discovery", desc: "Companies browse or search for specific crops and requirements.", icon: <Search className="w-6 h-6" /> },
          { step: "03", title: "Direct Orders", desc: "Orders are placed directly through the platform with transparent terms.", icon: <ShoppingCart className="w-6 h-6" /> },
          { step: "04", title: "Future Scope", desc: "Integrated delivery and logistics coming soon to complete the chain.", icon: <Truck className="w-6 h-6" /> }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-white border-4 border-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/10">
              <span className="text-secondary font-black">{item.step}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
            <p className="text-on-surface-variant leading-relaxed px-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VisionSection = () => (
  <section id="vision" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={visionImage} alt="Future of Agriculture" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Sparkles className="w-12 h-12 text-secondary mx-auto mb-8 animate-pulse" />
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Our Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Empower Farmers</h3>
            <p className="text-stone-300">Economically uplift the backbone of our society through fair trade.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <Globe className="w-10 h-10 text-secondary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Transparency</h3>
            <p className="text-stone-300">Increase pricing clarity and market integrity for everyone.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <Zap className="w-10 h-10 text-secondary mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Digitize Trade</h3>
            <p className="text-stone-300">Transform traditional agricultural commerce into a modern digital era.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const LeadershipSection = () => (
  <section id="leadership" className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Leadership</h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Narasimha Rao Dammalapati */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[40px] shadow-xl shadow-stone-200/50 border border-stone-100 relative group hover:border-secondary/20 transition-all duration-500"
        >
          <Quote className="absolute top-10 right-10 w-12 h-12 text-stone-100 group-hover:text-secondary/10 transition-colors duration-500" />
          
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-stone-50 flex items-center justify-center mb-8 border border-stone-100 shadow-inner">
              <Users className="w-10 h-10 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-1">Narasimha Rao Dammalapati</h3>
            <p className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase mb-6">FOUNDER | 35+ YEARS EXPERIENCE</p>
            
            <p className="text-lg text-on-surface-variant bg-stone-50/50 p-6 rounded-2xl border border-stone-100/50 leading-relaxed italic font-medium">
              "With over 35 years of deep-rooted experience in agriculture, my vision for AgriOut is to bridge the gap between traditional wisdom and modern efficiency, ensuring every farmer's work is valued and every consumer receives the purest harvest."
            </p>
          </div>
        </motion.div>

        {/* Sita Ravamma */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 rounded-[40px] shadow-xl shadow-stone-200/50 border border-stone-100 relative group hover:border-secondary/20 transition-all duration-500"
        >
          <Quote className="absolute top-10 right-10 w-12 h-12 text-stone-100 group-hover:text-secondary/10 transition-colors duration-500" />
          
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-stone-50 flex items-center justify-center mb-8 border border-stone-100 shadow-inner">
              <Handshake className="w-10 h-10 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-1">Sita Ravamma</h3>
            <p className="text-secondary font-bold text-[10px] tracking-[0.2em] uppercase mb-6">MANAGING DIRECTOR | 30+ YEARS IN FARMING</p>
            
            <p className="text-lg text-on-surface-variant bg-stone-50/50 p-6 rounded-2xl border border-stone-100/50 leading-relaxed italic font-medium">
              "Having dedicated 30 years to the art of farming, I understand the meticulous care required to grow quality produce. At AgriOut, we bring that same level of care to the entire supply chain, delivering excellence from our fields to your table."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white text-primary py-16 border-t border-stone-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <img 
            alt="AgriOut Logo" 
            className="h-16 mb-6 mix-blend-multiply" 
            src={logoText} 
          />
          <p className="text-on-surface-variant max-w-sm">
            Bridging the gap between rural production and urban consumption through innovative digital solutions.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-on-surface-variant">
            <li><a href="#hero" className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#problem" className="hover:text-secondary transition-colors">The Challenge</a></li>
            <li><a href="#solution" className="hover:text-secondary transition-colors">Our Solution</a></li>
            <li><a href="#how-it-works" className="hover:text-secondary transition-colors">How It Works</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6">Connect</h4>
          <div className="flex flex-col gap-4">
             <a 
              href="https://wa.me/917013014131" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-on-surface-variant hover:text-[#25D366] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="font-medium text-base">+91 7013014131</span>
            </a>
             <a 
              href="https://www.instagram.com/agrioutorg?igsh=MWx0d3N3dHdsMWw5YQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-medium text-base">@agrioutorg</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-stone-100 text-center text-stone-400 text-sm">
        <p>© 2026 AgriOut.org. All rights reserved. Connecting Farmers to the Market, Digitally.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface scroll-smooth font-bodySelection font-body">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <LeadershipSection />
      <VisionSection />
      <Footer />
    </div>
  );
}
