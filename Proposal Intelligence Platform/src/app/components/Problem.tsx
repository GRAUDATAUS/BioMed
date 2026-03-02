import { AlertTriangle, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function Problem() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-red-900 via-red-800 to-red-900">
      {/* Critical warning pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
        }}></div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-red-400 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Critical Alert Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-red-950/80 border-2 border-red-500 rounded-full px-8 py-3 shadow-2xl shadow-red-500/50 animate-pulse">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <p className="text-red-200 font-bold tracking-wide uppercase text-sm">Critical Risk Alert</p>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl mb-6 text-center text-white font-bold"
        >
          The Problem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-red-100 mb-12 text-center font-light"
        >
          Everyone is using AI. <span className="text-yellow-300 font-bold">That's the problem.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-xl p-8 mb-16 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg text-gray-600 italic mb-2">
                As one national research funder warned:
              </p>
              <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                "AI will increase proposal quality and volume across the board, making differentiation harder for reviewers."
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl md:text-2xl text-red-50 mb-8 text-center max-w-4xl mx-auto leading-relaxed"
        >
          The institutions that win won't be those using AI — everyone will.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl md:text-2xl text-red-50 mb-8 text-center max-w-4xl mx-auto leading-relaxed"
        >
          They'll be the ones using <span className="text-yellow-300 font-bold">better AI</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-red-200 mb-16 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Yet most researchers still rely on generic tools like ChatGPT and Gemini — tools built for conversation, not science — creating six critical risks.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { value: "100–300+", label: "hours per major grant", icon: "⏱️" },
            { value: "3–6 mo", label: "typical resubmission cycle", icon: "📅" },
            { value: "~20%", label: "average win rate", icon: "📉" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/95 border-2 border-red-400 rounded-2xl p-8 text-center shadow-2xl hover:shadow-red-500/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-5xl mb-3 font-bold text-red-900">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}