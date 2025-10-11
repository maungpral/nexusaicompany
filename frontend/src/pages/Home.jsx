import React from "react"
import { motion } from "framer-motion"
import { Cpu, Blocks, BarChart2, ShieldCheck, Globe2, Users } from "lucide-react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const data = [
  { y: "2022", ai: 42, chain: 28 },
  { y: "2023", ai: 68, chain: 44 },
  { y: "2024", ai: 85, chain: 57 },
  { y: "2025", ai: 94, chain: 71 },
]

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="card p-6 border border-slate-200 dark:border-slate-800">
    <div className="h-12 w-12 rounded-xl bg-indigo/10 dark:bg-emerald/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-indigo dark:text-emerald" />
    </div>
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300 mt-2">{desc}</p>
  </div>
)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Enterprise AI + Blockchain Infrastructure
          </motion.h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-90">
            NexusAI delivers trusted automation and decentralized intelligence
            to leading enterprises and governments worldwide.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="/contact" className="btn btn-primary">
              Schedule a Demo
            </a>
            <a href="/about" className="btn btn-ghost">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Feature
          icon={Cpu}
          title="AI Research"
          desc="Deployed NLP models, forecasting engines, and autonomous agents at enterprise scale."
        />
        <Feature
          icon={Blocks}
          title="Blockchain"
          desc="Zero-trust architecture, audited smart contracts, zk-rollup integrations."
        />
        <Feature
          icon={BarChart2}
          title="Enterprise Intelligence"
          desc="Data pipelines, secure dashboards, and automation platforms with >99.99% uptime."
        />
      </section>

      {/* Insights / Chart */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Market Adoption Insights
          </h2>
          <div className="h-80 w-full card p-4 border border-slate-200 dark:border-slate-800">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="ai"
                  stroke="#4f46e5"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="chain"
                  stroke="#10b981"
                  strokeWidth={2}
                />
                <CartesianGrid stroke="#1f2937" strokeOpacity={0.2} />
                <XAxis stroke="#9ca3af" dataKey="y" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Company Impact */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <ShieldCheck className="mx-auto h-8 w-8 text-indigo-500 mb-3" />
          <h3 className="text-2xl font-bold">500M+</h3>
          <p className="text-slate-600 dark:text-slate-400">Transactions Secured</p>
        </div>
        <div>
          <Globe2 className="mx-auto h-8 w-8 text-emerald-500 mb-3" />
          <h3 className="text-2xl font-bold">20+</h3>
          <p className="text-slate-600 dark:text-slate-400">Global Deployments</p>
        </div>
        <div>
          <Users className="mx-auto h-8 w-8 text-indigo-500 mb-3" />
          <h3 className="text-2xl font-bold">70+</h3>
          <p className="text-slate-600 dark:text-slate-400">Specialists Worldwide</p>
        </div>
        <div>
          <BarChart2 className="mx-auto h-8 w-8 text-emerald-500 mb-3" />
          <h3 className="text-2xl font-bold">99.99%</h3>
          <p className="text-slate-600 dark:text-slate-400">Uptime Guarantee</p>
        </div>
      </section>

      {/* Culture */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Inside Our Culture
        </h2>
        <p className="text-center max-w-3xl mx-auto text-slate-600 dark:text-slate-400 mb-10">
          At NexusAI, our culture is rooted in curiosity, ethical responsibility,
          and relentless innovation. We unite blockchain pioneers and AI
          researchers to build solutions that drive transparency, global trust,
          and sustainable digital ecosystems.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 border border-slate-200 dark:border-slate-800 text-center">
            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              We foster continuous breakthroughs in cryptography, AI, and distributed systems.
            </p>
          </div>
          <div className="card p-6 border border-slate-200 dark:border-slate-800 text-center">
            <h3 className="font-semibold text-lg mb-2">Ethics</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Our work is guided by principles of fairness, transparency, and accountability.
            </p>
          </div>
          <div className="card p-6 border border-slate-200 dark:border-slate-800 text-center">
            <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              We believe diverse, global teams produce resilient, world-class solutions.
            </p>
          </div>
          <div className="card p-6 border border-slate-200 dark:border-slate-800 text-center">
            <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building decentralized systems that are energy-conscious and future-proof.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            className="card object-cover w-full h-56"
            src="AI.png"
            alt="Blockchain visualization"
          />
          <img
            className="card object-cover w-full h-56"
            src="Blockchain.png"
            alt="Artificial intelligence network"
          />
          <img
            className="card object-cover w-full h-56"
            src="Furturistic.png"
            alt="Futuristic technology lab"
          />
        </div>
      </section>
    </div>
  )
}
