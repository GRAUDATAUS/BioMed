import { Button } from "./ui/button";
import { Zap, Users, TrendingUp, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
          <p className="text-blue-200 font-semibold">Ready to Transform Your Grant Success?</p>
        </div>
        
        <h2 className="text-4xl md:text-6xl mb-6 font-bold">Get Started Today</h2>
        <p className="text-xl md:text-2xl mb-16 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Add BmA to any research team — results from day one.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: "Instant setup", color: "from-yellow-400 to-orange-400" },
            { icon: Users, label: "Any team, any scale", color: "from-green-400 to-emerald-400" },
            { icon: TrendingUp, label: "Win rate improvement, day one", color: "from-purple-400 to-pink-400" },
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="group text-lg px-12 py-8 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 font-semibold"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-12 py-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all hover:scale-105 shadow-2xl font-semibold"
          >
            Schedule a Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <p className="text-blue-200 mb-6 text-lg">Trusted by leading research institutions</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {['Research Universities', 'Medical Centers', 'Federal Labs', 'Biotech Firms'].map((org, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <p className="text-white font-medium">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}