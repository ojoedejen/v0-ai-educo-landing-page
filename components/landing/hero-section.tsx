"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Loader2, Sparkles } from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="text-center py-12 md:py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#ff5c35] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "0s" }} />
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#8b5cf6] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#d4e157] rounded-full animate-hero-float opacity-60" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#f5a688] rounded-full animate-hero-float opacity-40" style={{ animationDelay: "-1s" }} />
      
      {/* Animated title with text reveal */}
      <div className="relative">
        <h1 
          className={`text-4xl text-[#1a1a1a] leading-tight mb-6 md:text-7xl font-black transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span 
            className="inline-block animate-text-blur-in"
            style={{ animationDelay: "0.2s" }}
          >
            Tomorrow&apos;s Learning
          </span>
          <br />
          <span 
            className="inline-block relative animate-text-blur-in"
            style={{ animationDelay: "0.5s" }}
          >
            with{" "}
            <span className="gradient-text relative">
              AI-Powered
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-[#ff5c35] animate-hero-pulse" />
            </span>
          </span>
        </h1>
      </div>
      
      {/* Subtitle with blur-in effect */}
      
           
      {/* Waitlist Form with enhanced animations */}
      <div 
        className="max-w-md mx-auto animate-fade-in-up" 
        style={{ animationDelay: "1s" }}
      >
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-green-50 text-green-700 rounded-full font-medium animate-success">
            <CheckCircle className="w-5 h-5 animate-scale-in" />
            <span>You&apos;re on the waitlist! We&apos;ll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to join waitlist"
                required
                className="w-full px-6 py-4 bg-white rounded-full text-[#1a1a1a] border-2 border-gray-200 outline-none transition-all duration-300 focus:border-[#ff5c35] focus:shadow-lg focus:shadow-[#ff5c35]/20 placeholder:text-gray-400 hover:border-gray-300"
              />
              {/* Animated border glow on focus */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff5c35] to-[#8b5cf6] opacity-0 -z-10 blur-md transition-opacity duration-300 group-focus-within:opacity-30" />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative px-8 py-4 bg-[#ff5c35] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#e54d2a] hover:scale-105 hover:shadow-xl hover:shadow-[#ff5c35]/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group ripple-effect overflow-hidden"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </form>
        )}
        <p 
          className="mt-4 text-xs text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "1.2s" }}
        >
          Join 100+ students already on the waitlist for our{" "}
          <span className="font-semibold text-[#ff5c35]">6 Days Vibe Coding Bootcamp</span>
        </p>
      </div>
    </section>
  );
}
