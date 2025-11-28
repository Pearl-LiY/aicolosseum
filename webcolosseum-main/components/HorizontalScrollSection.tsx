import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Terminal, Code, Layers, Zap, ShieldCheck } from 'lucide-react';

const HorizontalScrollSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // "start start": Animation begins when the top of the container hits the top of the viewport
    // "end end": Animation ends when the bottom of the container hits the bottom of the viewport
    offset: ["start start", "end end"]
  });

  // Map vertical scroll progress (0 to 1) to horizontal movement (0% to -X%)
  // With 5 cards, we need to shift significantly to the left to reveal the last one.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-360%"]);

  return (
    // Height determines how "long" the user has to scroll to get through the cards
    <section ref={targetRef} className="relative h-[600vh] bg-[#050505]">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Left Column: Fixed Title (35% width) */}
        <div className="w-[35%] shrink-0 pl-10 md:pl-20 z-20 flex flex-col justify-center h-full relative bg-[#050505]/50 backdrop-blur-sm">
             <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white">
                What You'll<br/>
                Unlock<br/>
                with Colosseum
             </h2>
        </div>

        {/* Right Column: Sliding Cards Track */}
        <div className="w-[65%] h-full flex items-center pl-10">
            <motion.div style={{ x }} className="flex gap-10">
            
            {/* Card 1 */}
            <div className="relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col justify-between group hover:border-trae-green/30 transition-colors duration-300">
                <div>
                    <div className="text-trae-green font-mono mb-2">[00]</div>
                    <h3 className="text-2xl font-bold mb-6">From Idea to Launch: AI Integrated Into the Entire Development Lifecycle</h3>
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded-xl border border-white/5 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 opacity-20">
                        {[...Array(12)].map((_,i) => <div key={i} className="border border-dashed border-gray-500 rounded"></div>)}
                    </div>
                    <div className="z-10 bg-[#151515] p-6 rounded-lg border border-white/10 text-center shadow-2xl">
                        <div className="mb-2 text-trae-green text-sm flex items-center justify-center gap-2"><Terminal size={16}/> Build Analytics</div>
                        <div className="h-1 bg-gray-700 w-32 mx-auto rounded mb-2"></div>
                        <div className="h-1 bg-gray-700 w-24 mx-auto rounded"></div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col justify-between group hover:border-trae-green/30 transition-colors duration-300">
                <div>
                    <div className="text-trae-green font-mono mb-2">[01]</div>
                    <h3 className="text-2xl font-bold mb-6">Ship Autonomously with Colosseum BATTLE</h3>
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded-xl border border-white/5 p-8 flex items-center justify-center font-mono text-sm">
                    <div className="w-full max-w-md space-y-4">
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center text-xs">U</div>
                            <div className="bg-gray-800 px-3 py-1 rounded text-xs">Design a modern portfolio page</div>
                        </div>
                        <div className="border border-trae-green/30 bg-trae-green/5 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                            <div className="text-trae-green mb-2 flex items-center gap-2 text-xs font-bold"><Code size={14}/> BATTLE Coder</div>
                            <div className="text-gray-400 text-xs">Let's start by creating a React native application.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col justify-between group hover:border-trae-green/30 transition-colors duration-300">
                <div>
                    <div className="text-trae-green font-mono mb-2">[02]</div>
                    <h3 className="text-2xl font-bold mb-6">Seamless Switch Between IDE and BATTLE</h3>
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded-xl border border-white/5 flex items-center justify-center">
                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl border border-trae-green bg-trae-green/10 text-trae-green text-xl md:text-2xl font-bold shadow-[0_0_15px_rgba(54,240,151,0.2)]">BATTLE</div>
                        <div className="text-gray-600"><Layers size={24}/></div>
                        <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl border border-white/20 bg-white/5 text-white text-xl md:text-2xl font-bold">IDE</div>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col justify-between group hover:border-trae-green/30 transition-colors duration-300">
                <div>
                    <div className="text-trae-green font-mono mb-2">[03]</div>
                    <h3 className="text-2xl font-bold mb-6">Smart Refactoring & Context Awareness</h3>
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded-xl border border-white/5 flex items-center justify-center p-8">
                    <div className="relative w-full max-w-sm">
                       <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-trae-green rounded-tl-xl"></div>
                       <div className="bg-[#111] p-4 rounded border border-white/10 font-mono text-xs">
                          <div className="text-gray-500 mb-2">// Analyzing Project Structure...</div>
                          <div className="flex items-center gap-2 text-trae-green">
                             <Zap size={14}/>
                             <span>Optimizing API calls...</span>
                          </div>
                          <div className="flex items-center gap-2 text-trae-green mt-1">
                             <Zap size={14}/>
                             <span>Updating Type Definitions...</span>
                          </div>
                       </div>
                       <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-trae-green rounded-br-xl"></div>
                    </div>
                </div>
            </div>

            {/* Card 5 */}
            <div className="relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col justify-between group hover:border-trae-green/30 transition-colors duration-300">
                <div>
                    <div className="text-trae-green font-mono mb-2">[04]</div>
                    <h3 className="text-2xl font-bold mb-6">Enterprise-Grade Security & Local Privacy</h3>
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded-xl border border-white/5 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-trae-green/10 flex items-center justify-center border border-trae-green shadow-[0_0_30px_rgba(54,240,151,0.1)]">
                             <ShieldCheck size={40} className="text-trae-green"/>
                        </div>
                        <div className="text-center">
                            <div className="text-white font-bold mb-1">Local Mode</div>
                            <div className="text-gray-500 text-sm">Your code never leaves your machine</div>
                        </div>
                    </div>
                </div>
            </div>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;