import React, { useState, useEffect, useRef } from 'react';

const REVIEWS_DATA = [
  {
    id: 1,
    initial: "А",
    name: "ТОО \"Артэкс-KZ\"",
    text: "Наша компания выражает благодарность за высокий профессионализм и качество проведенных работ по представлению интересов компании в правоохранительных органах и в суде. Предоставленные услуги соответствуют высоким требованиям.",
  },
  {
    id: 2,
    initial: "АМ",
    name: "ИП \"Аманатов М.\"",
    text: "Наша компания выражает благодарность за качественно оказываемые услуги и рекомендует как компанию, максимально удовлетворяющую требованиям клиента. На всех стадиях сотрудничества компания зарекомендовала себя как высоконадежный партнер.",
  },
  {
    id: 3,
    initial: "КЭ",
    name: "ТОО \"KazExpress Logistics\"",
    text: "Выражаем огромную благодарность за юридическую помощь в решении наших вопросов на территории Республики Казахстан, представление интересов в суде и консультации по различным юридическим вопросам.",
  },
  {
    id: 4,
    initial: "ҚА",
    name: "ТОО \"Құрылыс-Астана\"",
    text: "Обратились по вопросу взыскания дебиторской задолженности. Юристы QazPrime провели сложную работу: от претензии до реального получения денег через ЧСИ. Результатом полностью довольны, продолжаем сотрудничество.",
  },
  {
    id: 5,
    initial: "Б",
    name: "Бексултанов Б.К.",
    text: "Помогли списать долги через процедуру банкротство физических лиц. Ситуация казалась безвыходной, но юристы грамотно составили заявление и довели дело до конца. Теперь я финансово свободен.",
  },
  {
    id: 6,
    initial: "DT",
    name: "ТОО \"Dala Tech\"",
    text: "Заказывали разработку договоров для IT-проекта. Понравилось, что юристы вникают в суть бизнеса, а не просто используют шаблоны. Все риски были учтены, документы подготовлены в кратчайшие сроки.",
  },
];

export const Reviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Determine items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3);
      } else if (width >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total pages (groups of dots)
  const totalPages = Math.ceil(REVIEWS_DATA.length / itemsPerView);

  // Handle Scroll to update active dot
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;

      // Calculate which "page" we are on
      const newIndex = Math.round(scrollLeft / width);

      // Ensure we don't go out of bounds
      if (newIndex !== activeIndex && newIndex < totalPages) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToPage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const width = container.clientWidth;
      container.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
          Отзывы о компании QazPrime
        </h2>

        {/* Carousel Container */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS_DATA.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 snap-start w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between h-full min-h-[500px] transition-all duration-300 hover:border-slate-700 relative overflow-hidden">

                  {/* Decorative faint background initial */}
                  <div className="absolute -bottom-10 -right-10 text-[180px] font-bold text-slate-800/30 select-none pointer-events-none">
                    {review.initial}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-white/10 flex-shrink-0">
                        {review.initial}
                      </div>
                      <div>
                        <div className="text-red-600 font-bold text-lg leading-tight line-clamp-1">{review.name}</div>
                        <div className="text-slate-500 text-xs uppercase tracking-wide mt-1">Клиент</div>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-slate-800 font-serif leading-none select-none opacity-50">“</span>
                      <p className="text-slate-300 text-base leading-relaxed relative z-10 pt-2">
                        {review.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'w-10 bg-red-600' // Pill shape for active
                  : 'w-2 bg-slate-800 hover:bg-slate-700' // Dot for inactive
                }`}
              aria-label={`Go to slide page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};