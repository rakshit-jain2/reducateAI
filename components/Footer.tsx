"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="container-custom py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">EU</span>
              </div>
              <span className="font-bold text-xl text-white">EduVerse</span>
            </Link>
            <p className="text-sm">
              Shaping future leaders with world-class education and innovative
              learning experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, label: "GitHub", url: "https://github.com/rakshit-jain2" },
                { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/rakshitjain06" },
                { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/rakshit_jain2" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Admissions", href: "/apply" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Academics */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white">Academics</h4>
            {[
              "Engineering",
              "Business",
              "Computer Science",
              "Design",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm hover:text-indigo-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-white">Contact Info</h4>
            {[
              {
                icon: MapPin,
                label: "Rohini,Delhi-89",
              },
              { icon: Phone, label: "+91 8595332291" },
              { icon: Mail, label: "rjrakshit6@gmail.com" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2 text-sm">
                <item.icon size={16} className="flex-shrink-0 mt-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-slate-800 my-8"
        ></motion.div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm">
            &copy; 2026 EduVerse University. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
