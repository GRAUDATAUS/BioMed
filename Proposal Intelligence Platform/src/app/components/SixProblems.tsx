import { FileX, Database, Shield, GitBranch, TrendingUp, Lock } from "lucide-react";
import { motion } from "motion/react";

export function SixProblems() {
  const problems = [
    {
      icon: FileX,
      title: "Fabricated Citations",
      description: "Up to 30% of AI-generated references are fake. One bad citation can destroy reviewer trust.",
      color: "from-red-500 to-pink-500",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Database,
      title: "No Specialized Databases",
      description: "Generic AI lacks direct access to PubMed, ClinicalTrials, DrugBank, KEGG, and UniProt.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Zero Data Sovereignty",
      description: "Your unpublished research feeds commercial platforms you don't control.",
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: GitBranch,
      title: "Single-Model Limitations",
      description: "No cross-validation. No second opinion. Hidden bias risk.",
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Linear Reasoning Only",
      description: "Chain-of-thought gives one path. Research requires parallel hypothesis exploration.",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Lock,
      title: "Vendor Lock-in",
      description: "Your workflow becomes hostage to one provider's pricing and policies.",
      color: "from-slate-500 to-gray-600",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-100 rounded-full px-6 py-2 mb-6">
            <p className="text-red-600 font-semibold">Critical Risks</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Six Critical Problems with Generic AI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className={`${problem.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
                </div>
                <h3 className="text-xl mb-4 font-semibold">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}