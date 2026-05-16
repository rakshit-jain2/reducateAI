"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Globe } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Image - Enhanced with Cards */}
          <motion.div variants={itemVariants} className="relative h-full">
            {/* Main Large Card */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl aspect-square flex items-center justify-center text-9xl shadow-2xl overflow-visible float-rotate glow-hover">
              <div className="text-center">
                <div className="text-9xl mb-4">🏫</div>
                <p className="text-white text-xl font-semibold">EduVerse Campus</p>
              </div>
              
              {/* Overlay cards - positioned inside */}
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow hover:scale-110 transform">
                <div className="text-4xl mb-2">🎓</div>
                <p className="text-sm font-bold text-slate-900">Excellence</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-cyan-400 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow hover:scale-110 transform">
                <div className="text-4xl">🌍</div>
                <p className="text-sm font-bold text-white">Global</p>
              </div>

              <div className="absolute bottom-12 right-6 bg-amber-400 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform">
                <div className="text-3xl">⚡</div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-transform hover:scale-105 transform">
              <div className="text-2xl font-bold text-indigo-600">25+</div>
              <p className="text-xs text-slate-600">Years</p>
            </div>

            <div className="absolute top-32 right-0 bg-white rounded-2xl p-4 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-transform hover:scale-105 transform">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <p className="text-xs text-slate-600">Programs</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                <span className="block mb-2">About EduVerse</span>
                <span className="gradient-text">University</span>
              </h2>
              <p className="text-lg text-slate-600">
                Founded on the principles of excellence and innovation, EduVerse
                University has been shaping future leaders for 25+ years. We
                combine academic rigor with practical industry experience.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: "Academic Excellence",
                  desc: "Consistently ranked among top universities with world-class faculty",
                },
                {
                  icon: Globe,
                  title: "Global Recognition",
                  desc: "Partnerships with 100+ universities across 50+ countries",
                },
                {
                  icon: CheckCircle,
                  title: "Career Success",
                  desc: "95% placement rate with average salary hikes of 40%",
                },
              ].map((item, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 group hover:bg-indigo-50 p-4 rounded-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 icon-bounce group-hover:scale-125 transition-transform group-hover:rotate-6">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors\">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors\">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary">Learn More About Us</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
