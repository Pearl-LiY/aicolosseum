import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../../NavigationContext';

const Navbar: React.FC = () => {
  const { goToApp } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={goToApp}>
            {/* Logo Text */}
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white font-sans uppercase">COLOSSEUM</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">Product <ChevronDown size={12}/></a>
            <a href="#" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">Docs</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="trae" className="h-9 px-4 text-[13px] rounded-md" onClick={goToApp}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col pt-24 px-6 md:hidden animate-fade-in">
           <div className="flex flex-col gap-6">
              <a href="#" className="text-lg text-gray-300 hover:text-white">Product</a>
              <a href="#" className="text-lg text-gray-300 hover:text-white">Pricing</a>
              <a href="#" className="text-lg text-gray-300 hover:text-white">Blog</a>
              <hr className="border-gray-800" />
              <Button variant="trae" fullWidth onClick={() => { setMobileMenuOpen(false); goToApp(); }}>Get Started</Button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;