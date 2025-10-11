import React from "react";
import { Cpu, Brain, LineChart } from "lucide-react";

export default function AI() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">AI Solutions</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Harness cutting-edge Artificial Intelligence to automate,
          personalize, and accelerate your business.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Feature
          icon={<Cpu className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="AI Automation"
          desc="Integrate AI agents to streamline workflows, reduce costs, and increase efficiency."
        />
        <Feature
          icon={<Brain className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Cognitive Intelligence"
          desc="Deploy NLP, computer vision, and generative AI tailored for your industry."
        />
        <Feature
          icon={<LineChart className="h-6 w-6 text-indigo-600 dark:text-emerald-400" />}
          title="Predictive Analytics"
          desc="Leverage data-driven forecasting and decision intelligence to stay ahead."
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="btn btn-primary px-6 py-3 text-lg font-medium"
        >
          Explore AI with NexusAI
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
