"use client";

import { Home } from "lucide-react";

const navItems = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
  { label: "Feature", active: false },
  { label: "Support", active: false },
  { label: "Community", active: false },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] rounded-full animate-fade-in-down">
      {/* Logo */}
      <div className="flex items-center group cursor-pointer">
        <span className="text-white text-xl font-bold transition-transform duration-300 group-hover:scale-105">
          <span className="text-[#ff5c35]">AI</span>Educo
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              item.active
                ? "bg-[#ff5c35] text-white flex items-center gap-2 hover-glow"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.active && <Home className="w-4 h-4" />}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Red dot indicator */}
        <div className="w-6 h-6 rounded-full bg-[#ff5c35] flex items-center justify-center animate-pulse-soft">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>

        {/* User Avatar */}
        

        {/* Pro Badge */}
        <div className="flex items-center gap-1 text-white text-sm cursor-pointer transition-all duration-300 hover:scale-105">
          
          
        </div>
      </div>
    </header>
  );
}
