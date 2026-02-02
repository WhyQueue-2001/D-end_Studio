'use client';

import { useState, useEffect, useRef, } from 'react';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import RotatingWords from './RotatingWords';
import SplashScreen from './SplashScreen';

import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function DendStudio() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [showServices, setShowServices] = useState(false);
  
  const videoRef = useRef(null);

  const cinematicRef = React.useRef(null);
  const brandRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const lettersRef = useRef([]);

  lettersRef.current = [];

  const services = [
    { name: 'Brand films', image: '/brandfilms.jpeg' },
    { name: 'Music videos', image: '/music.jpeg' },
    { name: 'Commercial ads', image: '/commercial.jpeg' },
    { name: 'Scriptwriting', image: '/scriptwriting.jpeg' },
    { name: 'Motion graphics', image: '/motiongraphics.jpeg' },
    { name: 'VFX', image: '/vfx.jpeg' },
    { name: 'Campaign concepts', image: '/campaign.jpeg' },
    { name: 'Photography', image: '/photography.jpeg' },
    { name: '2D & 3D animation', image: '/animation.jpeg' },
  ];

  const [hoveredService, setHoveredService] = useState(services[0]);

  const companyName = "D-End Studio";

  // Navigate to our-work page and scroll to top
  const handleVideoClick = () => {
    router.push('/our-work');
    // Ensure the page scrolls to top after navigation
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    if (!cinematicRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cinematicRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });
      

      tl.fromTo(
        lettersRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power3.out',
          duration: 0.6,
        }
      );

      tl.to(
        lettersRef.current,
        {
          y: -120,
          opacity: 0,
          stagger: 0.04,
          ease: 'power2.inOut',
          duration: 0.8,
        },
        '+=0.3'
      );

      tl.fromTo(
        servicesRef.current,
        { y: '-100%' },
        {
          y: '0%',
          ease: 'power2.out',
          duration: 1,
        },
        '-=0.3'
      );
      
    }, cinematicRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Updated Video Components with new video sources
  const VideoPlaceholder = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden ${className}`}>
      <video
        src="/video_3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  const VideoPlaceholder2 = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden w-full ${className}`}>
      <video
        src="/video_4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-175 object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  const VideoPlaceholder3 = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-lg h-84 w-full border border-gray-800 ${className}`}>
      <video
        src="/video_2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain rotate-270"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  // New video component for the second item in first column
  const VideoPlaceholder4 = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-lg ${className}`}>
      <video
        src="/video_6.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  // New video component for the first item in third column (horizontal video)
  const VideoPlaceholder5 = ({ className = "" }) => (
    <div
      className={`relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden ${className}`}
    >
      <video
        src="/video_2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
  

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Main Content */}
      <div className="min-h-screen text-white relative">
        {/* Fixed Background with Image */}
        <div
          className="fixed inset-0 -z-10 bg-black bg-cover bg-center"
          style={{ backgroundImage: 'url(/bg15.png)' }}
        />

        {/* Scrollable Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              D-End Studio<span className="text-red-500"></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <a href="#" className="text-lg lg:text-2xl font-bold hover:text-red-500 transition">Home</a>
              <a href="#" className="text-lg lg:text-2xl font-bold hover:text-red-500 transition">Portfolio</a>
              <a href="#" className="text-lg lg:text-2xl font-bold hover:text-red-500 transition">About</a>

              <button className="px-4 lg:px-6 py-2 border border-white rounded-full text-lg lg:text-2xl font-bold hover:bg-red-500 hover:text-white transition">
                Get in touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-b border-gray-800 px-4 sm:px-6 md:px-8 py-4 space-y-4 bg-black/95">
              <a href="#" className="block text-base font-bold">Home</a>
              <a href="#" className="block text-base font-bold">Portfolio</a>
              <a href="#" className="block text-base font-bold">About</a>

              <button className="w-full px-6 py-2 border border-white rounded-full text-base font-bold hover:bg-red-500 hover:text-white transition">
                Get in touch
              </button>
            </div>
          )}

          {/* Hero Section */}
          <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
            <div className="leading-tight mb-12 sm:mb-16 md:mb-20 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold break-words">Where Dreams End</h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold break-words">Our Creativity begins</h2>
            </div>

            {/* Grid Layout - 3 Columns on ALL screen sizes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 mb-8 sm:mb-12">
              {/* First Column - Video 1 and Video 4 */}
              <div className="space-y-2 sm:space-y-3 md:space-y-6">
                <VideoPlaceholder className="h-32 sm:h-48 md:h-64 rounded-lg" />
                <VideoPlaceholder4 className="h-32 sm:h-48 md:h-150" />
              </div>

              {/* Second Column - RotatingWords and Video 2 with spacing */}
              <div className="row-span-2 flex flex-col gap-2 sm:gap-3 md:gap-6">
                <RotatingWords />
                <div className="relative rounded-lg overflow-hidden flex-1 min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
                  <VideoPlaceholder2 className="h-full" />
                </div>
              </div>

              {/* Third Column - Video 5 */}
              <div className="space-y-2 sm:space-y-3 md:space-y-6">
                <VideoPlaceholder5 className="h-full"/>
               
              </div>
            </div>
          </div>

          {/* Featured Work Section */}
          <div className="px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">Featured Work</h2>
            </div>

            {/* Featured Work - Single Item with Click Handler */}
            <div className="max-w-full">
              <div className="group">
                <div
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden cursor-pointer mb-4 bg-gray-900 transition-transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredVideo(1)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={handleVideoClick}
                >
                  <video
                    ref={videoRef}
                    src="/umang.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: 'crisp-edges',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                  />

                  {hoveredVideo === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-black/60 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm">
                        View Work
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Speed Thrills, Risk kills</h3>
              </div>
            </div>
          </div>

          {/* ================= CINEMATIC BRAND → SERVICES ================= */}
          <section
  ref={cinematicRef}
  className="relative min-h-[200vh] overflow-hidden"
>

            {/* BRAND LETTER SCENE */}
            <div
              ref={brandRef}
              className="absolute inset-0 h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16"
            >
              <h2 className="text-[14vw] md:text-[13vw] font-bold tracking-wider whitespace-nowrap">
                {companyName.split('').map((char, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) lettersRef.current[i] = el;
                    }}
                    className="inline-block opacity-0"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
            </div>

            {/* SERVICES SCENE (comes from top) */}
            <div
  ref={servicesRef}
  className="relative min-h-screen px-4 sm:px-6 md:px-8 py-20"
>

              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-12 sm:mb-16 md:mb-20">Services</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                {/* Image that changes on hover */}
                <div className="flex justify-center order-2 md:order-1">
                  <div className="w-full max-w-md h-64 sm:h-80 md:h-96 lg:w-120 lg:h-160 bg-gray-800 flex items-center justify-center overflow-hidden rounded-lg">
                    {hoveredService && (
                      <img
                        src={hoveredService.image}
                        alt={hoveredService.name}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    )}
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
                  {services.map((service, i) => (
                    <p
                      key={i}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white hover:text-red-500 md:hover:text-5xl lg:hover:text-7xl transition-all hover:translate-x-2 md:hover:translate-x-3 cursor-pointer"
                      onMouseEnter={() => setHoveredService(service)}
                      onClick={() => setHoveredService(service)}
                    >
                      {service.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}