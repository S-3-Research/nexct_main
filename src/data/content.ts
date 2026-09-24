// Content copied from the supplied NEXCt reference.
export const navigation = [
  {
    href: "#collaboration",
    label: "The collaboration",
  },
  {
    href: "#products",
    label: "Collaboration products",
  },
  {
    href: "#trialchat",
    label: "TrialChat",
  },
] as const;

export const products = [
  {
    tone: "catalyst",
    number: "01",
    kicker: "Clinician-led education + connection",
    name: "Catalyst Connect™",
    description:
      "Equips trusted clinicians to educate patients and caregivers and support informed connections to nearby clinical research opportunities.",
    outcome: "Trusted conversations → informed connections",
  },
  {
    tone: "deploy",
    number: "02",
    kicker: "Research support where care happens",
    name: "Deploy™",
    description:
      "Brings research-ready clinicians and decentralized trial support into community-based care settings.",
    outcome: "Clinical workforce → expanded trial access",
  },
  {
    tone: "insight",
    number: "03",
    kicker: "Patient and clinician perspectives",
    name: "Insight Connect™",
    description:
      "Connects real-world perspectives with PRO, HEOR, survey, and mixed-methods research.",
    outcome: "Lived experience → research insight",
  },
  {
    tone: "trialchat-card",
    number: "04",
    kicker: "AI-enabled education + navigation",
    name: "TrialChat™",
    description:
      "Helps patients and caregivers understand clinical research, prepare questions, and explore relevant opportunities.",
    outcome: "Complex information → clearer next steps",
  },
] as const;

export const partners = [
  {
    tone: "achieve-card",
    kicker: "ACHIEVE · Human infrastructure",
    name: "ACHIEVE",
    description:
      "Activates trusted clinicians to educate patients and caregivers, strengthen research readiness, and connect communities with nearby opportunities.",
    capabilities: [
      "Clinician engagement and education",
      "Community-centered navigation",
      "Research-ready workforce",
    ],
    url: "https://achieveexpertise.com/",
    linkLabel: "Visit ACHIEVE",
  },
  {
    tone: "s3-card",
    kicker: "S-3 Research · Technology infrastructure",
    name: "S-3 Research",
    description:
      "Builds data science and AI-enabled tools that make complex clinical research information more accessible, useful, and actionable.",
    capabilities: [
      "Responsible AI and data science",
      "Clinical trial intelligence",
      "Digital engagement tools",
    ],
    url: "https://www.s-3.io/",
    linkLabel: "Visit S-3 Research",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Align",
    description:
      "Partners begin with a shared research challenge and clear purpose.",
  },
  {
    number: "02",
    title: "Combine",
    description:
      "Clinical expertise, community relationships, and technology work together.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "Shared capabilities become practical tools, education, and connection pathways.",
  },
  {
    number: "04",
    title: "Advance",
    description:
      "Lessons from each project strengthen future collaboration and research access.",
  },
] as const;

export type Product = (typeof products)[number];
export type Partner = (typeof partners)[number];
