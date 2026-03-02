import { Button } from "./ui/button";
import { Shield, Sparkles, Database, Lock } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "figma:asset/f94f4d0b0f9c74d6332db5c8a91dc9a3c34dbac0.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-32 px-4">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Research overwhelm" 
          className="w-full h-full object-cover opacity-70"
          style={{
            filter: 'saturate(0.8) contrast(1.1) brightness(1.05)',
            imageRendering: 'crisp-edges'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-slate-900/20"></div>
      </div>
      
      {/* Animated background elements - reduced blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Floating badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-8 flex-wrap"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>IP Protected</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span>NIH • NSF • DoD</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Private & On-Premise</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6 max-w-5xl mx-auto text-white"
        >
          Proposal Intelligence Platform
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
            Protect your IP. Win more grants. Waste fewer cycles.
          </p>
          <p className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            BioMed Advisor transforms how research institutions prepare, refine, and win competitive funding — from NIH to NSF to DoD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-lg px-10 py-7 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/50">
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-7 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all shadow-xl">
            Schedule a Demo
          </Button>
        </motion.div>

        {/* Floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { icon: Sparkles, label: "14× Faster Reviews", color: "text-yellow-400" },
            { icon: Shield, label: "IP Protected", color: "text-green-400" },
            { icon: Database, label: "Multi-Model AI", color: "text-purple-400" },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105">
              <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
              <p className="text-white text-lg">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}