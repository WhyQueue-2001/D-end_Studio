'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { video } from 'framer-motion/client';

export default function OurWorkPage() {
  const router = useRouter();
  const videoRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  // Grid items with varying sizes and custom image paths
  const gridItems = [
    { id: 1, span: 'md:col-span-2 md:row-span-2', height: 'h-64 sm:h-72 md:h-80 lg:h-96', image: '/bike4.png', title: 'Breaking Bonds' },
    { id: 2, span: 'md:col-span-1 md:row-span-1', height: 'h-40 sm:h-44 md:h-48', video: '/video_7.mp4', title: 'Night Riders' },
    { id: 3, span: 'md:col-span-1 md:row-span-1', height: 'h-40 sm:h-44 md:h-48', image: '/bike1.png', title: 'Speed Demon' },
    { id: 4, span: 'md:col-span-1 md:row-span-2', height: 'h-64 sm:h-72 md:h-80', image: '/bike3.png', title: 'Speed Thrills' },
    { id: 5, span: 'md:col-span-2 md:row-span-1', height: 'h-48 sm:h-56 md:h-64 lg:h-104', image: '/bike5.png', title: 'Risk Kills' },
    { id: 6, span: 'md:col-span-1 md:row-span-1', height: 'h-48 sm:h-56 md:h-60 lg:h-68', image: '/bike2.png', title: 'Action Reel' },
    { id: 7, span: 'md:col-span-1 md:row-span-1', height: 'h-48 sm:h-56 md:h-60 lg:h-68', image: '/bike6.png', title: 'Dragon Bike' },
  ];

  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        body::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      <div 
        className="min-h-screen bg-black text-white relative overflow-x-hidden"
        style={{
          backgroundImage: 'url(/bg15.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Our Work</h1>
          
          <button
            className="flex items-center gap-2 sm:gap-3 text-white hover:text-red-500 transition-colors group"
            onClick={handleBack}
          >
            
            <div className="p-1.5 sm:p-2 rounded-full border border-white group-hover:border-red-500 transition-colors">
              <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-semibold">Back</span>
          </button>
        </div>
      </header>

      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 relative z-10">
        {/* Video Section */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div 
            className="relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer" 
            style={{ height: '50vh', minHeight: '300px' }}
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              src="/umang.mp4"
              autoPlay
              loop
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="w-full h-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
            {/* Click overlay hint */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold bg-black/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                Click to view fullscreen
              </p>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-auto">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className={`${item.span} ${item.height} bg-gray-800 rounded-lg overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]`}
              >
                <div className="w-full h-full relative bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  {/* Render video if video property exists, otherwise render image */}
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </main>
    </div>
    </>
  );
}