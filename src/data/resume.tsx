import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dev Sharma",
  initials: "DS",
  url: "https://devsharma.live",
  location: "India",
  locationLink: "#",
  description:
    "Software Engineer generalist, building systems that empower people and teams. Exploring AI, Cryptography and fundamentally Distributed Systems.",
  summary:
    "Software Engineer with expertise in Golang, Rust, Postgres, ClickHouse, Kafka, AWS, and distributed systems. Previously at WildCard, IntelXLabs, NodeOps, Zomato, and Airbnb. Built scalable backend systems, analytics platforms, and trading infrastructure. Passionate about AI, blockchain, and creating systems that empower people and teams.",
  avatarUrl: "/me.png",
  skills: [
    "Golang",
    "Rust",
    "Python",
    "Kubernetes",
    "Docker",
    "AWS",
    "PostgreSQL",
    "Redis",
    "ClickHouse",
    "Kafka",
    "MongoDB",
    "gRPC",
    "TypeScript",
    "Java",
    "React",
    "Next.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cryptus-neoxys",
        icon: Icons.github,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://resume.devsharma.live/",
        icon: Icons.globe,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cryptus-neoxys/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/cryptus_neoxys",
        icon: Icons.x,

        navbar: true,
      },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "WildCard",
      href: "https://wildcard.com",
      badges: [],
      location: "Dubai, UAE — Remote",
      title: "SWE - Backend",
      logoUrl: "/wildcard.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Engineered backend systems and infrastructure to support scalable trading platforms. Designed and architected the Telegram bot interface for traders on FOGO, integrating social engagement and gamification features. Developed the Telegram interface for Crypto Perpetual Futures and Spot trading on Ambient FOGO's Solana-based DEX (currently in preview). Collaborated with an exceptional team to deliver innovative solutions in a fast-paced environment.",
    },
    {
      company: "IntelXLabs",
      href: "https://intelxlabs.com",
      badges: [],
      location: "Bengaluru, IN — Remote",
      title: "Software Engineer",
      logoUrl: "/intelxlabs.png",
      start: "Jul 2024",
      end: "Jun 2025",
      description:
        "Designed and developed the analytics systems to serve reports, processing over 100Mn+ rows, enabling granular decision making. Migrated analytics warehouse from Redshift to ClickHouse, migrated ETLs to CDC pipelines, to enable real-time analytics on application metrics. Developed code guidelines for integrating external services, improving error handling, reducing bugs and incidents. Set up and integrated the Monitoring and Observability for the entire stack, reducing issue detection time by 50%. Designed and developed the affiliate referral systems, responsible for bringing in over 60% users. Contributed significantly to scaling HaaNaa from 0 to 2M users in <3 months, supporting its rise to #1 app on the Apple App Store in its category.",
    },
    {
      company: "NodeOps",
      href: "https://nodeops.xyz",
      badges: [],
      location: "Bengaluru, IN — Remote",
      title: "SWE - Backend",
      logoUrl: "/nodeops.png",
      start: "Mar 2024",
      end: "Jul 2024",
      description:
        "Designed and developed the Orders and Plans service, improving robustness and reliability of purchase and deployment flows. Implemented multi-chain integration for HyChain, ORAI, XAI on the NodeOps 1-click platform. Upgraded in-app AI chat with RAG architecture using LangChain, improving response relevance by 35% based on user feedback. Enhanced flagship features 'TryIt', 'Playground' with AI Chat improving cross-channel user engagement metrics by 22%.",
    },
    {
      company: "Zomato",
      href: "https://zomato.com",
      badges: [],
      location: "Gurugram, IN",
      title: "Software Development Engineer (SDE 1)",
      logoUrl: "/zomato.png",
      start: "Jul 2023",
      end: "Feb 2024",
      description:
        "Part of the Ads tech team, responsible for improving Ads relevance and delivery. Designed and developed user Ads targeting and feedback systems. Worked closely with the business and product teams to implement products increasing Ads Revenue upwards of 4%. Led and implemented tech stability, optimisation, and resilience initiatives, across the Ads tech stack.",
    },
    {
      company: "Airbnb",
      href: "https://airbnb.com",
      badges: [],
      location: "Bengaluru, IN — Remote",
      title: "Software Engineer Intern",
      logoUrl: "/airbnb.png",
      start: "Jan 2023",
      end: "Jul 2023",
      description:
        "Built a highly-scalable backfill system for Airbnb's Central Auditing Service, enabling on-demand re-ingestion of millions of events. Increased system resilience and data isolation with Apache Flink-based stream separation, enabling 99.999% data consistency across auditing logs.",
    },
  ],
  education: [
    {
      school: "Vellore Institute Of Technology",
      href: "https://vit.ac.in",
      degree: "B. Tech Computer Science and Engineering (CGPA: 9.17/10)",
      logoUrl: "/vit.png",
      start: "Jul 2019",
      end: "May 2023",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
