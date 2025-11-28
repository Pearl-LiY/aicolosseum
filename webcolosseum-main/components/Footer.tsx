import React from 'react';
import { Twitter, Github, ArrowUp, ArrowRight } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../../NavigationContext';

const Footer: React.FC = () => {
  const { goToApp } = useNavigation();

  return (
    <footer className="relative z-10 bg-[#050505] border-t border-white/10 pt-20 overflow-hidden">
      
      {/* CTA Section */}
      <div className="max-w-[1400px] mx-auto px-6 mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
         <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Get Started with Colosseum</h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-500">Try it for Free</p>
         </div>
         <div>
            <Button variant="trae" className="h-14 px-8 text-lg font-bold gap-2" onClick={goToApp}>
                Get Started
                <ArrowRight size={20}/>
            </Button>
         </div>
      </div>

      {/* Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/10 pt-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
             <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <div className="flex gap-0.5">
                   <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
             </div>
          </div>

          <div>
             <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-6">Terms</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-trae-green transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Cookie Policy</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-6">Resources</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-trae-green transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Blog</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-6">Connect</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-trae-green transition-colors">Feedback</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-trae-green transition-colors">Partnerships</a></li>
             </ul>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 pb-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
         <div>©2025 Colosseum. All rights reserved.</div>
         <div className="flex gap-4">
            <Twitter size={16} className="hover:text-white cursor-pointer"/>
            <Github size={16} className="hover:text-white cursor-pointer"/>
         </div>
         <div className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Back to top <ArrowUp size={12}/>
         </div>
      </div>

      {/* Giant Logo at Bottom */}
      <div className="w-full bg-trae-green overflow-hidden flex justify-center items-end h-[20vw] md:h-[15vw]">
         <div className="font-bold text-black text-[18vw] leading-[0.75] tracking-tighter uppercase">COLOSSEUM</div>
      </div>
    </footer>
  );
};

export default Footer;