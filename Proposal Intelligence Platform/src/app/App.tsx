import { Hero } from "./components/Hero";
import { IPProtection } from "./components/IPProtection";
import { Problem } from "./components/Problem";
import { SixProblems } from "./components/SixProblems";
import { HowItWorks } from "./components/HowItWorks";
import { WhyBioMed } from "./components/WhyBioMed";
import { ProvenResults } from "./components/ProvenResults";
import { ROISection } from "./components/ROISection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <IPProtection />
      <Problem />
      <SixProblems />
      <HowItWorks />
      <WhyBioMed />
      <ProvenResults />
      <ROISection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
