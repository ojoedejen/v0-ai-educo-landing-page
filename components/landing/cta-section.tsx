"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <section ref={ref} className="py-16">
      <div 
        className={`relative bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-center overflow-hidden transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 animate-gradient-shift" />
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#ff5c35] rounded-full animate-hero-float opacity-60" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#8b5cf6] rounded-full animate-hero-float opacity-40" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-[#d4e157] rounded-full animate-hero-float opacity-50" style={{ animationDelay: "-4s" }} />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#ff5c35] animate-hero-pulse" />
          </div>
          
          <h2 
            className={`text-2xl mb-4 font-black md:text-5xl text-white transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Take Your Learning Experience
            <br />
            to the Next Level with{" "}
            <span className="gradient-text text-rose-600">AI</span>
          </h2>
          <p 
            className={`mb-8 text-lg font-medium text-gray-300 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Elevate Your Customer Experience with Our Platform.
          </p>
          
          {/* Waitlist Form */}
          <div 
            className={`max-w-md mx-auto transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500/20 text-green-400 rounded-full font-medium animate-success">
                <CheckCircle className="w-5 h-5" />
                <span>You&apos;re on the waitlist!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 bg-white/10 rounded-full text-white border-2 border-white/20 outline-none transition-all duration-300 focus:border-[#ff5c35] focus:bg-white/15 placeholder:text-gray-400"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff5c35] to-[#8b5cf6] opacity-0 -z-10 blur-md transition-opacity duration-300 group-focus-within:opacity-30" />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="relative px-8 py-4 bg-[#ff5c35] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#e54d2a] hover:scale-105 hover:shadow-xl hover:shadow-[#ff5c35]/40 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group overflow-hidden"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                    </>
                  )}
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
