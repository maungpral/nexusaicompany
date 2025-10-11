import React from "react";
import { Users, Lightbulb, Workflow } from "lucide-react";

export default function Consulting() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Consulting Services</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Strategic guidance for blockchain and AI adoption, tailored to your
          industry challenges and opportunities.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Feature
          icon={<Users className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Enterprise Advisory"
          desc="From ideation to deployment, we guide enterprises on their AI and blockchain transformation journey."
        />
        <Feature
          icon={<Lightbulb className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Innovation Strategy"
          desc="Co-create next-gen products and services powered by decentralized intelligence."
        />
        <Feature
          icon={<Workflow className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Integration Support"
          desc="Seamlessly integrate AI and blockchain stacks into your existing systems."
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="btn btn-primary px-6 py-3 text-lg font-medium"
        >
          Book a Consulting Session
        </a>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-slate-900 dark:border-slate-700">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}
