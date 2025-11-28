import React from 'react';
import { Book, Code, Terminal, Globe, Cpu, Layers, Box, Settings, Play, AppWindow, FileCode, Monitor } from 'lucide-react';

const TimelineSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto px-6 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From a plugin to an AI Quant</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          AI used to be a feature in your tools. Now your tools are features for AI. 
          Colosseum orchestrates browsers, terminals, editors and essential tools to work with your codebase—all while keeping you visually in the loop. Colosseum is built for the future of development.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Central Vertical Line Container */}
        {/* Active Blue Laser Line - Fully Visible */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-40 w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] -translate-x-1/2 rounded-full"></div>

        {/* STEP 1: PLUGIN */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
           {/* Center Marker Desktop */}
           <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 hidden md:flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 z-20">
                 <Book size={16} className="text-white"/>
              </div>
           </div>
           
           {/* Mobile Marker */}
           <div className="absolute left-0 top-0 z-10 md:hidden flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 ml-3">
                 <Book size={16} className="text-white"/>
              </div>
           </div>

           {/* Content Left (Text) */}
           <div className="md:text-right pt-4 md:pr-16 pl-12 md:pl-0">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Plugin</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                 AI enters the workflow<br/>
                 along with the<br/>
                 first line of code
              </h3>
              {/* Icons */}
              <div className="flex justify-start md:justify-end gap-2 mb-4">
                 <div className="w-8 h-8 rounded bg-[#1A1A1A] border border-white/10 flex items-center justify-center"><Code size={14} className="text-blue-400"/></div>
                 <div className="w-8 h-8 rounded bg-[#1A1A1A] border border-white/10 flex items-center justify-center opacity-50"><Terminal size={14} className="text-gray-400"/></div>
              </div>
           </div>

           {/* Content Right (Card) */}
           <div className="md:pl-16 pl-12 md:pl-0">
              <div className="text-xs text-gray-500 mb-4 pl-1">First came the Colosseum Plugin — bringing the AI copilot into everyday developer tools.</div>
              <div className="bg-[#0F0F11] border border-white/10 rounded-lg p-6 font-mono text-xs text-gray-400 shadow-2xl relative overflow-hidden">
                 {/* Top blue accent line for card */}
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                 
                 <div className="space-y-3">
                    <div className="text-gray-500">JSON.parse(config).then(app => {'{'}</div>
                    <div className="text-gray-500 pl-4">app.initString("message": "init")</div>
                    <div className="text-gray-500">{'}'}</div>
                    
                    <div className="bg-[#1A1A1A] p-3 rounded border-l-2 border-blue-500 my-2">
                        <div className="text-gray-500 mb-1">// Generate function to query user information</div>
                        <div className="text-blue-400">func <span className="text-yellow-200">getUserInfo</span>(http.ResponseWriter, r *http.Request) {'{'}</div>
                        <div className="text-gray-500 pl-4">var user User</div>
                        <div className="text-gray-500 pl-4">// Get user ID from URL parameters</div>
                        <div className="text-gray-500 pl-4">id := r.URL.Query().Get("id")</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>


        {/* STEP 2: IDE */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
           {/* Center Marker Desktop */}
           <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 hidden md:flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 z-20">
                 <AppWindow size={16} className="text-white"/>
              </div>
           </div>

           {/* Mobile Marker */}
           <div className="absolute left-0 top-0 z-10 md:hidden flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 ml-3">
                 <AppWindow size={16} className="text-white"/>
              </div>
           </div>

           {/* Content Left (Text) */}
           <div className="md:text-right pt-4 md:pr-16 pl-12 md:pl-0">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">IDE</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                 AI was no longer confined<br/>
                 to the sidebar — it now<br/>
                 has its own native space.
              </h3>
           </div>

           {/* Content Right (Card) */}
           <div className="md:pl-16 pl-12 md:pl-0">
              <div className="text-xs text-gray-500 mb-4 pl-1">Colosseum IDE was specifically built for AI-first coding, unlocking deep contextual understanding.</div>
              <div className="bg-[#0F0F11] border border-white/10 rounded-lg p-6 font-mono text-xs text-gray-400 shadow-2xl relative overflow-hidden">
                  {/* Top blue accent line for card */}
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

                 <div className="flex gap-4">
                    {/* Fake Sidebar */}
                    <div className="w-1/3 border-r border-white/5 pr-4 space-y-2">
                        <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-800 rounded w-full"></div>
                        <div className="h-2 bg-blue-500/20 rounded w-5/6 mt-4"></div>
                    </div>
                    
                    {/* Fake Editor */}
                    <div className="flex-1 space-y-3">
                         <div className="flex justify-between items-center bg-[#1A1A1A] p-2 rounded border border-white/5">
                            <span>Design a modern portfolio page</span>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                         </div>
                         <div className="pl-2 border-l border-gray-800">
                             <div className="text-green-400 mb-1">Builder with MCP</div>
                             <div className="text-gray-600">I need to review the project list to understand the user's work and style.</div>
                         </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>


        {/* STEP 3: BATTLE (Bottom) */}
        <div className="relative">
           {/* Center Marker Desktop */}
           <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10 hidden md:flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 z-20">
                 <Box size={16} className="text-trae-green"/>
              </div>
           </div>

            {/* Mobile Marker */}
            <div className="absolute left-0 -top-10 z-10 md:hidden flex flex-col items-center">
              <div className="bg-[#050505] p-2 border border-gray-700 rounded mb-2 ml-3">
                 <Box size={16} className="text-trae-green"/>
              </div>
           </div>

           <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0px_0px_50px_rgba(0,0,0,0.5)]">
                
                {/* Dotted Grid Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ 
                         backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', 
                         backgroundSize: '20px 20px' 
                     }}>
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4">All your context and tools, in one place</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        Colosseum works across your entire development stack in real-time. It plans, executes, and delivers in a flow, enabling you to bring ideas from concept to shipped reality.
                    </p>

                    {/* Tools Visualization */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12 items-center relative">
                        
                        {/* SVG Connecting Lines - Desktop Only */}
                        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                           <svg className="w-full h-full" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="traceGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                                   <stop offset="0%" stopColor="#36F097" stopOpacity="0.1" />
                                   <stop offset="100%" stopColor="#36F097" stopOpacity="0.8" />
                                </linearGradient>
                                <linearGradient id="traceGradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
                                   <stop offset="0%" stopColor="#36F097" stopOpacity="0.1" />
                                   <stop offset="100%" stopColor="#36F097" stopOpacity="0.8" />
                                </linearGradient>
                              </defs>
                              
                              {/* Left Traces */}
                              {/* Top Left -> Center */}
                              <path d="M 30% 16% H 36% L 41% 45% H 44%" stroke="url(#traceGradientLeft)" strokeWidth="1.5" fill="none"/>
                              {/* Mid Left -> Center */}
                              <path d="M 30% 50% H 44%" stroke="url(#traceGradientLeft)" strokeWidth="1.5" fill="none"/>
                              {/* Bot Left -> Center */}
                              <path d="M 30% 84% H 36% L 41% 55% H 44%" stroke="url(#traceGradientLeft)" strokeWidth="1.5" fill="none"/>

                              {/* Right Traces */}
                              {/* Top Right -> Center */}
                              <path d="M 70% 16% H 64% L 59% 45% H 56%" stroke="url(#traceGradientRight)" strokeWidth="1.5" fill="none"/>
                              {/* Mid Right -> Center */}
                              <path d="M 70% 50% H 56%" stroke="url(#traceGradientRight)" strokeWidth="1.5" fill="none"/>
                              {/* Bot Right -> Center */}
                              <path d="M 70% 84% H 64% L 59% 55% H 56%" stroke="url(#traceGradientRight)" strokeWidth="1.5" fill="none"/>
                           </svg>
                        </div>

                        {/* Left Tools */}
                        <div className="flex flex-col gap-6 z-10 w-full">
                            <ToolItem icon={<AppWindow size={16}/>} label="IDE" />
                            <ToolItem icon={<Terminal size={16}/>} label="Terminal" />
                            <ToolItem icon={<FileCode size={16}/>} label="DocView" />
                        </div>

                        {/* Center BATTLE Core */}
                        <div className="flex justify-center py-4 md:py-0 z-10">
                            <div className="relative w-48 h-24 bg-black border border-white/10 rounded-lg flex items-center justify-center shadow-2xl">
                                {/* Corner Accents */}
                                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-[#36F097]"></div>
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-[#36F097]"></div>
                                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-[#36F097]"></div>
                                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-[#36F097]"></div>
                                
                                <span className="font-mono text-3xl font-bold tracking-widest text-[#36F097]">BATTLE</span>
                            </div>
                        </div>

                        {/* Right Tools */}
                        <div className="flex flex-col gap-6 z-10 w-full">
                            <ToolItem icon={<Globe size={16}/>} label="Browser" />
                            <ToolItem icon={<Layers size={16}/>} label="Integrations" />
                            <ToolItem icon={<Monitor size={16}/>} label="Figma" />
                        </div>
                    </div>

                    {/* Bottom Workflow Line */}
                    <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-5 gap-4 text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                        <div className="flex flex-col items-center gap-2 group">
                             <div className="p-2 bg-gray-900 rounded group-hover:text-trae-green transition-colors"><Settings size={14}/></div>
                             <div>Requirement</div>
                        </div>
                         <div className="flex flex-col items-center gap-2 group">
                             <div className="p-2 bg-gray-900 rounded group-hover:text-trae-green transition-colors"><Layers size={14}/></div>
                             <div>Prototyping</div>
                        </div>
                         <div className="flex flex-col items-center gap-2 group">
                             <div className="p-2 bg-gray-900 rounded group-hover:text-trae-green transition-colors"><Code size={14}/></div>
                             <div>Frontend</div>
                        </div>
                         <div className="flex flex-col items-center gap-2 group">
                             <div className="p-2 bg-gray-900 rounded group-hover:text-trae-green transition-colors"><Cpu size={14}/></div>
                             <div>Backend</div>
                        </div>
                         <div className="flex flex-col items-center gap-2 group">
                             <div className="p-2 bg-gray-900 rounded group-hover:text-trae-green transition-colors"><Play size={14}/></div>
                             <div>Build & Deploy</div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ToolItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-3 bg-[#0F0F11] border border-white/10 p-4 rounded-md text-gray-200 hover:border-trae-green/30 transition-colors w-full z-20 shadow-lg">
        <span className="text-trae-green">{icon}</span>
        <span className="text-sm font-semibold tracking-wide">{label}</span>
    </div>
)

export default TimelineSection;