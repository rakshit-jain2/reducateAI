"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative rounded-4xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full rotate-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full rotate-slow" style={{animationDirection: 'reverse'}}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-32 text-center space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Admissions Open
                <span className="block mt-2">for 2026</span>
              </h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Take the first step towards your dream career. Join thousands of
                students who are transforming their futures at EduVerse
                University.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/apply" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-2 group pulse-glow">
                Start Your Application
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Schedule a Campus Tour
              </button>
            </motion.div>

            {/* Deadline info */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto mt-12"
            >
              <p className="text-sm text-indigo-100">Application Deadline</p>
              <p className="text-2xl font-bold text-white">July 31, 2026</p>
              <p className="text-sm text-indigo-100 mt-2">Limited seats available</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
