import { Upload, Lightbulb, Network, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Ingest & Frame",
      description: "Upload drafts, reviewer comments, and agency guidance. BmA maps your argument to funder expectations.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-50",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Knowledge-Powered Refinement",
      description: "PI data, lab results, and past proposals strengthen — not flatten — your narrative.",
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-50",
    },
    {
      number: "03",
      icon: Network,
      title: "Multi-Model Orchestration",
      description: "Queries fragment across models to protect IP while improving reasoning depth.",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-50",
    },
    {
      number: "04",
      icon: FileCheck,
      title: "Structured Output",
      description: "Agency-aligned framing, reviewer matrices, and evidence-to-claim mapping — ready for submission.",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-50",
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-50 to-white border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-600 font-semibold">Our Process</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">BioMed Advisor</h2>
          <p className="text-2xl text-gray-600 font-light">
            How It Works — From Draft to Funded
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-6"></div>
        </motion.div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-16 top-32 w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}
              
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon and number section */}
                  <div className="flex items-center gap-6 min-w-[240px]">
                    <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                    <div className={`${step.iconBg} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-12 h-12 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl mb-4 font-semibold">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}