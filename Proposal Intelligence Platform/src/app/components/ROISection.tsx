import { Calculator, TrendingUp, Clock, DollarSign, Award } from "lucide-react";
import { motion } from "motion/react";

export function ROISection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-6">
            <p className="text-green-700 font-semibold">Financial Impact</p>
          </div>
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl">The Math — Institutional ROI</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto"></div>
        </motion.div>
        
        {/* Main ROI calculation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-12 max-w-4xl mx-auto"
        >
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-2 border-blue-300 rounded-2xl p-10 shadow-2xl">
            {/* Top row: scenario + stat side by side */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-blue-600 p-3 rounded-lg mt-1 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-gray-800 mb-1">
                    A mid-size university submitting{" "}
                    <span className="font-bold text-blue-600">~1,000 proposals/year</span>
                  </p>
                  <p className="text-base text-gray-500">
                    ~$500K average award · ~20% win rate
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center self-stretch">
                <div className="flex flex-col items-center gap-1 px-2">
                  <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">generates</span>
                  <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
              <div className="flex md:hidden items-center gap-4 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="text-gray-400 text-sm font-semibold">generates</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="bg-green-600 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap">
                  ~$100M annually
                </p>
              </div>
            </div>

            {/* Full-width green card */}
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
              <div className="flex items-center gap-4">
                <TrendingUp className="w-10 h-10 flex-shrink-0" />
                <div>
                  <p className="text-lg opacity-90 mb-1">+2–5% win rate improvement</p>
                  <p className="text-3xl md:text-4xl font-bold">
                    = millions in incremental funding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Clock,
              title: "50% faster revision cycles",
              description: "Compress 3–6 month resubmissions into weeks.",
              color: "green"
            },
            {
              icon: TrendingUp,
              title: "More proposals, less resources",
              description: "Increase submission volume without expanding teams.",
              color: "blue"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color === 'green' ? 'emerald' : 'indigo'}-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <div className={`relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-${benefit.color}-300 transition-all hover:shadow-xl`}>
                <div className={`bg-${benefit.color}-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <benefit.icon className={`w-8 h-8 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-2xl mb-4 font-semibold">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}