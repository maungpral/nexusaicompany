import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "@/theme/ThemeProvider";
import { Moon, Sun, ChevronDown } from "lucide-react";
import logo from "/favicon.png";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b dark:bg-slate-900/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-8 w-8" alt="NexusAI" />
          <span className="font-bold text-xl text-slate-900 dark:text-white">
            NexusAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "text-white bg-indigo-600 dark:bg-emerald-600 shadow-sm"
                  : "text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400"
              }`
            }
          >
            About
          </NavLink>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400 flex items-center gap-1"
            >
              Products <ChevronDown size={14} />
            </button>
            {open && (
              <div className="absolute top-full mt-2 w-48 rounded-lg bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 py-2">
                <Link
                  to="/products/blockchain"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Blockchain Solutions
                </Link>
                <Link
                  to="/products/ai"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  AI Platform
                </Link>
                <Link
                  to="/products/consulting"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Consulting
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "text-white bg-indigo-600 dark:bg-emerald-600 shadow-sm"
                  : "text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "text-white bg-indigo-600 dark:bg-emerald-600 shadow-sm"
                  : "text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400"
              }`
            }
          >
            Job Opening
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Contact CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-500 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-sm transition"
          >
            Contact Us
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="btn btn-ghost rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <span className="relative inline-block">
              <Sun
                className={`h-5 w-5 transition-transform duration-300 ${
                  theme === "dark"
                    ? "opacity-0 -rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
              <Moon
                className={`h-5 w-5 absolute top-0 left-0 transition-transform duration-300 ${
                  theme === "dark"
                    ? "opacity-100 rotate-0"
                    : "opacity-0 rotate-90"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
