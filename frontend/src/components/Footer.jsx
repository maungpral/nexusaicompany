import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-900 dark:border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="font-semibold text-lg">NexusAI</div>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Blockchain & AI solutions for modern enterprises.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            HQ: Riyadh, Saudi Arabia
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/company/nexusreality" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/orgs/chainhub1227" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li><a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
            <li><a href="/jobs" className="hover:text-indigo-600 dark:hover:text-indigo-400">Jobs</a></li>
            <li><a href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">
            Subscribe to our newsletter for insights & updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-3 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-500"
            >
              <Mail size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-slate-500 dark:text-slate-400 text-sm py-4 border-t dark:border-slate-800">
        © {new Date().getFullYear()} NexusAI. All rights reserved.
      </div>
    </footer>
  );
}
