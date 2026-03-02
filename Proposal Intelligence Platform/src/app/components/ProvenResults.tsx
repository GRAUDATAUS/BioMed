import { TrendingUp, Zap, Star, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export function ProvenResults() {
  const results = [
    { value: "14×", label: "Literature review speed", icon: BarChart3 },
    { value: "7–10×", label: "Faster hypothesis generation", icon: Zap },
    { value: "9–14×", label: "Faster data analysis", icon: TrendingUp },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 font-semibold">Data-Driven Performance</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Proven Results</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-2">
                <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <result.icon className="w-8 h-8 text-blue-300" />
                </div>
                <p className="text-6xl mb-4 font-bold bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent text-center">
                  {result.value}
                </p>
                <p className="text-xl text-blue-100 text-center leading-relaxed">{result.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
          <div className="relative bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl p-10 text-center">
            <div className="bg-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-yellow-400" />
            </div>
            <p className="text-2xl md:text-3xl italic mb-6 text-blue-100 leading-relaxed">
              "Scientific quality and precision rated significantly higher than ChatGPT or Gemini."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
              <div className="text-left">
                <p className="text-white font-semibold">Dr. Yannic Kerkhoff</p>
                <p className="text-blue-300">Zuse Institute Berlin</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}