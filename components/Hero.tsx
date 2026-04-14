"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Supporting Learners and Educators Discover Their",
    highlight: "Identity, Self-Worth",
    subtitle: "and Sense of Belonging",
    description: "Addressing educational shortcomings in quality, school management, accountability and teaching efficiency through professional development and academic excellence.",
    image: "/images/hero-1.jpg",
    cta1: { text: "Explore Programs", link: "/academics" },
    cta2: { text: "About LGIHE", link: "/about" },
  },
  {
    title: "Transforming Education in",
    highlight: "Uganda & Africa",
    subtitle: "Through Excellence",
    description: "Offering diploma and certificate courses in education, professional development trainings, and comprehensive curriculum development services.",
    image: "/images/hero-2.jpg",
    cta1: { text: "Our Programs", link: "/academics" },
    cta2: { text: "Learn More", link: "/about" },
  },
  {
    title: "Professional Development for",
    highlight: "Teachers & Leaders",
    subtitle: "Building Capacity",
    description: "Empowering school leaders, teachers, and professionals with effective strategies and insights to unlock their potential and transform education.",
    image: "/images/hero-3.jpg",
    cta1: { text: "Training Programs", link: "/academics" },
    cta2: { text: "Contact Us", link: "/contact" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Optimized for Low Bandwidth */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          {/* Next.js Image with automatic optimization */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={currentSlide === 0}
            quality={75}
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-xs uppercase tracking-[0.25em] text-white/80 font-medium mb-6"
            >
              Luigi Giussani Institute of Higher Education
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] mb-6"
            >
              {slide.title}{" "}
              <em className="not-italic text-[#FFD700]">{slide.highlight}</em>
              <br />
              {slide.subtitle}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-lg sm:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-10"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={slide.cta1.link}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3d4d6f] text-white text-sm font-medium hover:bg-[#2f3d57] transition-colors duration-200"
              >
                {slide.cta1.text}
              </Link>
              <Link
                href={slide.cta2.link}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                {slide.cta2.text}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="mt-16 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-1 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-bold text-white">20+</p>
            <p className="text-sm text-white/80 mt-1">Years of Impact</p>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-bold text-white">1000+</p>
            <p className="text-sm text-white/80 mt-1">Graduates</p>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-bold text-white">10+</p>
            <p className="text-sm text-white/80 mt-1">Academic Programs</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="mt-16 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
