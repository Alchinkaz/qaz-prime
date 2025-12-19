import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className="bg-slate-900 py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Профессиональная юридическая помощь
            </h2>
            
            <div className="text-slate-300 space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">QazPrime</span> — это юридическая фирма, созданная для тех, кому нужна не теория, а 
                реальный результат. Мы работаем с долгами, недвижимостью, спорами с банками и МФО.
              </p>
              
              <div className="bg-slate-950 p-6 rounded-xl border-l-4 border-gold-500">
                <p className="text-slate-400 italic">
                  «Моя задача — защитить ваши деньги и имущество, а не просто “написать иск”. Я 
                  сопровождаю клиента до результата.»
                </p>
                <div className="mt-4 font-bold text-white">
                    — Жексембеков Биржан, <span className="text-gold-500 font-normal">Основатель</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-8">
                 <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-slate-400">Судебных дел</div>
                 </div>
                 <div className="bg-slate-800 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-gold-500 mb-1">2.4 млрд</div>
                    <div className="text-sm text-slate-300">Тенге взыскано</div>
                 </div>
             </div>
             <div className="space-y-4">
                 <div className="bg-slate-800 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-slate-400">Лет опыта</div>
                 </div>
                 <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <div className="text-3xl font-bold text-gold-500 mb-1">100%</div>
                    <div className="text-sm text-slate-300">Конфиденциальность</div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};