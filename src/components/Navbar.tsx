
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/i18n-context';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t, locale, changeLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    changeLocale(locale === 'en' ? 'tr' : 'en');
  };

  return (
    <nav
      className={`px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : ''
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          Ω ClauseGuard
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="/#how-it-works" className="text-sm hover:text-gray-600">
          {t('navbar.howItWorks')}
        </a>
        <a href="/#pricing" className="text-sm hover:text-gray-600">
          {t('navbar.pricing')}
        </a>
        <a href="/#faq" className="text-sm hover:text-gray-600">
          {t('navbar.faq')}
        </a>
        
        <button onClick={toggleLanguage} className="text-sm">
          {locale === 'tr' ? 'EN' : 'TR'}
        </button>
        
        <Link to="/login" className="text-sm hover:text-gray-600">
          {t('navbar.login')}
        </Link>
      </div>
      
      <Button
        variant="ghost"
        className="hidden md:flex border border-black hover:bg-black hover:text-white transition-colors"
        asChild
      >
        <Link to="/upload">{t('navbar.uploadContract')}</Link>
      </Button>
      
      <button 
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="6" y2="6"/>
          <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>
      
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <a href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            {t('navbar.howItWorks')}
          </a>
          <a href="/#pricing" onClick={() => setMobileMenuOpen(false)}>
            {t('navbar.pricing')}
          </a>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>
            {t('navbar.faq')}
          </a>
          <button onClick={toggleLanguage}>
            {locale === 'tr' ? 'EN' : 'TR'}
          </button>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            {t('navbar.login')}
          </Link>
          <Link 
            to="/upload" 
            className="border border-black px-4 py-2 rounded-full text-center hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('navbar.uploadContract')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
