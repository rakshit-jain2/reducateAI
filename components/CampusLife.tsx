"use client";

import { motion } from "framer-motion";
import { campusHighlights } from "@/lib/data";

export default function CampusLife() {
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

  const emojis = ["🏛️", "⚽", "🚀", "🎭", "👥", "📚"];

  return (
    <section className="section-padding bg-white">
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
              <span className="block mb-2">Experience</span>
              <span className="gradient-text">Campus Life</span>
            </h2>
            <p className="text-lg text-slate-600">
              Beyond academics, our vibrant campus offers countless opportunities
              for personal growth, cultural exploration, and unforgettable
              memories.
            </p>
          </motion.div>

          {/* Campus Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 card-shadow overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bounce-in glow-hover"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-6xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 icon-bounce">{emojis[index]}</div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{highlight.description}</p>
                </div>

                {/* Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 group-hover:scale-150"></div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🎯", title: "Academic Excellence" },
              { emoji: "🏆", title: "Sports & Recreation" },
              { emoji: "🌍", title: "Global Community" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl bounce-in glow-hover"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-300 icon-bounce">{item.emoji}</div>
                  <p className="text-white font-bold text-lg drop-shadow">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
