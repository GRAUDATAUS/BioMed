import { Shield } from "lucide-react";
import grauLogo from "figma:asset/a960345488d50f96df45d58c56afbe502e818f9e.png";

export function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">BioMed Advisor</h3>
            </div>
            <p className="text-gray-400 text-lg">Research-grade AI for biomedical science</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="bg-slate-900 border border-slate-800 rounded-lg px-6 py-4 flex items-center justify-center">
              <img src={grauLogo} alt="GRAU DATA" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 GRAU DATA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}