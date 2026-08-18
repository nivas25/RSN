/**
 * projects.ts — Portfolio Projects Data Architecture
 * ─────────────────────────────────────────────────────────────
 * Strongly typed project schema for the Work showcase.
 * Easily extensible for adding any number of future projects.
 */

export interface ProjectCard {
  type: 'image' | 'custom';
  url: string;
  alt: string;
  caption?: string;
  badge?: string;
  aspectRatio?: string;
}

export interface ProjectCredit {
  role: string;
  names: string[];
}

export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  client: string;
  year: string;
  title: string;
  description: string;
  readMoreLink?: string;
  externalLink?: string;
  tags: string[];
  cards: ProjectCard[];
  
  // Project detail page fields
  awards?: string[];
  credits?: ProjectCredit[];
  specifications?: ProjectSpecification[];
  links?: ProjectLink[];
  gallery?: ProjectCard[];
}

export const PROJECTS: Project[] = [
  {
    id: 'rekh',
    slug: 'rekh',
    client: 'GENERATIVE AI',
    year: '2026',
    title: 'Rekh',
    description: 'An end-to-end pipeline training a highly authentic, culture-preserving LoRA for FLUX.1-dev to replicate traditional Sanganeri hand-block prints using VLM dataset filtering.',
    readMoreLink: '/work/rekh',
    externalLink: 'https://github.com/nivas25/rekh-sanganeri',
    tags: ['Generative AI', 'LoRA', 'FLUX.1', 'Cultural Preservation'],
    links: [
      { label: 'COMPARISON WEBSITE', url: 'https://nivas25.github.io/rekh-sanganeri/' },
      { label: 'MODEL (HUGGING FACE)', url: 'https://huggingface.co/nivas25/rekh-sanganeri-lora' },
      { label: 'DATASET (HUGGING FACE)', url: 'https://huggingface.co/datasets/nivas25/rekh-sanganeri-dataset' },
      { label: 'SOURCE CODE', url: 'https://github.com/nivas25/rekh-sanganeri' }
    ],
    specifications: [
      { label: 'Base Model', value: 'FLUX.1-dev' },
      { label: 'Architecture', value: 'LoRA v2 (Rank 32, Alpha 32)' },
      { label: 'Dataset', value: '178 hand-curated images' },
      { label: 'Captioning', value: 'Florence-2-large' },
      { label: 'Optimizer', value: 'AdamW 8-bit (bf16)' },
      { label: 'Total Steps', value: '3000' },
      { label: 'Infrastructure', value: 'Modal (1x NVIDIA A100)' }
    ],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/logo.png?updatedAt=1787032210771&tr=w-1200,f-auto,q-auto',
        alt: 'Rekh Sanganeri AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega_lorav2_p9.jpg?updatedAt=1787032267736&tr=w-800,f-auto,q-auto',
        alt: 'Rekh Generative AI Output'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/logo.png?updatedAt=1787032210771&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Sanganeri AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega_lorav2_p9.jpg?updatedAt=1787032267736&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega_lorav2_p5.jpg?updatedAt=1787032267668&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega_lorav2_p15.jpg?updatedAt=1787032266317&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega_dorav1_p3.jpg?updatedAt=1787032262345&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega3_lorav2_p5.jpg?updatedAt=1787032258688&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega2_lorav2_p9.jpg?updatedAt=1787032256481&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Rekh/mega_showdown_images/mega3_base_p0.jpg?updatedAt=1787032253776&tr=w-1600,f-auto,q-auto',
        alt: 'Rekh Generative AI Output 7'
      }
    ]
  },
  {
    id: 'sudriv',
    slug: 'sudriv',
    client: 'VOICE AI',
    year: '2026',
    title: 'Sudriv',
    description: 'Sudriv is a real-time, voice-first AI co-pilot built for television news producers. It turns live breaking-news chaos into calm by allowing producers to naturally speak instructions, which the system safely verifies and instantly syncs across the live broadcast timeline and anchor teleprompters.',
    readMoreLink: '/work/sudriv',
    externalLink: 'https://github.com/nivas25/Sudriv',
    tags: ['Voice AI', 'Real-time WebRTC', 'LLM Agents'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/logo.png?updatedAt=1784555211454&tr=w-1200,f-auto,q-auto',
        alt: 'Sudriv Voice AI Copilot Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/1.png?updatedAt=1785510320984&tr=w-800,f-auto,q-auto',
        alt: 'Sudriv Dashboard Overview'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/logo.png?updatedAt=1784555211454&tr=w-1600,f-auto,q-auto',
        alt: 'Sudriv Voice AI Copilot Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/1.png?updatedAt=1785510320984&tr=w-1600,f-auto,q-auto',
        alt: 'Sudriv Dashboard Overview'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/2.png?updatedAt=1785510320953&tr=w-1600,f-auto,q-auto',
        alt: 'Sudriv Timeline UI'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/3.png?updatedAt=1785510320955&tr=w-1600,f-auto,q-auto',
        alt: 'Sudriv Prompt Management'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Sudriv/4.png?updatedAt=1785510321088&tr=w-1600,f-auto,q-auto',
        alt: 'Sudriv WebRTC Voice UI'
      }
    ]
  },
  {
    id: 'viba',
    slug: 'viba',
    client: 'HEALTHCARE AI',
    year: '2026',
    title: 'Viba',
    description: 'Viba is a voice first clinical workflow automation platform. Designed for hospital ward rounds, it allows doctors to simply speak at the patient\'s bedside. A multi node agentic AI pipeline listens, generates structured SOAP notes, extracts clinical tasks, and safely routes them to the correct hospital departments all in real time.',
    readMoreLink: '/work/viba',
    externalLink: 'https://github.com/nivas25/viba',
    tags: ['Voice AI', 'LangGraph', 'Healthcare', 'FastAPI'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/logo.png?updatedAt=1785827420263&tr=w-1200,f-auto,q-auto',
        alt: 'Viba Healthcare AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/1.png?updatedAt=1785827386517&tr=w-800,f-auto,q-auto',
        alt: 'Viba Dashboard Overview'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/logo.png?updatedAt=1785827420263&tr=w-1600,f-auto,q-auto',
        alt: 'Viba Healthcare AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/1.png?updatedAt=1785827386517&tr=w-1600,f-auto,q-auto',
        alt: 'Viba Dashboard Overview'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/3.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/4.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/5.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/6.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/7.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/8.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 7'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Viba/9.png?tr=w-1600,f-auto,q-auto',
        alt: 'Viba Clinical Workflow 8'
      }
    ]
  },
  {
    id: 'kavach',
    slug: 'kavach',
    client: 'LEGAL TECH AI',
    year: '2026',
    title: 'Kavach',
    description: 'Kavach is an AI-powered legal contract analysis platform tailored for the Indian context. Instead of relying on a single AI model, it orchestrates four specialized agents in an adversarial debate to uncover hidden risks, predatory terms, and compliance issues, delivering a comprehensive, evidence-backed verdict in minutes.',
    readMoreLink: '/work/kavach',
    externalLink: 'https://github.com/nivas25/Kavach',
    tags: ['Multi-Agent AI', 'Next.js 16', 'Qdrant', 'Legal Tech'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/logo.png?updatedAt=1785514040973&tr=w-1200,f-auto,q-auto',
        alt: 'Kavach Legal AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/1.png?updatedAt=1785513842501&tr=w-800,f-auto,q-auto',
        alt: 'Kavach Dashboard Overview'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/logo.png?updatedAt=1785514040973&tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Legal AI Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/1.png?updatedAt=1785513842501&tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/3.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/4.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/5.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/6.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/7.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 7'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Kavach/8.png?tr=w-1600,f-auto,q-auto',
        alt: 'Kavach Multi-Agent Debate 8'
      }
    ]
  },
  {
    id: 'nena',
    slug: 'nena',
    client: 'PEDIATRIC CARE AI',
    year: '2026',
    title: 'Project Nena',
    description: 'Nena is an AI-powered platform that helps parents of neurodivergent children log daily behavioral episodes effortlessly. By utilizing a 90-second voice check-in, the system quietly turns natural conversations into structured clinical notes using the ABC method (Antecedent, Behavior, Consequence). This provides doctors with accurate, actionable clinical data instead of guesswork.',
    readMoreLink: '/work/nena',
    externalLink: 'https://github.com/nivas25/Nena',
    tags: ['AI Assistant', 'Voice AI', 'Healthcare', 'Supabase'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/logo.jpg?updatedAt=1785513136953&tr=w-1200,f-auto,q-auto',
        alt: 'Project Nena Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/1.png?updatedAt=1785513252995&tr=w-800,f-auto,q-auto',
        alt: 'Nena Behavioral Tracking UI'
      }
    ],
    credits: [
      { role: 'Contributors', names: ['Punith BR', 'Manu M', 'Dimpu Kumar'] }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/logo.jpg?updatedAt=1785513136953&tr=w-1600,f-auto,q-auto',
        alt: 'Project Nena Logo'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/1.png?updatedAt=1785513252995&tr=w-1600,f-auto,q-auto',
        alt: 'Nena Behavioral Tracking UI'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena Dashboard Analytics'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/3.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena ABC Visualizations'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/4.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena AI Chat Mode'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/5.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena Voice Check-in'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/6.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena PDF Reporting'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Nena/7.png?tr=w-1600,f-auto,q-auto',
        alt: 'Nena Doctor Dashboard'
      }
    ]
  },
  {
    id: 'substarter',
    slug: 'substarter',
    client: 'CREATOR ECONOMY',
    year: '2025',
    title: 'SubStarter',
    description: 'SubStarter is an end-to-end community monetization and automation engine. It empowers creators to sell recurring access to private Telegram and Discord communities with zero manual back-office overhead. The platform handles the complete subscriber journey from storefront creation and secure Razorpay checkout to autonomous bot-driven role assignment and automated access revocation.',
    readMoreLink: '/work/substarter',
    externalLink: 'https://github.com/nivas25/substarter',
    tags: ['SaaS', 'Next.js', 'Telegram Bot', 'Razorpay'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/1.png?updatedAt=1785825607896&tr=w-1200,f-auto,q-auto',
        alt: 'SubStarter Creator Studio'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/2.png?tr=w-800,f-auto,q-auto',
        alt: 'SubStarter Automation'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/1.png?updatedAt=1785825607896&tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/3.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/4.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/5.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/6.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/7.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 7'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/8.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 8'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/9.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 9'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/10.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 10'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/11.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 11'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/12.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 12'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/13.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 13'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/SubStarter/14.png?tr=w-1600,f-auto,q-auto',
        alt: 'SubStarter Gallery 14'
      }
    ]
  },
  {
    id: 'avidha',
    slug: 'avidha',
    client: 'AI CREATIVE STUDIO',
    year: '2026',
    title: 'Avidha',
    description: 'Avidha is a highly optimized, low cost digital marketing platform offering zero logistics photo shoots. It eliminates the need to ship products or book expensive studios by creating high end, hyper realistic visual campaigns entirely digitally saving brands significant time and money while delivering flawless imagery.',
    readMoreLink: '/work/avidha',
    externalLink: 'https://avidha.vercel.app',
    tags: ['Frontend', 'AI Image Generation', 'UI/UX', 'Digital Marketing'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/1.png?updatedAt=1785828681249&tr=w-1200,f-auto,q-auto',
        alt: 'Avidha AI Creative Studio'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/2.png?tr=w-800,f-auto,q-auto',
        alt: 'Avidha Realistic Imagery'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/1.png?updatedAt=1785828681249&tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/3.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/4.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/5.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/6.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/Avidha/7.png?tr=w-1600,f-auto,q-auto',
        alt: 'Avidha Gallery 7'
      }
    ]
  },
  {
    id: 'pick-pocket-detection',
    slug: 'pick-pocket-detection',
    client: 'IOT & SECURITY',
    year: '2025',
    title: 'Pick Pocket Detection',
    description: 'An intelligent security system designed to detect and prevent theft in crowded environments. By leveraging IoT and real-time behavioral analysis, the platform identifies suspicious movements and alerts users instantly, providing a seamless layer of personal security and peace of mind.',
    readMoreLink: '/work/pick-pocket-detection',
    externalLink: 'https://sites.google.com/view/pick-pocket-detection',
    tags: ['IoT', 'Security', 'Behavioral Analysis', 'Real-time'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/IoT_PP/1.png?updatedAt=1785831217864&tr=w-1200,f-auto,q-auto',
        alt: 'Pick Pocket Detection System'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/IoT_PP/2.png?tr=w-800,f-auto,q-auto',
        alt: 'Pick Pocket Detection Interface'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/IoT_PP/1.png?updatedAt=1785831217864&tr=w-1600,f-auto,q-auto',
        alt: 'Pick Pocket Detection System Overview'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/IoT_PP/2.png?tr=w-1600,f-auto,q-auto',
        alt: 'Pick Pocket Detection Interface'
      }
    ]
  },
  {
    id: 'mockmarket',
    slug: 'mockmarket',
    client: 'FINTECH',
    year: '2025',
    title: 'MockMarket',
    description: 'A full-stack mock trading platform designed to simulate real-world financial markets. It features a high-performance Flask backend managing market data, indices, order routing, and websockets, paired with a dynamic Next.js 16 frontend that offers real-time dashboards, stock analysis, sentiment news, and instant order execution.',
    readMoreLink: '/work/mockmarket',
    externalLink: 'https://github.com/nivas25/MockMarket',
    tags: ['Flask', 'Next.js', 'WebSockets', 'FinTech'],
    cards: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/01.jpg?updatedAt=1785827906129&tr=w-1200,f-auto,q-auto',
        alt: 'MockMarket Trading Dashboard'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/02.jpg?tr=w-800,f-auto,q-auto',
        alt: 'MockMarket Order Execution'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/01.jpg?updatedAt=1785827906129&tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 1'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/02.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 2'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/03.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 3'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/04.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 4'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/05.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 5'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/06.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 6'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/07.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 7'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/08.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 8'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/09.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 9'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/10.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 10'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/11.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 11'
      },
      {
        type: 'image',
        url: 'https://ik.imagekit.io/nivas25/MockMarket/12.jpg?tr=w-1600,f-auto,q-auto',
        alt: 'MockMarket Gallery 12'
      }
    ]
  }
];
