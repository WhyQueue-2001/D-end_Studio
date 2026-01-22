import { useState, useEffect } from 'react';

export default function RotatingWords() {
  const words = ['Every', 'Frame', 'Counts'];
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
    <div className="bg-red-500 border border-gray-800 rounded-lg flex items-center justify-center h-48 overflow-hidden">
    <p
      className={`text-7xl font-bold text-gray-300 transition-opacity duration-300 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[currentIndex]}
    </p>
  </div>
  );
}