"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";

export default function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="programs" className="section-padding bg-slate-50">
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
              <span className="block mb-2">Explore Our</span>
              <span className="gradient-text">Academic Programs</span>
            </h2>
            <p className="text-lg text-slate-600">
              Choose from 50+ diverse programs across engineering, business,
              design, and more. Each program is designed to prepare you for
              success in your chosen field.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group relative bg-white rounded-3xl p-8 card-shadow overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl glow-hover"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} icon-bounce transition-transform group-hover:rotate-6`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-gradient transition-colors">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{program.description}</p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-indigo-600 group-hover:gap-3 transition-all duration-300 font-semibold">
                    <span>Explore Program</span>
                    <ArrowRight size={20} />
                  </div>
                </div>

                {/* Bottom border accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <button className="btn-primary">View All Programs</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
