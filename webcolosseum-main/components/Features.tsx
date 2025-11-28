import React from 'react';
import { Zap, Shield, Globe, MessageSquare, Sparkles } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Native Performance",
    description: "Built with Rust for blazing fast startup times and low memory usage. No Electron bloat.",
    icon: <Zap size={24} className="text-white" />,
    colSpan: 2,
  },
  {
    title: "Local Privacy",
    description: "Your code stays on your machine. Optional cloud features only when you need them.",
    icon: <Shield size={24} className="text-white" />,
    colSpan: 1,
  },
  {
    title: "Context Aware",
    description: "Colosseum understands your entire codebase, not just the open file. It suggests edits based on project structure.",
    icon: <Globe size={24} className="text-white" />,
    colSpan: 1,
  },
  {
    title: "Integrated Chat",
    description: "Discuss architecture, debug errors, and generate boilerplate without leaving the editor.",
    icon: <MessageSquare size={24} className="text-white" />,
    colSpan: 2,
  },
];

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, colSpan = 1 }) => (
  <div className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors duration-300 ${colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Designed for Flow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need in a modern IDE, reimagined for the AI era.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
        
        {/* Large Feature Banner */}
        <div className="mt-6 w-full p-8 md:p-12 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <Sparkles size={20} />
                    <span className="font-mono text-sm uppercase tracking-wider">Colosseum Intelligence</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Code at the speed of thought.</h3>
                <p className="text-gray-400">
                    Colosseum predicts your next move. From autocompleting entire functions to refactoring legacy code blocks in seconds.
                </p>
            </div>
            <div className="relative w-full max-w-sm aspect-video bg-black/50 rounded-lg border border-white/10 p-4 font-mono text-xs text-gray-500 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5"></div>
                <div className="relative z-10 space-y-2">
                    <div className="w-3/4 h-2 bg-gray-800 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-800 rounded"></div>
                    <div className="w-full h-2 bg-gray-800 rounded"></div>
                    <div className="w-2/3 h-2 bg-blue-500/20 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;