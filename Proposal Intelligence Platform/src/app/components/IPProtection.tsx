import { Shield, Lock, Server } from "lucide-react";

export function IPProtection() {
  return (
    <section className="relative py-32 px-4 bg-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl">Protect Your Research IP by Design</h2>
        </div>
        
        <p className="text-2xl text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Your unpublished work should never become someone else's training data.
        </p>
        
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-10 max-w-4xl mx-auto shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 font-medium">Private & On-Premise Models</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 font-medium">Query Fragmentation</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 font-medium">Full Institutional Control</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              BioMed Advisor supports private and on-premise models, fragments queries across systems so no single AI can reconstruct your research, and gives your institution full control over model selection, routing, and retention.
            </p>
            <p className="text-xl text-blue-600 italic font-medium">
              This isn't a feature — it's a requirement for serious research institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
