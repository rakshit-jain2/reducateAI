"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState({
    programs: 0,
    students: 0,
    placement: 0,
  });

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    []
  );

  useEffect(() => {
    const animateNumbers = () => {
      let programsCount = 0;
      let studentsCount = 0;
      let placementCount = 0;
      let frameCount = 0;
      const maxFrames = 30;

      const interval = setInterval(() => {
        frameCount++;
        const progress = frameCount / maxFrames;

        programsCount = Math.round(50 * progress);
        studentsCount = Math.round(20000 * progress);
        placementCount = Math.round(95 * progress);

        setAnimatedStats({
          programs: programsCount,
          students: studentsCount,
          placement: placementCount,
        });

        if (frameCount >= maxFrames) {
          clearInterval(interval);
        }
      }, 40);
    };

    const timer = setTimeout(animateNumbers, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 pt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 rounded-full border border-indigo-200"
              >
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-sm font-medium text-indigo-600">
                  Admissions Open for 2026
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block mb-2 slide-in-left">Shape Your Future</span>
                <span className="gradient-text gradient-shift">
                  with World-Class Education
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Join thousands of students who have transformed their careers at
                EduVerse University. We offer industry-aligned programs taught by
                expert faculty with a 95% placement rate.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/apply" className="btn-primary flex items-center justify-center gap-2 group pulse-glow hover:shadow-xl active:scale-95 transition-all">
                Apply for Admission
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
              <Link href="#programs" className="btn-secondary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                Explore Programs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-indigo-600">
                  {animatedStats.programs.toString().padStart(2, "0")}+
                </div>
                <p className="text-sm text-slate-600">Programs</p>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                  {(animatedStats.students / 1000).toFixed(0)}K+
                </div>
                <p className="text-sm text-slate-600">Students</p>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-cyan-600">
                  {animatedStats.placement}%
                </div>
                <p className="text-sm text-slate-600">Placement</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl flex items-center justify-center hover:shadow-2xl transition-shadow float-rotate glow-hover">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl font-bold icon-bounce">🎓</div>
                  <h3 className="text-2xl font-bold">World-Class</h3>
                  <p className="text-indigo-100">
                    Education at Your Fingertips
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400 rounded-2xl shadow-lg flex items-center justify-center text-5xl hover:scale-105 transition-transform">
                🚀
              </div>

              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-2xl shadow-lg flex items-center justify-center text-4xl hover:scale-105 transition-transform">
                💡
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-indigo-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-indigo-600 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
