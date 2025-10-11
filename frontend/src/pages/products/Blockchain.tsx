import React from "react";
import { Blocks, ShieldCheck, Network } from "lucide-react";

export default function Blockchain() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Blockchain Solutions</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Build secure, scalable, and interoperable blockchain infrastructures
          for the next generation of enterprises.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Feature
          icon={<Blocks className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Smart Contracts"
          desc="Deploy secure and audited contracts on Ethereum, Solana, and cross-chain environments."
        />
        <Feature
          icon={<ShieldCheck className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Enterprise Security"
          desc="Advanced audits, governance tooling, and zero-trust frameworks for mission-critical apps."
        />
        <Feature
          icon={<Network className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Interoperability"
          desc="Cross-chain bridges, L2 integrations, and scalable infrastructure ready for global adoption."
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="btn btn-primary px-6 py-3 text-lg font-medium"
        >
          Talk to Our Blockchain Experts
        </a>
      </div>
    </div>
  );
}

// ✅ No TS types, works in JS/JSX
function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-slate-900 dark:border-slate-700">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}
