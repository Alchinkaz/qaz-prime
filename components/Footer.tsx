import React from 'react';
import { Clock, Phone, Mail } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="bg-slate-950 pt-12 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Block with Rounded Top Corners */}
        <div className="bg-slate-900 rounded-t-[2.5rem] border border-b-0 border-slate-800 px-8 pt-12 pb-8 md:px-12 lg:px-16 shadow-2xl shadow-black/50">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <a href="#" onClick={scrollToTop} className="inline-block cursor-pointer">
                    <Logo />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                    Юридическая помощь в Алматы и по всему Казахстану. Защита ваших интересов — наша работа, которую мы делаем профессионально.
                </p>
              </div>
            </div>

            {/* Column 2: Contacts */}
            <div className="lg:pl-12">
                <h3 className="text-white font-bold mb-6 text-lg">Контакты</h3>
                <ul className="space-y-5">
                    <li className="flex items-center group">
                        <Phone className="text-red-600 mr-4 flex-shrink-0 group-hover:text-red-500 transition-colors" size={20} />
                        <a href={PHONE_HREF} className="text-slate-400 text-base hover:text-white transition-colors">{PHONE_NUMBER}</a>
                    </li>
                     <li className="flex items-center group">
                        <Mail className="text-red-600 mr-4 flex-shrink-0 group-hover:text-red-500 transition-colors" size={20} />
                        <span className="text-slate-400 text-base group-hover:text-slate-300 transition-colors">info@qazprime.kz</span>
                    </li>
                </ul>
            </div>

            {/* Column 3: Working Hours */}
            <div>
                 <h3 className="text-white font-bold mb-6 text-lg">Режим работы</h3>
                 <ul className="space-y-5">
                    <li className="flex items-start">
                        <Clock className="text-slate-600 mr-4 mt-1 flex-shrink-0" size={20} />
                        <div className="text-slate-400 text-base">
                            <p className="text-white font-medium mb-1">Пн–Пт</p>
                            <p>10:00–19:00</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Clock className="text-slate-600 mr-4 mt-1 flex-shrink-0" size={20} />
                        <div className="text-slate-400 text-base">
                            <p className="text-white font-medium mb-1">Сб–Вс</p>
                            <p>По предварительной записи</p>
                        </div>
                    </li>
                </ul>
            </div>

          </div>
          
          {/* Bottom Copyright Section */}
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
            {/* Left: Copyright */}
            <p className="order-1 text-center md:text-left">&copy; {new Date().getFullYear()} QazPrime. Все права защищены.</p>
            
            {/* Center: Developer */}
            <p className="order-3 md:order-2 text-center">
              Разработка сайта - <a 
                href="https://wa.me/77710798939" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors font-medium cursor-pointer"
              >
                Web Alchin
              </a>
            </p>

            {/* Right: Links */}
            <div className="order-2 md:order-3 flex gap-6 justify-center">
              <a href="#" className="hover:text-slate-300 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};