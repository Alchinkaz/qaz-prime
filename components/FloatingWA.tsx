import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { useTranslation } from 'react-i18next';

export const FloatingWA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label={t('nav.online')}
    >
      {/* Pulsing Ring - Slowed down animation */}
      <span
        className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"
        style={{ animationDuration: '3s' }}
      ></span>

      {/* Button Content - Fixed width/height for perfect centering */}
      <div className="relative bg-[#25D366] hover:bg-[#20b85c] text-white w-14 h-14 rounded-full shadow-xl shadow-green-900/30 transition-transform hover:scale-105 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M16.53 13.98C16.28 13.86 15.08 13.27 14.86 13.19C14.63 13.1 14.47 13.06 14.3 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.38 14.43 13.24 14.45 12.99 14.33C12.74 14.21 11.94 13.95 10.99 13.1C10.25 12.44 9.75 11.63 9.6 11.37C9.46 11.12 9.59 10.99 9.71 10.86C9.82 10.75 9.96 10.57 10.09 10.42C10.21 10.27 10.25 10.16 10.33 10C10.42 9.84 10.37 9.7 10.31 9.57C10.25 9.45 9.75 8.23 9.54 7.73C9.33 7.24 9.13 7.31 8.97 7.3C8.83 7.3 8.66 7.3 8.49 7.3C8.33 7.3 8.05 7.36 7.82 7.61C7.59 7.86 6.95 8.46 6.95 9.68C6.95 10.9 7.83 12.08 7.96 12.24C8.08 12.4 9.77 15 12.36 16.12C12.98 16.39 13.46 16.54 13.83 16.66C14.45 16.86 15.02 16.83 15.46 16.77C15.96 16.69 16.99 16.14 17.2 15.54C17.42 14.94 17.42 14.44 17.35 14.33C17.29 14.22 17.12 14.15 16.88 14.03L16.53 13.98Z" />
        </svg>
      </div>
    </a>
  );
};