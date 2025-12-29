import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Founder: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-slate-950 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              {t('founder.name')}
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              {t('founder.subtitle')}
            </p>

            <ul className="space-y-5 mb-10">
              {(t('founder.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 leading-relaxed text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative border-l-4 border-red-600 pl-6 py-2">
              <p className="text-white text-lg italic leading-relaxed">
                {t('founder.quote')}
              </p>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-auto md:min-h-[500px] relative order-1 md:order-2">
            <div className="absolute inset-0 bg-red-600/10 rounded-2xl blur-3xl -z-10"></div>
            <img
              src="/founder.JPG"
              alt={t('founder.name')}
              className="w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>

        </div>
      </div>
    </div>
  );
};