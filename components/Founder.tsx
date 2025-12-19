import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <div className="bg-slate-950 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2 lg:gap-20 items-start">

          {/* Left Column: Content (Visually bottom on mobile, left on desktop) */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Жексембеков Биржан Тайырович
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Основатель и руководитель QazPrime
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Практикующий юрист, специализация — судебные споры и взыскание задолженности",
                "Опыт работы с делами о долгах, залоге, недвижимости и спорами с МФО/банками",
                "Представительство в судах, сопровождение исполнительного производства",
                "Практический подход: объясняю клиенту, что реально возможно и как к этому прийти"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 leading-relaxed text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative border-l-4 border-red-600 pl-6 py-2">
              <p className="text-white text-lg italic leading-relaxed">
                «Моя задача — защитить ваши деньги и имущество, а не просто “написать иск”. Я
                сопровождаю клиента до результата и объясняю каждый шаг понятным языком.»
              </p>
            </div>
          </div>

          <div className="w-full h-[400px] lg:h-auto lg:min-h-[500px] relative">
            <div className="absolute inset-0 bg-red-600/10 rounded-2xl blur-3xl -z-10"></div>
            <img
              src="/founder.JPG"
              alt="Жексембеков Биржан Тайырович"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>

        </div>
      </div>
    </div>
  );
};