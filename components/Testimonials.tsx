"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
    ];
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              <span className="block mb-2">Hear From Our</span>
              <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of alumni who have achieved their dreams through
              EduVerse University.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 min-h-96">
              {getVisibleTestimonials().map((testimonial, mapIndex: number) => (
                <motion.div
                  key={mapIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white rounded-3xl p-8 card-shadow overflow-hidden glow-hover"
                >
                  {/* Gradient overlay */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:h-2 transition-all duration-300"></div>

                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform"
                          style={{transitionDelay: `${i * 50}ms`}}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg text-slate-700 italic leading-relaxed group-hover:text-slate-900 transition-colors">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 group-hover:border-indigo-200 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform icon-bounce">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {testimonial.course}
                        </p>
                        <p className="text-xs text-slate-500">{testimonial.batch}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform duration-200 hover:shadow-lg active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform duration-200 hover:shadow-lg active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-indigo-600"
                      : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            {[
              { stat: "5000+", label: "Happy Graduates", icon: "👨‍🎓" },
              { stat: "4.9/5", label: "Average Rating", icon: "⭐" },
              { stat: "98%", label: "Would Recommend", icon: "✅" },
            ].map((item, idx: number) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-2xl card-shadow hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                <p className="text-slate-600 mt-2">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
