import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact-form" className="bg-slate-950 pt-24 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Map */}
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <iframe 
                    id="map_299284260" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    src="https://makemap.2gis.ru/widget?data=eJxNkM1uwjAQhN9leySijmOcH6kHGkSgsqKkFUJtxSHFhhqZOHIMKo3y7nWglbrH_WZ3Z7YDbbgwgmdCH4U1UrSQvHdgL42ABOaisicjwIPG6EYYe-UdbLXSxvG73Q65ctxKq4aJ1XpOV4un5mO9enBtLtqtkY2VunawWExHRKfsn2jPXmbPB5tNETuUNk8Jet2VlmePiJmyzbNimacUsbA85-k9YrPyzAdNFLFgOnIHvpc1F1-Q-Oiveg_2tzCXwepvkkLL2jr9VrvAsq7sNWhIx1Hsh6HvkWCM_TjGGzcuOSQ0xv3Gg2PVFLqVN_8dqMpCcpNSTAIS4pBQ6oEa8LAswiSeRBHyMY0nzp3WR-ctcEvdH7RS608h1Nu1a81J9D-TrHTx" 
                    sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                    className="absolute inset-0 w-full h-full"
                    title="2GIS Map Widget"
                ></iframe>
                
                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl">
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/20">
                            {/* Standard Filled Map Pin Icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#E93A3A]">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </div>
                        <div className="text-white font-medium text-lg leading-snug">
                            г. Алматы, Бостандыкский район,<br/> 
                            ул. Розыбакиева 153Б
                        </div>
                    </div>
                    
                    <a 
                        href="https://go.2gis.com/vJVgH" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3.5 rounded-xl bg-[#2ECC71] hover:bg-[#27AE60] text-white font-bold text-base transition-colors shadow-lg shadow-green-500/10"
                    >
                        Перейти в 2ГИС
                    </a>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-slate-800 shadow-2xl flex flex-col justify-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                    Свяжитесь со мной сегодня
                    </h2>
                    <p className="text-slate-400">
                    Не позволяйте долгам управлять вашей жизнью. Заполните форму, и я свяжусь с вами в течение 15 минут для бесплатного анализа ситуации.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="Ваше имя"
                        />
                    </div>
                    <div>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="Номер телефона"
                        />
                    </div>
                </div>

                <div>
                    <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="Кратко опишите ситуацию"
                    />
                </div>

                <div className="pt-2">
                    <Button type="submit" fullWidth className="py-4 text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/20 rounded-xl">
                        Получить решение проблемы
                    </Button>
                </div>

                <p className="text-xs text-center text-slate-500 mt-6">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных. Ваши данные надежно защищены.
                </p>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};