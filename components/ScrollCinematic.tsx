'use client';

import { useState, useEffect, useRef, } from 'react';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import RotatingWords from './RotatingWords';


import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function StudioSize() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [showServices, setShowServices] = useState(false);
  
  const cinematicRef = React.useRef<HTMLDivElement | null>(null);
  const brandRef = React.useRef<HTMLDivElement | null>(null);
  const servicesRef = React.useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  lettersRef.current = [];

  const services = [
    { name: 'Brand films', image: '/brandfilms.jpeg' },
    { name: 'Music videos', image: '/music.jpeg' },
    { name: 'Commercial ads', image: '/commercial.jpeg' },
    { name: 'Scriptwriting', image: '/scriptwriting.jpeg' },
    { name: 'Motion graphics', image: '/motiongraphics.jpeg' },
    { name: 'VFX & compositing', image: '/vfx.jpeg' },
    { name: 'Campaign concepts', image: '/campaign.jpeg' },
    { name: 'Photography', image: '/photography.jpeg' },
    { name: '2D & 3D animation', image: '/animation.jpeg' },
  ];

  const [hoveredService, setHoveredService] = useState(services[0]);

  const companyName = "D-End Studio";

  React.useEffect(() => {
    if (!cinematicRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cinematicRef.current,
          start: 'top top',
          end: 'center top',
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

  const VideoPlaceholder = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden ${className}`}>
      <video
        src="/video2.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover -rotate-90 scale-200"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  const VideoPlaceholder2 = ({ className = "" }) => (
    <div className={`bg-gray-900 flex items-center justify-center relative overflow-hidden w-full h-48 ${className}`}>
      <video
        src="/video1.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white relative">
      {/* Fixed Background with Image */}
      <div 
        className="fixed inset-0 -z-10 bg-black bg-cover bg-center"
        style={{backgroundImage: 'url(/bg2.png)'}}
      />
      

      {/* Your page content goes here */}
      <div className="relative z-10">
        {/* Add your content here */}
      </div>
      {/* Scrollable Content */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
        <div className="text-5xl font-bold tracking-tight">
          D-End Studio<span className="text-red-500">°</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-2xl hover:text-red-500 transition">Home</a>
          <a href="#" className="text-2xl hover:text-red-500 transition">Portfolio</a>
          <a href="#" className="text-2xl hover:text-red-500 transition">About</a>

          <a href="#" className="text-2xl hover:text-red-500 transition flex items-center gap-2">
            Assets <span>↗</span>
          </a>
          <button className="px-6 py-2 border border-white rounded-full text-2xl hover:bg-red-500 hover:text-white transition">
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
        <div className="md:hidden border-b border-gray-800 px-8 py-4 space-y-4">
          <a href="#" className="block text-sm">Home</a>
          <a href="#" className="block text-sm">Portfolio</a>
          <a href="#" className="block text-sm">About</a>
          <a href="#" className="block text-sm">Assets</a>
          <button className="w-full px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
            Get in touch
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="px-8 py-20 md:py-32">
      <div className="leading-tight mb-20 max-w-4xl">
  <h1 className="text-5xl md:text-9xl font-bold">Production studio</h1>
  <h2 className="text-3xl md:text-7xl font-bold">for timeless storytelling</h2>
</div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* First Column - Chart and Stats */}
          <div className="space-y-6">
            <VideoPlaceholder className="h-64 rounded-lg" />

            <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden">
              <img
                src="/image.jpeg"
                alt="Statistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column - Large video placeholder with colorful bars */}
          <div className="md:row-span-2">
            <div className="relative rounded-lg overflow-hidden h-full min-h-96">
              <VideoPlaceholder2 className="h-full absolute inset-0" />
            </div>
          </div>

          {/* Third Column - Text and circles */}
          <div className="space-y-6">
            <div className="bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-lg h-64 w-full border border-gray-800">
              <video
                src="/video3.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              </div>
            </div>
            <RotatingWords />
            <div className="bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-lg h-84 w-full border border-gray-800">
              <video
                src="/video4.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="px-8 pt-12 pb-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-8xl font-bold">Featured Work</h2>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border border-white rounded-full text-2xl hover:bg-white hover:text-black transition">
              View All
            </button>
            <button className="p-3 border border-gray-700 rounded-full hover:border-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-3 border border-gray-700 rounded-full hover:border-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { id: 1, title: 'Project Name',  image: '/work2.jpeg', video: '/workvideo2.mp4' },
            { id: 2, title: 'Project Name',  image: '/work1.jpeg', video: '/videowork1.mp4' },
            { id: 3, title: 'Project Name',  image: '/work3.jpeg', video: '/workvideo3.mp4' },
            { id: 4, title: 'Project Name', image: '/work4.jpeg', video: '/workvideo4.mp4' },
          ].map((work) => (
            <div key={work.id} className="group">
              <div
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer mb-4 bg-gray-900"
                onMouseEnter={() => setHoveredVideo(work.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {hoveredVideo === work.id ? (
                  <video
                    src={work.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {hoveredVideo === work.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-semibold">{work.title}</h3>
              <p className="text-gray-400 text-sm">{work.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CINEMATIC BRAND → SERVICES ================= */}
      <section
        ref={cinematicRef}
        className="relative h-screen overflow-hidden"
      >
        {/* BRAND LETTER SCENE */}
        <div
          ref={brandRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h2 className="text-[16vw] font-bold tracking-wider">
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
  className="absolute inset-0 px-8 py-20"
>
  <p className="text-2xl md:text-7xl font-bold text-white mb-20">Services</p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* Image that changes on hover */}
    <div className="flex justify-center">
      <div className="w-100 h-150  bg-gray-800 flex items-center justify-center overflow-hidden">
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
    <div className="space-y-4">
      {services.map((service, i) => (
        <p
          key={i}
          className="text-5xl md:text-6xl font-bold text-white hover:text-red-500 transition-all hover:translate-x-8 cursor-pointer"
          onMouseEnter={() => setHoveredService(service)}
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
  );
}