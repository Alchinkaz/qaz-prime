import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '../constants';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const lastScrollY = useRef(0);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'kz', label: 'Қаз', flag: '🇰🇿' },
    { code: 'ru', label: 'Рус', flag: '🇷🇺' },
    { code: 'en', label: 'Eng', flag: '🇬🇧' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsOpen(false);
        setIsLangOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contacts'), href: '#contacts' },
  ];

  const LanguageDropdown = () => (
    <div className="absolute top-full right-0 mt-3 w-32 bg-[#1e293b] border border-slate-700/50 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-800 transition-colors group text-left"
        >
          <span className="text-lg leading-none">{lang.flag}</span>
          <span className={`text-sm font-medium ${i18n.language === lang.code ? 'text-red-500' : 'text-slate-300 group-hover:text-white'}`}>
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className={`fixed top-10 left-0 right-0 z-50 pointer-events-none transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl shadow-2xl pointer-events-auto transition-all duration-300">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <a href="#" onClick={scrollToTop} className="flex-shrink-0 flex items-center cursor-pointer">
                <Logo />
              </a>

              <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 md:gap-2 lg:gap-6">
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                  <div className="text-right">
                    <a href={PHONE_HREF} className="block text-white font-bold text-lg leading-tight hover:text-red-600 transition-colors">
                      {PHONE_NUMBER}
                    </a>
                    <div className="flex items-center justify-end gap-1.5 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{t('nav.online')}</span>
                    </div>
                  </div>

                  <div className="relative" ref={langMenuRef}>
                    <button
                      onClick={() => setIsLangOpen(!isLangOpen)}
                      className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-700 ${isLangOpen ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                    >
                      <Globe size={20} />
                    </button>
                    {isLangOpen && <LanguageDropdown />}
                  </div>
                </div>

                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-700 ${isOpen ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="border-t border-slate-800">
              <div className="md:hidden px-4 sm:px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <a href={PHONE_HREF} className="block text-xl font-bold text-white mb-1 hover:text-red-600 transition-colors leading-none">
                    {PHONE_NUMBER}
                  </a>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium leading-none pt-[1px]">{t('nav.online')}</span>
                  </div>
                </div>

                <div className="relative" ref={langMenuRef}>
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-700 ${isLangOpen ? 'text-white bg-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                  >
                    <Globe size={20} />
                  </button>
                  {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-[#1e293b] border border-slate-700/50 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-800 transition-colors group text-left"
                        >
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <span className={`text-sm font-medium ${i18n.language === lang.code ? 'text-red-500' : 'text-slate-300 group-hover:text-white'}`}>
                            {lang.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-4 py-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};