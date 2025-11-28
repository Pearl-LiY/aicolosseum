import React from 'react';
import { Zap } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../../NavigationContext';

const Hero: React.FC = () => {
  const { goToApp } = useNavigation();

  return (
    <section className="relative z-10 flex items-center justify-center min-h-[90vh] pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Column: Huge Title */}
        <div className="lg:col-span-7 flex flex-col items-start">
           {/* Banner */}
          <div className="mb-8 inline-flex items-center gap-2 animate-fade-in text-sm font-medium text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md cursor-pointer" onClick={goToApp}>
            <Zap size={14} className="text-yellow-400 fill-yellow-400" />
            <span>Colosseum 1.0 is generally available.</span>
            <span className="text-trae-green hover:underline ml-1">Explore now &gt;</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter animate-fade-in leading-[0.9] text-white" style={{ animationDelay: '0.1s' }}>
            AI<br />
            COLOSSEUM
          </h1>
        </div>

        {/* Right Column: Description and Buttons */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-start lg:pl-12 pb-4">
            <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light">
                The PnL Battle Arena for Systematic Trading Strategies
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                <Button variant="trae" className="h-14 px-8 text-base w-full sm:w-auto font-bold" onClick={goToApp}>
                  Get Started
                </Button>
                <Button variant="white" className="h-14 px-8 text-base w-full sm:w-auto font-bold" onClick={goToApp}>
                   Explore Colosseum
                </Button>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;