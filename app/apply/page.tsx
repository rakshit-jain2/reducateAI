"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/data";
import { useState, useMemo, useCallback } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    program: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.15,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 25 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    }),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.mobile || !formData.email || !formData.program) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate mobile
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\D/g, ""))) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Show loading state
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          mobile: "",
          email: "",
          program: "",
        });
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <CheckCircle size={40} className="text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold gradient-text">
              Application Submitted!
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              Thank you for your application. We&apos;ll review it and contact you soon
              at the provided email and mobile number.
            </p>
          </div>
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 pt-20 pb-16">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              <span className="block mb-2">Start Your Journey</span>
              <span className="gradient-text">with EduVerse University</span>
            </h1>
            <p className="text-lg text-slate-600">
              Fill out the form below to apply for your desired program.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl card-shadow p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors bg-slate-50 hover:bg-white focus:bg-white focus:shadow-lg"
                  required
                />
              </motion.div>

              {/* Mobile Number Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors bg-slate-50 hover:bg-white focus:bg-white focus:shadow-lg"
                  required
                />
                <p className="text-xs text-slate-500">
                  10-digit number without country code
                </p>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors bg-slate-50 hover:bg-white focus:bg-white focus:shadow-lg"
                  required
                />
              </motion.div>

              {/* Program Selection */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Select Program *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors bg-slate-50 hover:bg-white focus:bg-white focus:shadow-lg cursor-pointer"
                  required
                >
                  <option value="">Choose a program...</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.title}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-slate-200"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span>→</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Note */}
              <motion.p
                variants={itemVariants}
                className="text-center text-xs text-slate-500"
              >
                By submitting this form, you agree to our terms and conditions.
                We&apos;ll contact you within 24 hours.
              </motion.p>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: "📧",
                title: "Email Confirmation",
                desc: "You'll receive a confirmation email immediately",
              },
              {
                icon: "📞",
                title: "Phone Call",
                desc: "Our team will call you within 24 hours",
              },
              {
                icon: "✅",
                title: "Fast Processing",
                desc: "Applications reviewed within 3-5 business days",
              },
            ].map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 card-shadow text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{info.title}</h3>
                <p className="text-sm text-slate-600">{info.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
