
import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/i18n-context';
import { CircleArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useI18n();

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-wave.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          
          <p className="mt-6 text-xl lg:text-2xl lg:w-1/2 tracking-tight">
            {t('hero.subtitle')}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/upload" 
              className="px-8 py-3 bg-black text-white rounded-full text-center hover:opacity-90"
            >
              {t('hero.getFree')}
            </Link>
            
            <a
              href="#pricing"
              className="px-8 py-3 border border-black rounded-full text-center hover:bg-black hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.seePricing')}
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 right-8 w-16 h-16 cursor-pointer"
        onClick={scrollToHowItWorks}
      >
        <div className="relative w-full h-full">
          <CircleArrowDown className="w-full h-full animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
