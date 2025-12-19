import React from 'react';

const MARQUEE_ITEMS = [
  "Взыскание долгов и защита от необоснованных требований",
  "Споры с банками, МФО, коллекторами",
  "Недвижимость: сделки, аресты, выселение, споры по залогам",
  "Представительство в судах и исполнительном производстве"
];

export const RunningLine: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = React.useState(false);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTimestamp: number;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isInteracting) {
        // Average speed: ~0.1px per ms. Faster on mobile to compensate for width.
        const speed = window.innerWidth < 768 ? 0.15 : 0.1;
        scrollContainer.scrollLeft += speed * delta;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft -= maxScroll;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  return (
    <div className="bg-slate-950/50 backdrop-blur-md border-t border-b border-slate-800 py-5 select-none relative">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onWheel={() => {
          setIsInteracting(true);
          // Resume after period of inactivity
          const timer = setTimeout(() => setIsInteracting(false), 2000);
          return () => clearTimeout(timer);
        }}
      >
        {/* First set of items */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Second set of items (duplicated for seamless loop) */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Third set of items for safety on very wide screens */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`third-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
