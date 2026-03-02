import { Quote, CheckCircle, Clock, Target, Award, Zap } from "lucide-react";

export function WhyBioMed() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-green-50 via-blue-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 mb-6 border-2 border-green-300">
            <p className="text-green-700 font-bold">✓ The Solution</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent font-bold">
            Why BioMed Advisor Wins
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            Not another AI writing tool — a competitive advantage
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
          Most tools help you draft. BioMed Advisor helps you <span className="text-green-600 font-bold">think, structure, defend — and win</span>.
        </p>

        {/* Testimonial */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
          
          <div className="relative bg-gradient-to-br from-white to-green-50 border-2 border-green-300 rounded-2xl p-10 shadow-2xl">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl md:text-3xl mb-6 italic text-gray-800 leading-relaxed">
              "I prefer BioMed Advisor over ChatGPT Plus and Perplexity Pro when it comes to finding and summarizing publications in my field of research."
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              It catches papers and nuances that the other tools miss.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-blue-600"></div>
              <div>
                <p className="font-semibold text-gray-900">Graduate Research Assistant</p>
                <p className="text-gray-600">University of Texas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Statements - NEW */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">How We Deliver Results</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 transition-all hover:shadow-2xl h-full">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-green-700" />
                </div>
                <h4 className="text-xl mb-4 font-bold text-gray-900">Not drafting — refinement</h4>
                <p className="text-gray-600 leading-relaxed">
                  BmA's Knowledge Base anchors your PI-specific data, lab results, and institutional evidence so bold claims survive revision cycles instead of being softened into safe consensus language.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all hover:shadow-2xl h-full">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-blue-700" />
                </div>
                <h4 className="text-xl mb-4 font-bold text-gray-900">Built by funders, not just users</h4>
                <p className="text-gray-600 leading-relaxed">
                  As AI raises baseline proposal quality everywhere, only institutions using structured AI refinement will differentiate. BioMed Advisor is designed with funder evaluation criteria at its core.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all hover:shadow-2xl h-full">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-700" />
                </div>
                <h4 className="text-xl mb-4 font-bold text-gray-900">Three iterations, not three months</h4>
                <p className="text-gray-600 leading-relaxed">
                  What typically takes a full resubmission cycle — argument restructuring, evidence mapping, reviewer response alignment — BmA compresses into iterative refinements that compound in quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits - Simplified */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 transition-all hover:shadow-xl">
              <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-4 font-semibold">Evidence-anchored claims</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your data drives bold arguments that survive review scrutiny.
              </p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4 font-semibold">Rapid iteration cycles</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Compress months of revision work into days of refinement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}