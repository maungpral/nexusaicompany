import React from "react";
import { Users, Globe2, Cpu, Blocks, Linkedin, ShieldCheck, Server } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-20">
      {/* Hero Intro */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">About NexusAI</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
          NexusAI is a frontier technology company at the intersection of{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Artificial Intelligence </span> 
          and <span className="font-semibold text-indigo-600 dark:text-indigo-400">Blockchain</span>.  
          Since 2019, we’ve been building next-generation infrastructure that ensures 
          <em> trust, intelligence, and scale </em> for enterprises, governments, and global innovators.  
        </p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 className="text-2xl font-semibold mb-3">Mission</h3>
          <p className="text-slate-600 dark:text-slate-300">
            To empower organizations with transparent, automated decision-making through AI-driven blockchain solutions.
          </p>
        </div>
        <div className="p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 className="text-2xl font-semibold mb-3">Vision</h3>
          <p className="text-slate-600 dark:text-slate-300">
            To become the global catalyst where decentralized trust meets artificial intelligence, redefining how industries operate.
          </p>
        </div>
        <div className="p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h3 className="text-2xl font-semibold mb-3">Core Values</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Integrity, radical transparency, technical excellence, and relentless curiosity.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">2019</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Year Founded</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">70+</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Experts Worldwide</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">500M+</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Transactions Secured</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">99.99%</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">System Uptime</p>
        </div>
      </section>

      {/* Tech Focus Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Focus</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
            <Cpu size={18}/> AI-Driven Automation
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
            <Blocks size={18}/> Smart Contract Infrastructure
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
            <ShieldCheck size={18}/> Zero-Trust Security
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
            <Server size={18}/> Scalable Data Pipelines
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
            <Globe2 size={18}/> Decentralized Applications
          </span>
        </div>
      </section>

      {/* Journey Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold">2019 — Founded</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              A small collective of researchers and engineers launched NexusAI to explore the convergence of blockchain and AI.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold">2021 — Enterprise Breakthrough</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Deployed our first large-scale blockchain analytics engine for a Fortune 500 enterprise.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold">2023 — Global Expansion</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Offices opened in London, Singapore, and New York, expanding to a globally distributed team of 70+ professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
<div className="grid md:grid-cols-3 gap-8">
  {/* CEO */}
  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-800 text-center">
    <img
      src="CEO.png"
      alt="Dr. Asa Siegel"
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold">Dr. Asa Siegel</h3>
    <p className="text-slate-500 dark:text-slate-400">CEO &amp; Co-Founder</p>
    {/* <a
      href="https://www.linkedin.com/in/asa-siegel/"
      className="inline-flex mt-3 text-indigo-600 dark:text-indigo-400 hover:underline"
    >
      <Linkedin size={20} />
    </a> */}
  </div>

  {/* CTO */}
  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-800 text-center">
    <img
      src="CTO.png"
      alt="Hussen Shambesh"
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold">Ethan Nakamura</h3>
    <p className="text-slate-500 dark:text-slate-400">CTO</p>
    {/* <a
      href="https://www.linkedin.com/in/hkshambesh/"
      className="inline-flex mt-3 text-indigo-600 dark:text-indigo-400 hover:underline"
    >
      <Linkedin size={20} />
    </a> */}
  </div>

  {/* Head of AI Research */}
  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-800 text-center">
    <img
      src="Head of AI.png"
      alt="Louize Fischer"
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold">Sofia Martinez</h3>
    <p className="text-slate-500 dark:text-slate-400">Head of AI Research</p>
    {/* <a
      href="https://www.linkedin.com/in/louizefischer/"
      className="inline-flex mt-3 text-indigo-600 dark:text-indigo-400 hover:underline"
    >
      <Linkedin size={20} />
    </a> */}
  </div>
</div>
      </section>

      {/* Global Presence */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">New York, USA</h3>
            <p className="text-slate-500 dark:text-slate-400">Blockchain Engineering Hub</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">London, UK</h3>
            <p className="text-slate-500 dark:text-slate-400">AI Research Lab</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Singapore</h3>
            <p className="text-slate-500 dark:text-slate-400">APAC Innovation Center</p>
          </div>
        </div>
      </section>

      {/* New Map Section - Saudi Arabia */}
    </div>
  );
}
