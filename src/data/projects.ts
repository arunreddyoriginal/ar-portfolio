// src/data/projects.ts
// Single source of truth for all project data
// Used by: Projects section, case study pages, sitemap

export type ProjectCategory = 'Workflow Automation' | 'Agentic AI' | 'Infrastructure';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  solution: string;
  architecture?: string; // Optional deep-dive for complex projects
  impact: string;
  stack: string[];
  whatICanBuild: string[];
  liveUrl?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'ai-cold-outreach-system',
    title: 'AI Cold Outreach System',
    category: 'Workflow Automation',
    tagline: 'End-to-end sales automation: research → personalised email → reply intelligence',
    problem:
      'Sales teams spend 3–5 hours per day manually researching leads, writing personalised emails, and monitoring inboxes. At 50 leads per day, that pace is unsustainable — and yet most companies still operate this way.',
    solution:
      'A three-part automation system. The Outreach Agent takes Perplexity-researched lead data, validates and deduplicates it, then uses Llama 3.3 70B with a strict 9-rule prompt (80–120 word limit, 15+ banned clichés, quality gate before send) to write emails that read like a human wrote them — with a 3-minute spam-prevention delay between sends. The Lead Intake Funnel accepts a webhook with a company website, scrapes it in real time, generates a 2-sentence personalised pitch referencing their actual business, and sends it in under 15 seconds. The Reply Monitor polls Gmail every 5 minutes, detects replies, runs AI sentiment analysis (positive/negative/neutral + intent classification), updates the Supabase database, and sends a formatted alert with a suggested next step.',
    architecture:
      'Three independent n8n workflows connected via Supabase as the shared data layer. Workflow 1 (Outreach v2): Manual trigger → Perplexity data parser → loop → validate/dedup → Groq LLM email writer → quality check → Supabase log → SMTP send → 3-min delay → loop. Workflow 2 (Lead Intake): Webhook → email/URL validation → HTTP scrape → HTML extraction → content check → Groq LLM pitch → Supabase store → email send → webhook response. Workflow 3 (Reply Monitor): Gmail trigger (5-min poll) → reply filter → Supabase lookup → status check → Supabase update → Groq sentiment analysis → JSON parse → Supabase update → email alert.',
    impact:
      'Fully automated outreach pipeline that runs 24/7. Zero manual email writing. Reply intelligence delivered to inbox within 5 minutes of a prospect responding.',
    stack: ['n8n', 'Supabase', 'Groq', 'Llama 3.3 70B', 'Gmail API', 'SMTP', 'JavaScript'],
    whatICanBuild: [
      'Full SDR automation stack for any industry — real estate, SaaS, agencies',
      'CRM-connected outreach with automatic follow-up sequences (Day 1, Day 4, Day 7)',
      'Reply intelligence dashboard showing pipeline health and conversion rates',
      'Industry-specific personalisation layers using company website context',
      'Multi-channel outreach (email + LinkedIn message) with unified tracking',
    ],
    featured: true,
    order: 1,
  },
  {
    slug: 'conversational-bi-dashboard',
    title: 'Conversational BI Dashboard',
    category: 'Agentic AI',
    tagline: 'Ask your data questions in plain English. Get live charts in seconds.',
    problem:
      'CEOs and operations leads wait hours — sometimes days — for data answers. BI analysts are always backed up. Spreadsheet exports are stale the moment they are created. The bottleneck is the translation layer between a business question and a SQL query.',
    solution:
      'A natural language interface over business data. You type "Show me Q3 revenue by region broken down by product" and receive an interactive chart in seconds — no SQL, no analyst, no waiting. A FastAPI backend interprets the natural language query using Gemini API, generates the correct SQL, executes it against the database, and returns structured data. The Next.js frontend renders charts dynamically based on query results.',
    impact:
      'Any stakeholder can get data answers instantly. The data team gets their calendar back. One post about this system reached 2.9k LinkedIn impressions in a week from organic reach alone.',
    stack: ['Next.js', 'FastAPI', 'Gemini API', 'SQLite', 'Python', 'REST API'],
    whatICanBuild: [
      'NL query layer over your existing database (PostgreSQL, MySQL, BigQuery, AlloyDB)',
      'Role-based dashboards where each team member asks questions relevant to their work',
      'Automated weekly and monthly report generation triggered by a plain English prompt',
      'Multi-source data aggregation — query CRM + ops + finance in a single question',
      'Executive Q&A bot that answers from live business data without a BI analyst',
    ],
    featured: true,
    order: 2,
  },
  {
    slug: 'support-ticket-triager',
    title: 'Support Ticket Triager',
    category: 'Agentic AI',
    tagline: 'AI agent that classifies, prioritises, and drafts replies in under 2 seconds',
    problem:
      'Support teams manually read every incoming ticket, decide priority, and draft a reply. At scale, this creates bottlenecks, inconsistent prioritisation, and slow response times — especially for P0 issues that need immediate escalation.',
    solution:
      'A Google ADK-based AI agent with three specialised tools: a classifier (P0–P3 priority), a category detector (billing, access, feature, bug), and a reply drafter. The agent receives a support message, uses Gemini 2.5 Flash to reason through priority and category simultaneously, and produces a drafted reply in the correct tone. Deployed on Google Cloud Run as a live, publicly accessible API endpoint.',
    impact:
      'Tested live: "I\'ve been charged twice and can\'t access my dashboard" → classified P0-Critical, billing category, personalised empathetic reply drafted in under 2 seconds. Consistent prioritisation across 100% of tickets regardless of volume or time of day.',
    stack: ['Google ADK', 'Gemini 2.5 Flash', 'Cloud Run', 'Vertex AI', 'Python'],
    whatICanBuild: [
      'Support triage for Zendesk, Freshdesk, or any email-based support system',
      'Automatic escalation routing to the right team member by issue type and severity',
      'Auto-reply for the top 20 most common queries, with human review queue for edge cases',
      'SLA monitoring agent that flags at-risk tickets before breach',
      'Support analytics pipeline — trends, CSAT prediction, volume forecasting',
    ],
    liveUrl: 'https://adk-default-service-name-669856308263.us-central1.run.app',
    featured: true,
    order: 3,
  },
  {
    slug: 'stackscout',
    title: 'StackScout — Sales Intelligence Agent',
    category: 'Agentic AI',
    tagline: 'Detects a company\'s tech stack, writes a personalised cold email in 10 seconds',
    problem:
      "Sales teams send generic outreach to companies without knowing their technical environment. A company running Shopify needs a completely different pitch than one running a custom React app. Generic emails get ignored. Personalised ones get replies.",
    solution:
      'An ADK agent connected to a custom-built MCP server via the Model Context Protocol. The MCP server visits any URL and detects the CMS, frameworks, CDNs, and analytics tools from live HTML and HTTP headers. The agent receives this structured data and generates a 3-sentence personalised cold email referencing the prospect\'s specific stack.',
    architecture:
      'Two independent Cloud Run services. Service 1 (MCP Server): FastMCP Python server exposing one tool — detect_tech_stack(url). Reads live HTTP response headers and HTML to detect technologies. Service 2 (ADK Agent): Connects to the MCP server via StreamableHTTP, calls the tool, passes results to Gemini 2.5 Flash which writes the personalised email. The separation of concerns is textbook MCP — the reasoning layer never knows how detection works.',
    impact:
      'Any company URL becomes a personalised outreach email in 10 seconds. Sales teams can prospect at scale with the specificity that only manual research previously enabled.',
    stack: ['Google ADK', 'FastMCP', 'Cloud Run', 'Gemini 2.5 Flash', 'Python', 'BeautifulSoup'],
    whatICanBuild: [
      'Competitive intelligence agent that monitors competitors\' technology choices over time',
      'Vendor discovery pipeline for procurement teams researching supplier tech capabilities',
      'ABM enrichment layer that scores and personalises outreach by tech stack',
      'API integration auditor — identifies which third-party services a company uses',
      'Tech stack alerting system — notified when a target account changes their stack',
    ],
    featured: false,
    order: 4,
  },
  {
    slug: 'startupiq',
    title: 'StartupIQ — AlloyDB Natural Language Analytics',
    category: 'Agentic AI',
    tagline: 'Ask questions about your business data in plain English. Get SQL results.',
    problem:
      'Non-technical stakeholders cannot query their own data. Business analysts spend significant time translating questions into SQL. The gap between a business question and a database answer costs hours every week.',
    solution:
      'A natural language SQL interface powered by AlloyDB AI. The system uses AlloyDB\'s built-in embedding() function with text-embedding-005 to convert natural language questions into SQL, executes the query against the database, and returns human-readable results. Built with a custom dataset and custom schema — no lab defaults.',
    architecture:
      'AlloyDB with google_ml_integration and pgvector extensions enabled. The embedding() function generates 768-dimensional vectors inside SQL. The ai.if() function performs LLM-based logic checks in SQL queries — the intelligence lives in the database layer itself. FastAPI on Cloud Run handles the application layer. The 1 - (vector <=> query_vector) operator computes cosine similarity for semantic search.',
    impact:
      'Non-technical stakeholders can query business data directly. No SQL knowledge required. Answers in seconds, not hours.',
    stack: ['AlloyDB', 'Vertex AI', 'text-embedding-005', 'pgvector', 'FastAPI', 'Cloud Run', 'Python'],
    whatICanBuild: [
      'NL query interface for any AlloyDB or PostgreSQL database',
      'Executive Q&A bot that answers directly from live operational data',
      'Automated KPI reporting triggered by plain-English questions',
      'Semantic search over business records — find similar customers, products, or cases',
      'Anomaly detection system using vector similarity to flag unusual patterns',
    ],
    featured: false,
    order: 5,
  },
  {
    slug: 'pfs-adaptive-learning',
    title: 'PFS 2.0 — Adaptive Learning Engine',
    category: 'Agentic AI',
    tagline: 'Multi-agent system that diagnoses knowledge gaps and builds personalised study plans',
    problem:
      "India produces 1.5 million engineering graduates per year. 83% remain unemployed. The gap isn't content availability — it's directed, personalised learning momentum. Students study what they already know and skip their actual weak spots because no system has diagnosed what those are.",
    solution:
      'A multi-agent ADK system with a RootOrchestrator coordinating three specialised agents: a DiagnosticAgent that administers targeted assessments to surface knowledge gaps, a PrerequisiteAgent that traces root causes (fails Topic C? the root gap is actually Topic A), and a ContentAgent that generates a day-by-day personalised study plan. Backed by AlloyDB with a prerequisite graph stored as UUID arrays, a custom MCP question-bank server, and a FastAPI deployment on Cloud Run.',
    architecture:
      'RootOrchestrator → DiagnosticAgent (assesses, finds gaps) → PrerequisiteAgent (traces prerequisite graph in AlloyDB) → ContentAgent (generates personalised plan). MCP question-bank server exposes 3 tools via FastMCP. AlloyDB schema: 5 tables (students, subjects, topics, questions, prerequisite_graph). The prerequisite graph enables multi-hop tracing: Topic C fails → Topic B is prerequisite → Topic A is root. Submitted to Google Cloud Gen AI Academy APAC 2026 Hackathon.',
    impact:
      'Students go from "I don\'t know what I don\'t know" to a structured personalised study path in one session. Architecture designed to handle any learning domain — not just engineering.',
    stack: ['Google ADK', 'Gemini 2.5 Flash', 'AlloyDB', 'FastMCP', 'FastAPI', 'Cloud Run', 'Vertex AI', 'Python'],
    whatICanBuild: [
      'Employee onboarding systems that adapt to what each person already knows',
      'Customer education platforms with intelligent progression and prerequisite mapping',
      'Skills gap analysis tools for HR teams — identify training priorities across teams',
      'Sales enablement training that routes itself based on rep performance data',
      'Compliance training that adapts depth based on role and prior knowledge',
    ],
    featured: false,
    order: 6,
  },
  {
    slug: 'voice-assistant',
    title: 'Voice Personal Assistant Agent',
    category: 'Agentic AI',
    tagline: 'AI that speaks — processes voice input, reasons, responds with natural-sounding audio',
    problem:
      'Hands-free operations, voice-first interfaces, and accessibility solutions require AI that can speak and listen — not just read and type. Most AI integrations stop at text.',
    solution:
      'A conversational voice agent built with Twilio for telephony and ElevenLabs for neural text-to-speech. The system processes spoken input, passes it to an LLM for reasoning, and responds with natural-sounding voice output — creating a phone conversation with an AI.',
    impact:
      'Proof of concept for voice-native AI interfaces. Demonstrated full audio loop: voice in → LLM reasoning → natural voice out.',
    stack: ['Twilio', 'ElevenLabs', 'Python', 'LLM API'],
    whatICanBuild: [
      'AI phone receptionist for businesses — handles after-hours calls, books appointments',
      'Voice-activated internal assistant for warehouse, field, or factory teams',
      'Automated appointment booking and confirmation via phone call',
      'Customer support IVR replacement that holds natural conversations instead of menu trees',
      'Voice-first data entry for industries where typing is impractical',
    ],
    featured: false,
    order: 7,
  },
  {
    slug: 'contentsystem',
    title: 'ContentSystem — LinkedIn Ghostwriting Agent',
    category: 'Agentic AI',
    tagline: '4-agent pipeline that writes LinkedIn posts in the founder\'s authentic voice',
    problem:
      "Founders and executives know they need to post consistently on LinkedIn but don't have time to write. Generic ghostwriters don't capture authentic voice. AI tools produce obviously AI-sounding content that undermines credibility.",
    solution:
      'A 4-agent Claude Code pipeline. The Voice Extractor analyses sample posts to extract vocabulary tier, sentence rhythm, punctuation patterns, and opening/closing habits. The Strategist selects content pillar and hook type based on LinkedIn algorithm signals (dwell time optimisation, "see more" fold at ~140 chars, comment-driving CTAs). The Writer drafts the post matching the extracted voice fingerprint. The Editor quality-gates against 30+ banned phrases and algorithm best practices. Content is delivered directly to Notion via MCP integration.',
    impact:
      'A founder can brief the system in 2 minutes and receive a publication-ready LinkedIn post 5 minutes later that sounds like them — not like AI.',
    stack: ['Claude Code', 'Claude API', 'Notion MCP', 'Python', 'Multi-agent orchestration'],
    whatICanBuild: [
      'Brand voice AI for content teams — any writer can produce on-brand content',
      'Multi-platform content repurposing pipeline — one brief becomes LinkedIn post, tweet, newsletter',
      'Thought leadership automation for executive teams at scale',
      'Newsletter generation from weekly meeting notes or internal updates',
      'Content calendar automation with performance-based topic selection',
    ],
    featured: false,
    order: 8,
  },
  {
    slug: 'n8n-claw-stack',
    title: 'Self-Hosted AI Agent Infrastructure',
    category: 'Infrastructure',
    tagline: 'Full self-hosted automation stack — zero SaaS costs, full data control',
    problem:
      'Most AI automation platforms charge per workflow execution. Companies with high-volume automation needs get penalised as they scale. Cloud SaaS tools also expose business data to third-party servers.',
    solution:
      'A fully self-hosted AI agent infrastructure running on a single machine: n8n for automation orchestration, Supabase for database and auth, SearXNG for private web search, Kong API gateway for routing, and ngrok for secure external webhook tunnels. Resolved complex integration challenges including Kong API crashes, WSL2/Windows compatibility, MCP server webhook instability, and language contamination in multi-language environments.',
    impact:
      'Zero per-execution costs. All data stays internal. Full operational control. Equivalent capability to expensive SaaS stacks at the cost of server hardware.',
    stack: ['n8n', 'Supabase', 'SearXNG', 'Kong', 'ngrok', 'Docker', 'WSL2'],
    whatICanBuild: [
      'Complete self-hosted automation infrastructure for data-sensitive industries',
      'Private AI search infrastructure that never sends queries to Google',
      'Enterprise automation setup with custom security and access controls',
      'Migration from expensive automation tools (Zapier, Make) to self-hosted n8n',
      'High-volume automation pipelines with zero per-execution pricing',
    ],
    featured: false,
    order: 9,
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] => projects.map((p) => p.slug);
