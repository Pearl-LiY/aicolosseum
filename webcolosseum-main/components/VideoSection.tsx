import React from 'react';
import Button from './Button';
import { Globe, ArrowUpRight, Check, Brain, Terminal, Zap } from 'lucide-react';
import { useNavigation } from '../../NavigationContext';

const VideoSection: React.FC = () => {
  const { goToApp } = useNavigation();

  return (
    <section className="relative z-10 py-32 px-4 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <div className="mb-6 font-mono text-trae-green text-sm tracking-widest uppercase">Colosseum 1.0</div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Go <span className="text-trae-green">BATTLE</span> with Colosseum
        </h2>
        
        <p className="text-xl text-gray-400 mb-10">
          The responsive coding agent that ships at full speed.
        </p>
        
        <Button variant="trae" className="gap-2 h-12 px-8" onClick={goToApp}>
          <Globe size={18} />
          Explore Colosseum
        </Button>
      </div>

      {/* Trading Dashboard Placeholder (Simulating Screenshot) */}
      <div className="max-w-[1300px] mx-auto relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D10] font-sans opacity-90 hover:opacity-100 transition-opacity cursor-pointer" onClick={goToApp}>
         
         {/* Top Bar */}
         <div className="bg-[#18181B] border-b border-white/10 px-6 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Zap size={16} className="text-black fill-current"/>
                </div>
                <div>
                    <h3 className="font-bold text-white">AI Trading Competition</h3>
                    <div className="text-xs text-gray-400 font-mono">Qwen vs DeepSeek · Real-time</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                 <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 flex items-center gap-1">
                    <Globe size={12}/> GitHub
                 </div>
                 <div className="flex items-center bg-gray-800 rounded overflow-hidden">
                    <div className="px-3 py-1 text-xs text-gray-400">中文</div>
                    <div className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold">EN</div>
                 </div>
                 <div className="px-4 py-1.5 bg-yellow-500 rounded text-black text-xs font-bold">Details</div>
                 <div className="px-4 py-1.5 bg-green-900/30 text-green-400 border border-green-900/50 rounded text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    RUNNING
                 </div>
            </div>
         </div>

         {/* Dashboard Grid */}
         <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
             
             {/* Left Column */}
             <div className="flex flex-col gap-4">
                 
                 {/* Account Equity Curve */}
                 <div className="bg-[#131316] rounded-lg border border-white/5 p-6">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="text-sm text-white font-semibold mb-2">Account Equity Curve</div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-white">213.71</span>
                                <span className="text-sm text-gray-500">USDT</span>
                                <span className="ml-2 px-2 py-0.5 bg-green-900/30 text-green-400 text-xs rounded border border-green-900/50 flex items-center">
                                    <ArrowUpRight size={10} className="mr-1"/> +8.27%
                                </span>
                                <span className="text-xs text-gray-600">(+16.51 USDT)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 bg-black/40 rounded p-1">
                             <div className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded">USDT</div>
                             <div className="px-3 py-1 text-gray-500 text-xs">%</div>
                        </div>
                     </div>

                     {/* Fake Chart */}
                     <div className="relative h-48 w-full border-l border-b border-white/10">
                         {/* Grid Lines */}
                         <div className="absolute top-0 w-full border-t border-white/5 border-dashed"></div>
                         <div className="absolute top-1/2 w-full border-t border-white/5 border-dashed"></div>
                         
                         {/* Chart Line SVG */}
                         <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                             <path d="M0,80 C20,80 30,30 50,30 S80,40 100,35 S150,25 200,20 S250,5 300,10 S350,-5 400,0 S450,10 500,5 S550,-10 600,-5" 
                                   fill="none" stroke="#EAB308" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                             <line x1="0" y1="35" x2="600" y2="35" stroke="gray" strokeWidth="1" strokeDasharray="4"/>
                             <text x="320" y="32" fill="gray" fontSize="10">Initial</text>
                         </svg>
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-600 mt-2 font-mono">
                         <span>21:23</span>
                         <span>22:18</span>
                         <span>23:11</span>
                         <span>00:05</span>
                         <span>01:27</span>
                     </div>
                 </div>

                 {/* Current Positions */}
                 <div className="bg-[#131316] rounded-lg border border-white/5 p-6 flex-1">
                     <div className="flex justify-between items-center mb-4">
                         <div className="flex items-center gap-2">
                             <div className="w-4 h-4 rounded bg-red-500/20 flex items-center justify-center"><Terminal size={10} className="text-red-500"/></div>
                             <h3 className="font-semibold text-white">Current Positions</h3>
                         </div>
                         <span className="px-2 py-0.5 bg-yellow-900/20 text-yellow-500 text-xs border border-yellow-500/30 rounded">3 Active</span>
                     </div>

                     <div className="overflow-x-auto">
                        <table className="w-full text-xs font-mono">
                            <thead>
                                <tr className="text-gray-500 border-b border-white/5">
                                    <th className="text-left py-2 font-normal">SYMBOL</th>
                                    <th className="text-left py-2 font-normal">SIDE</th>
                                    <th className="text-right py-2 font-normal">ENTRY PRICE</th>
                                    <th className="text-right py-2 font-normal">QUANTITY</th>
                                    <th className="text-right py-2 font-normal">PNL</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="group hover:bg-white/5">
                                    <td className="py-3 font-bold text-white">BTCUSDT</td>
                                    <td className="py-3"><span className="bg-red-900/30 text-red-400 px-1 py-0.5 rounded text-[10px]">SHORT</span></td>
                                    <td className="py-3 text-right text-gray-300">112776.40</td>
                                    <td className="py-3 text-right text-gray-300">0.0088</td>
                                    <td className="py-3 text-right text-green-400 font-bold">+13.49</td>
                                </tr>
                                <tr className="group hover:bg-white/5">
                                    <td className="py-3 font-bold text-white">ETHUSDT</td>
                                    <td className="py-3"><span className="bg-red-900/30 text-red-400 px-1 py-0.5 rounded text-[10px]">SHORT</span></td>
                                    <td className="py-3 text-right text-gray-300">3973.70</td>
                                    <td className="py-3 text-right text-gray-300">0.2668</td>
                                    <td className="py-3 text-right text-green-400 font-bold">+1.23</td>
                                </tr>
                                <tr className="group hover:bg-white/5">
                                    <td className="py-3 font-bold text-white">AAVEUSDT</td>
                                    <td className="py-3"><span className="bg-red-900/30 text-red-400 px-1 py-0.5 rounded text-[10px]">SHORT</span></td>
                                    <td className="py-3 text-right text-gray-300">228.90</td>
                                    <td className="py-3 text-right text-gray-300">1.0900</td>
                                    <td className="py-3 text-right text-green-400 font-bold">+1.09</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                 </div>
             </div>

             {/* Right Column */}
             <div className="flex flex-col gap-4">
                
                {/* Recent Decisions Header */}
                <div className="bg-[#131316] p-4 rounded-lg border border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center">
                        <Brain size={20} className="text-blue-400"/>
                    </div>
                    <div>
                        <div className="font-bold text-white">Recent Decisions</div>
                        <div className="text-xs text-gray-500">Last 5 trading cycles</div>
                    </div>
                </div>

                {/* Cycle 1 */}
                <div className="bg-[#131316] rounded-lg border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bg-green-900/30 text-green-400 text-[10px] px-2 py-1 rounded-bl">Success</div>
                    <div className="text-sm font-bold text-white mb-1">Cycle #1</div>
                    <div className="text-[10px] text-gray-500 mb-3">2025/10/30 01:31:02</div>

                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-blue-400">
                             <Terminal size={12}/> Input Prompt <span className="text-gray-500 text-[10px]">Expand</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-500">
                             <Brain size={12}/> AI Chain of Thought <span className="text-gray-500 text-[10px]">Expand</span>
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <div className="bg-black/40 p-2 rounded flex justify-between items-center border border-white/5">
                            <span className="font-bold text-white text-xs">BTCUSDT</span>
                            <div className="flex items-center gap-2">
                                <span className="bg-yellow-900/20 text-yellow-500 px-1.5 py-0.5 rounded text-[10px]">hold</span>
                                <Check size={10} className="text-green-500"/>
                            </div>
                        </div>
                        <div className="bg-black/40 p-2 rounded flex justify-between items-center border border-white/5">
                            <span className="font-bold text-white text-xs">ETHUSDT</span>
                            <div className="flex items-center gap-2">
                                <span className="bg-yellow-900/20 text-yellow-500 px-1.5 py-0.5 rounded text-[10px]">hold</span>
                                <Check size={10} className="text-green-500"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-white/5 text-[10px] text-gray-500 flex gap-4 font-mono">
                        <span>Net: 216.31 USDT</span>
                        <span>Risk: 58.5%</span>
                    </div>
                </div>

                {/* Cycle 65 */}
                <div className="bg-[#131316] rounded-lg border border-white/5 p-4 relative overflow-hidden flex-1 opacity-80">
                    <div className="absolute right-0 top-0 bg-green-900/30 text-green-400 text-[10px] px-2 py-1 rounded-bl">Success</div>
                    <div className="text-sm font-bold text-white mb-1">Cycle #65</div>
                    <div className="text-[10px] text-gray-500 mb-3">2025/10/30 01:27:26</div>

                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-blue-400">
                             <Terminal size={12}/> Input Prompt <span className="text-gray-500 text-[10px]">Expand</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-500">
                             <Brain size={12}/> AI Chain of Thought <span className="text-gray-500 text-[10px]">Expand</span>
                        </div>
                    </div>

                     <div className="mt-3 space-y-1">
                        <div className="bg-black/40 p-2 rounded flex justify-between items-center border border-white/5">
                            <span className="font-bold text-white text-xs">BTCUSDT</span>
                            <div className="flex items-center gap-2">
                                <span className="bg-yellow-900/20 text-yellow-500 px-1.5 py-0.5 rounded text-[10px]">hold</span>
                                <Check size={10} className="text-green-500"/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </section>
  );
};

// Helper for Zap icon usage
const ZapIcon = ({size, className}: {size: number, className?: string}) => (
    <Zap size={size} className={className} />
)

export default VideoSection;