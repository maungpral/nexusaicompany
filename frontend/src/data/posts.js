export const posts = [
  {
    id: 1,
    slug: "future-of-blockchain-powered-ai",
    title: "The Future of Blockchain-Powered AI",
    author: "Maya Chen",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=60",
    date: "2025-06-15",
    tags: ["AI", "Blockchain"],
    cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=60",
    thumb: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=60",
    excerpt:
      "As organizations accelerate adoption of AI agents, the need for transparency, provenance, and verifiable trust grows urgent. Blockchain technologies offer an immutable substrate for securing AI pipelines and enabling trustworthy automation at scale.",
    externalLinks: [
      { label: "Ethereum data availability", url: "https://ethereum.org/en/developers/docs/data-availability/" },
      { label: "Agent safety patterns", url: "https://research.mozilla.org/ai/safety/" }
    ],
    content: [
      "The enterprise AI landscape is shifting from experimental prototypes to production-grade, autonomous agents. Yet with autonomy comes risk: who verifies decisions, and how are outcomes audited?",
      "Blockchain introduces an essential counterweight. Its append-only logs and cryptographic guarantees ensure that every critical AI action can be traced and verified. For high-impact operations, enterprises now record agent activities on-chain, attach oracles for verifiable data inputs, and apply tiered risk controls to contract execution.",
      "Practical applications are already materializing: automated reconciliation in financial operations, tamper-proof attestations across global supply chains, and AI-driven compliance workflows with immutable audit trails. Together, these systems establish a foundation for trustable, accountable automation."
    ],
    images: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=60"
    ]
  },
  {
    id: 2,
    slug: "decentralized-ai-enterprise",
    title: "Decentralized AI in the Enterprise",
    author: "Arjun Patel",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60",
    date: "2025-05-28",
    tags: ["AI", "Privacy"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    excerpt:
      "Centralized AI architectures expose enterprises to data leakage, regulatory risk, and vendor lock-in. Decentralized AI, leveraging federated learning, secure enclaves, and zero-knowledge proofs, provides a new model for collaboration without compromising privacy.",
    externalLinks: [
      { label: "Federated Learning", url: "https://ai.googleblog.com/2017/04/federated-learning-collaborative.html" },
      { label: "Zero-Knowledge proofs", url: "https://ethereum.org/en/developers/docs/scaling/zk-rollups/" }
    ],
    content: [
      "Enterprises are recognizing that siloed AI initiatives cannot keep pace with multi-party ecosystems such as supply chains, financial networks, and healthcare consortia. Yet pooling sensitive datasets into a single repository is both impractical and non-compliant.",
      "Decentralized AI frameworks solve this by enabling organizations to collaborate without sharing raw data. Gradients, encrypted updates, or zero-knowledge proofs are exchanged instead, preserving confidentiality while still generating collective intelligence.",
      "Operational patterns include fraud detection across subsidiaries, industry-wide demand forecasting, and secure cross-border compliance reporting. Endpoints are hardened with attestation, while ZK protocols validate adherence to policy without disclosing proprietary inputs."
    ],
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=60"
    ]
  },
  {
    id: 3,
    slug: "smart-contracts-ml",
    title: "Smart Contracts × Machine Learning: Design Patterns",
    author: "Sofia Martinez",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=256&q=60",
    date: "2025-04-19",
    tags: ["Smart Contracts", "ML"],
    cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=60",
    thumb: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60",
    excerpt:
      "Smart contracts are deterministic by design, while machine learning models operate probabilistically. Bridging the two domains requires robust integration patterns that safeguard guarantees without stifling intelligence.",
    externalLinks: [
      { label: "Chainlink CCIP", url: "https://chain.link/ccip" },
      { label: "OpenAI function calling", url: "https://platform.openai.com/docs/guides/function-calling" }
    ],
    content: [
      "The tension between deterministic execution and probabilistic inference is one of the central design challenges of blockchain-AI integration. Smart contracts cannot tolerate ambiguity, yet real-world AI models cannot operate without it.",
      "Best-practice architectures therefore keep machine learning computations off-chain. Models generate predictions externally, cryptographically sign their outputs, and pass them back to contracts for deterministic verification. Contracts then enforce allow-listed actions and apply circuit breakers for high-risk decisions.",
      "This architecture enables AI-driven systems — such as credit scoring, market forecasting, or supply chain anomaly detection — to integrate with on-chain logic while preserving auditability and trust."
    ],
    images: []
  },
  {
    id: 4,
    slug: "ethical-ai-on-chain",
    title: "Ethical AI Development — On-Chain Accountability",
    author: "Lena Novak",
    avatar: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=256&q=60",
    date: "2025-03-03",
    tags: ["Ethics", "Governance"],
    cover: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=1600&q=60",
    thumb: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=60",
    excerpt:
      "As AI systems make consequential decisions, ethical oversight is no longer optional. By anchoring governance on-chain, organizations can embed accountability directly into the digital substrate.",
    externalLinks: [
      { label: "NIST AI Risk Management", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    content: [
      "Bias, opacity, and lack of accountability remain critical barriers to safe AI deployment. Traditional ethics frameworks rely on voluntary compliance, which is difficult to enforce at scale.",
      "On-chain accountability mechanisms introduce enforceable governance. Immutable decision logs provide forensic traceability, DAOs act as community-driven ethics councils, and governance tokens enable structured oversight on high-impact models.",
      "Enterprises adopting these practices can track data lineage, map risks to explicit controls, and design reproducible AI pipelines that regulators, auditors, and end-users can independently verify. This transforms AI ethics from abstract aspiration into a verifiable operational discipline."
    ],
    images: []
  }
]
