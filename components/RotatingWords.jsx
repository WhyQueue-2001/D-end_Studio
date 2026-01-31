import { useState, useEffect } from 'react';

export default function RotatingWords() {
  const words = [
    { text: 'Every', size: 'text-[1.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem]' },
    { text: 'Frame', size: 'text-[1.75rem] sm:text-[3.3rem] md:text-[4.4rem] lg:text-[5.25rem]' },
    { text: 'Counts', size: 'text-[2rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[6.25rem]' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setFadeIn(true);
      }, 300);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-500 border border-gray-800 rounded-lg flex items-center justify-center h-24 sm:h-40 md:h-48 w-full overflow-hidden">
      <p
        className={`font-bold text-black transition-opacity duration-300 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        } ${words[currentIndex].size}`}
      >
        {words[currentIndex].text}
      </p>
    </div>
  );
}