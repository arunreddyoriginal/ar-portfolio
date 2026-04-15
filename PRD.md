# PRD — arunreddy.co
## Product Requirements Document
**Version:** 1.0 | **Author:** Arun Reddy | **Status:** Ready to Build

---

## 1. EXECUTIVE SUMMARY

**What we're building:** A premium AI services website and sales machine for Arun Reddy, positioned as an AI Workflow & Agentic AI Architect based in Hyderabad targeting global clients (US/UK focus).

**What it is NOT:** A portfolio page. A resume website. A "look at my projects" showcase.

**What it IS:** A conversion-optimised sales funnel disguised as a portfolio. Every pixel serves one goal — turning a visitor into a discovery call booking or a direct enquiry.

**Primary CTA:** Contact form submission (project enquiry)
**Secondary CTA:** Scroll deeper into case studies

**Target visitor:** Founder, CEO, Operations Lead, or Head of Sales at a 10-200 person company who is bleeding time on manual processes and doesn't know agentic AI exists yet.

---

## 2. BRAND IDENTITY

| Attribute | Decision |
|---|---|
| Brand name | arunreddy.co |
| Positioning | AI Workflow & Agentic AI Architect |
| Tone | Direct. Confident. No fluff. Like a smart friend who notices your operational waste. |
| Design | Clean precision minimal — luxury consulting firm meets Y Combinator startup |
| Color mode | Light default + full dark mode toggle |
| Primary accent | Electric blue `#0057FF` |
| Background (light) | `#FAFAFA` with white cards |
| Background (dark) | `#0A0A0F` with `#111118` cards |
| Heading font | Instrument Serif (italic display moments) + Plus Jakarta Sans (bold weight) |
| Body font | Plus Jakarta Sans |
| Motion | Surgical — scroll-triggered reveals, no gratuitous animation |

---

## 3. SITEMAP & PAGE STRUCTURE

### Single-page architecture with deep-link anchors

```
/ (Home — full scroll experience)
  ├── #hero
  ├── #problem
  ├── #services  
  ├── #projects
  ├── #process
  ├── #industries
  ├── #faq
  └── #contact

/projects/[slug] (Individual case study pages — 9 total)
```

### Navigation
- Sticky minimal nav: logo left, links right (Services · Projects · Process · Contact)
- Mobile: hamburger → slide-in drawer
- Dark/light toggle in nav
- "Let's talk" CTA button always visible in nav

---

## 4. SECTION SPECIFICATIONS

---

### 4.1 HERO SECTION

**Goal:** In 5 seconds the visitor knows exactly what Arun does and why they should care.

**Headline (H1):**
> "I build AI systems that eliminate your most expensive bottlenecks."

**Subheadline:**
> Most businesses waste 20+ hours a week on work that doesn't need a human brain. I build the automation infrastructure that handles it — from n8n workflow pipelines to multi-agent AI systems that reason, decide, and act on their own.

**Social proof strip (below CTA):**
> Built with · Google Cloud · Gemini · Claude · n8n · ADK · AlloyDB

**CTAs:**
- Primary: "See the work →" (scrolls to #projects)
- Secondary: "Let's talk" (scrolls to #contact)

**Visual element:**
- Animated terminal/code block showing a live pipeline run (CSS animation, no external deps)
- OR: Abstract flow diagram showing data → AI → action loop

**Trust signals below fold:**
- "Hackathon finalist — Google Cloud Gen AI Academy APAC 2026"
- "9 production systems shipped"
- "Google Cloud · Gemini · Claude · ADK · AlloyDB certified exposure"

---

### 4.2 PROBLEM STATEMENT SECTION

**Goal:** Make the CEO feel seen before we offer anything.

**Headline:** "Your team is solving problems that shouldn't need humans."

**Three pain cards:**

1. **"Your sales team spends 3+ hours a day on prospecting"**
   Every rep manually researches leads, writes personalised emails, and tracks replies in a spreadsheet. While they're doing that, your pipeline is stalling.

2. **"Your data sits in 4 tools and nobody can see the full picture"**
   Questions that should take 10 seconds take a half-day of back-and-forth between teams, spreadsheet exports, and a BI analyst who's always backed up.

3. **"Your support team is drowning in repetitive tickets"**
   80% of support volume is the same 20 questions. Every ticket still gets manually read, triaged, and routed as if it's the first time you've seen it.

**Transition line:** "These aren't staffing problems. They're systems problems. And systems problems have systems solutions."

---

### 4.3 SERVICES SECTION

**Goal:** Make it easy to understand what to buy. Two clear tracks.

**Headline:** "Two ways I work with you"

---

**Track 1: AI Workflow Automation**
*For businesses that need fast, reliable automation without custom AI reasoning*

Best for: SMBs, internal ops teams, marketing/sales workflows
Delivery: 3–7 days
Starting from: $500

What's included:
- Workflow design & architecture
- n8n pipeline build (or compatible automation platform)
- Database integration (Supabase, Airtable, Sheets)
- Email/Slack/CRM connectivity
- Testing, deployment, documentation

Example use cases:
- Lead intake → AI research → personalised email in 15 seconds
- Gmail monitoring → AI reply sentiment → team alert
- Form submission → CRM sync → onboarding sequence trigger

---

**Track 2: Agentic AI Systems**
*For businesses that need AI that can reason, make decisions, and act across multiple steps*

Best for: Complex ops workflows, multi-step reasoning, long-running processes
Delivery: 1–3 weeks
Starting from: $2,000

What's included:
- Multi-agent architecture design
- ADK / Python agent development
- LLM integration (Gemini, Claude)
- Database + vector store setup (AlloyDB, Supabase)
- MCP server development for external tool connectivity
- Cloud Run deployment + API layer (FastAPI)
- Full documentation + handoff

Example use cases:
- AI support triage that classifies, prioritises, and drafts replies autonomously
- Tech stack detection agent that writes personalised outreach emails
- Natural language analytics layer over your business database
- Adaptive learning or onboarding systems that reason about user progress

---

**Track 3: Custom Consultation**
Not sure which you need? [Book a free 20-minute call] — I'll tell you exactly what to build and what it will take.

---

### 4.4 PROJECTS SECTION

**Goal:** Show real work with business context. Not "here's my code". Here's the problem I solved and what it meant for the business.

**Layout:** Masonry-style cards on desktop, single column on mobile. Each card is a mini case study with a "Read full case study →" link.

**Card structure:**
```
[Category badge: "Workflow Automation" or "Agentic AI"]
[Project name]
[Problem headline: one line]
[Impact summary: 2 lines]
[Stack chips]
[→ Case study link]
```

---

#### PROJECT 1: AI Cold Outreach System
**Category:** Workflow Automation (n8n)
**Slug:** /projects/ai-cold-outreach-system

**Problem:** Sales teams spend 3–5 hours per day manually researching leads, writing personalised emails, and monitoring inboxes. At 50 leads/day, that's unsustainable.

**Solution:** A 3-part automation system:
- **Outreach Agent v2:** Takes Perplexity-researched lead data → validates and deduplicates → Llama 3.3 70B writes personalized cold emails using a strict 9-rule prompt (bans 15+ clichés, enforces 80-120 word count, quality gate before send) → logs to Supabase → sends with 3-min spam-prevention delay between each
- **Lead Intake Funnel:** Webhook endpoint → scrapes prospect's website in real-time → AI generates a 2-sentence personalised pitch referencing their actual business → stores + emails in 15 seconds
- **Reply Monitor:** Polls Gmail every 5 minutes → detects replies → AI sentiment analysis (positive/negative/neutral) + intent classification → updates Supabase → sends formatted alert with suggested next step

**Business impact:** End-to-end outreach pipeline that runs 24/7. A human reviews; a system executes.

**What I can build for your company:**
- Full SDR automation stack for any industry
- CRM-connected outreach with auto follow-up sequences
- Reply intelligence dashboard showing pipeline health
- Industry-specific personalisation layers (real estate, SaaS, agencies)

**Stack:** n8n · Supabase · Groq (Llama 3.3 70B + Llama 3.1 8B) · Gmail API · SMTP · JavaScript

---

#### PROJECT 2: Conversational BI Dashboard
**Category:** Agentic AI
**Slug:** /projects/conversational-bi-dashboard

**Problem:** CEOs and operations leads wait hours (or days) for data answers. BI analysts are always backed up. Spreadsheet exports are stale the moment they're created.

**Solution:** A natural language interface over business data. Type "Show me Q3 revenue by region broken down by product" — get a live interactive chart in seconds. No SQL. No BI analyst. No waiting.

**Architecture:** FastAPI backend interprets NL queries using Gemini API → generates SQL → executes against SQLite → returns structured data → Next.js frontend renders charts dynamically

**Business impact:** Any stakeholder can get data answers instantly. Data team gets their calendar back.

**What I can build for your company:**
- NL query layer over your existing database (PostgreSQL, MySQL, BigQuery, AlloyDB)
- Role-based dashboards with natural language entry
- Automated weekly/monthly report generation
- Multi-source data aggregation (CRM + ops + finance in one query)

**Stack:** Next.js · FastAPI · SQLite/AlloyDB · Gemini API · Python · REST

---

#### PROJECT 3: Support Ticket Triager
**Category:** Agentic AI (Google ADK)
**Slug:** /projects/support-ticket-triager

**Problem:** Support teams manually read every incoming ticket, decide priority (is this a billing emergency or a feature request?), and draft a reply. At scale, this creates bottlenecks and inconsistent customer experience.

**Solution:** An ADK-based AI agent with 3 specialised tools: classification (P0–P3 priority), category detection (billing, access, feature, bug), and reply drafting. Deployed on Google Cloud Run as a live API endpoint.

**Demo result (tested live):** "I've been charged twice and can't access my dashboard" → classified P0-Critical, billing category, personalised reply drafted in under 2 seconds.

**What I can build for your company:**
- Support triage for Zendesk, Freshdesk, or email-based support
- Escalation routing to right team member by issue type
- Auto-reply for common queries (80% of volume) with human review for edge cases
- SLA monitoring agent that flags at-risk tickets

**Stack:** Google ADK · Gemini 2.5 Flash · Cloud Run · Python · Vertex AI

**Live URL:** [https://adk-default-service-name-669856308263.us-central1.run.app]

---

#### PROJECT 4: StackScout — Sales Intelligence Agent
**Category:** Agentic AI (ADK + MCP)
**Slug:** /projects/stackscout

**Problem:** Sales teams pitch generic emails to companies without knowing their tech stack. A company running Shopify needs a completely different pitch than one running a custom React app.

**Solution:** An ADK agent connected to a custom-built MCP server via the Model Context Protocol. The MCP server visits any URL and detects CMS, frameworks, CDNs, and analytics tools from live HTML/headers. The agent receives this data and generates a 3-sentence personalised outreach email referencing their specific stack.

**Architecture highlight:** Textbook MCP separation of concerns — the reasoning layer (ADK agent) and the tooling layer (MCP server) are independently deployed Cloud Run services. The agent doesn't know how detection works; it just uses the tool.

**What I can build for your company:**
- Competitive intelligence agent (monitor competitors' tech choices)
- Vendor discovery pipeline for procurement teams
- ABM (account-based marketing) enrichment layer
- API integration auditor

**Stack:** Google ADK · FastMCP · Cloud Run (2 services) · Gemini 2.5 Flash · Python · BeautifulSoup

---

#### PROJECT 5: StartupIQ — AlloyDB Natural Language Analytics
**Category:** Agentic AI (AlloyDB AI)
**Slug:** /projects/startupiq

**Problem:** Business analysts spend significant time translating stakeholder questions into SQL queries. Non-technical stakeholders can't query their own data.

**Solution:** A natural language SQL interface powered by AlloyDB AI. The system uses AlloyDB's built-in `embedding()` function and `google_ml` integration with text-embedding-005 to convert NL questions into SQL, execute against the database, and return human-readable results. Custom dataset, custom schema, zero lab defaults.

**Technical highlight:** Uses AlloyDB's `ai.if()` function for LLM-based logic checks inside SQL — the intelligence is in the database layer itself, not just in the application.

**What I can build for your company:**
- NL query interface for any AlloyDB/PostgreSQL database
- Executive Q&A bots that answer from live business data
- Automated KPI reporting triggered by plain-English questions
- Semantic search over business records

**Stack:** AlloyDB · Vertex AI (text-embedding-005) · google_ml_integration · pgvector · FastAPI · Cloud Run

---

#### PROJECT 6: PFS 2.0 — Adaptive Learning Engine
**Category:** Agentic AI (Multi-agent System)
**Slug:** /projects/pfs-adaptive-learning

**Problem:** 1.5M engineering graduates leave Indian universities annually. 83% remain unemployed. The gap isn't content — it's directed, personalised learning momentum. Students study what they already know and skip their actual weak spots.

**Solution:** A multi-agent ADK system with a RootOrchestrator coordinating 3 specialised agents:
- **DiagnosticAgent:** Administers targeted assessments to find knowledge gaps
- **PrerequisiteAgent:** Traces root causes (fails Topic C? Root gap is Topic A)
- **ContentAgent:** Generates a day-by-day personalised study plan

Backed by AlloyDB (5 tables, prerequisite graph as UUID arrays), MCP question-bank server (3 tools), FastAPI on Cloud Run. Goal: take a student from "I don't know what I don't know" to a structured study path in one session.

**Architecture highlights:**
- Multi-step workflow: Profile → Declare → Diagnose → Trace → Plan
- AlloyDB stores prerequisite relationships as a graph
- Deployed as a public API — any frontend can consume it

**What I can build for your company:**
- Employee onboarding systems that adapt to what each person already knows
- Customer education platforms with intelligent progression
- Skills gap analysis tools for HR teams
- Training content that routes itself based on user performance

**Stack:** Google ADK · Gemini 2.5 Flash · AlloyDB · FastMCP · FastAPI · Cloud Run · Vertex AI

---

#### PROJECT 7: Voice Personal Assistant Agent
**Category:** Agentic AI
**Slug:** /projects/voice-assistant

**Problem:** Hands-free operations, voice-first interfaces, and accessibility solutions require AI that speaks — not just types.

**Solution:** A conversational voice agent using Twilio for telephony and ElevenLabs for neural text-to-speech. Processes spoken input, reasons about the request, and responds with natural-sounding voice output.

**What I can build for your company:**
- AI phone receptionist for after-hours calls
- Voice-activated internal assistant for warehouse/field teams
- Automated appointment booking via phone
- Customer support IVR replacement with natural conversation

**Stack:** Twilio · ElevenLabs · Python · LLM backend

---

#### PROJECT 8: ContentSystem — LinkedIn Ghostwriting Agent
**Category:** Agentic AI (Multi-agent Pipeline)
**Slug:** /projects/contentsystem

**Problem:** Founders and executives know they need to post on LinkedIn consistently but don't have time to write. Generic ghostwriters don't capture the authentic voice. AI tools produce obviously AI-sounding content.

**Solution:** A 4-agent Claude Code pipeline that produces LinkedIn posts in the founder's authentic voice:
- **Voice Extractor:** Analyses sample posts to extract vocabulary tier, sentence rhythm, punctuation patterns, opening/closing habits
- **Strategist:** Chooses content pillar and hook type based on LinkedIn algorithm signals (dwell time, "see more" fold at ~140 chars)
- **Writer:** Drafts post matching extracted voice fingerprint
- **Editor:** Quality gates against 30+ banned phrases, checks algorithm optimisation

Content delivered to Notion via MCP. System built and iterated entirely within Claude Code.

**What I can build for your company:**
- Brand voice AI for content teams
- Multi-platform content repurposing pipeline
- Thought leadership automation for executive teams
- Newsletter generation from weekly meeting notes

**Stack:** Claude Code · Claude API (multi-agent) · Notion MCP · Python · n8n

---

#### PROJECT 9: n8n-claw Self-Hosted AI Agent Stack
**Category:** Infrastructure / Workflow Automation
**Slug:** /projects/n8n-claw-stack

**Problem:** Most AI automation platforms are expensive SaaS tools with usage limits. Companies with high-volume automation needs get punished by per-execution pricing.

**Solution:** A fully self-hosted AI agent infrastructure on a single machine:
- n8n (automation orchestrator) on port 5679
- Supabase Studio (database + auth) at localhost:3001
- SearXNG (private web search) at port 8888
- Kong API gateway
- ngrok secure tunnel for external webhooks

Resolved complex WSL2/Windows integration issues including Kong crashes, language contamination, timezone sync, and MCP server webhook stability.

**What I can build for your company:**
- Full self-hosted automation stack (no SaaS costs)
- Private AI infrastructure that keeps data internal
- Enterprise automation setup with custom security controls
- Migration from expensive automation tools to self-hosted equivalent

**Stack:** n8n · Supabase · SearXNG · Kong · ngrok · Docker · WSL2

---

### 4.5 PROCESS SECTION

**Headline:** "How working with me looks"

**3 Steps:**

1. **Discovery (20 minutes)**
   You tell me the bottleneck. I ask the right questions. By the end of the call I'll tell you exactly what to build, how long it takes, and what it costs. No fluff, no sales pitch.

2. **Build (48 hrs → 2 weeks)**
   You get a working prototype within 48 hours of project start. Full delivery depends on complexity — workflow automations in 3–7 days, agentic systems in 1–3 weeks. You see progress throughout.

3. **Deploy + Handoff**
   Everything deployed, documented, and transferred to you. I write the documentation like a human — not a developer — so your team can actually use it. 30-day support window included.

---

### 4.6 WHAT I CAN BUILD FOR YOU (Industries Section)

**Headline:** "Whatever your industry, the bottleneck is the same — manual work that shouldn't need a human"

**Industry cards (6):**

1. **Real Estate**
   Lead qualification, follow-up sequences, CRM sync, property data pipelines, listing description generation, market report automation

2. **E-commerce & Retail**
   Inventory alerts, customer support bot (handles 80% of tickets), review sentiment analysis, returns processing automation, reorder triggers

3. **SaaS & Tech**
   Trial-to-paid onboarding flows, churn risk detection, support ticket triage, product usage report automation, customer health scoring

4. **Marketing & Agencies**
   Client report generation, content pipeline automation, lead scoring, social monitoring, proposal generation from brief

5. **Healthcare & Clinics**
   Appointment reminder systems, staff scheduling automation, patient intake processing, compliance document workflows

6. **Finance & Operations**
   Invoice processing, approval workflow automation, spend anomaly detection, report generation, vendor communication pipelines

---

### 4.7 FAQ SECTION

**Goal:** Handle objections before they become reasons to close the tab.

**Q: I don't have a technical team. Will I be able to use what you build?**
A: Yes. I document everything in plain English and build with maintainability in mind. If you can send an email, you can run what I build.

**Q: What's the difference between workflow automation and agentic AI?**
A: Workflow automation follows a fixed path — if X happens, do Y. Agentic AI can reason, adapt, and handle situations it's never seen before. Most businesses need both. I'll tell you which one fits your problem.

**Q: How do I know this will actually save time?**
A: We define the time-savings metric before I start. If I can't show you a measurable outcome in the discovery call, I won't take the project.

**Q: Do you work with businesses outside India?**
A: Yes. All client work is remote. Current clients span US and UK.

**Q: What happens after delivery?**
A: 30-day support window included in every project. After that, I offer monthly retainer maintenance packages.

**Q: Can you work with our existing tools?**
A: Almost certainly yes. n8n connects to 400+ services natively. For custom integrations, if there's an API, I can connect to it.

---

### 4.8 CONTACT SECTION

**Headline:** "Tell me what's breaking your operation"

**Subheadline:** I read every message and respond within 24 hours. If there's a fit, I'll send you a calendar link for a 20-minute discovery call.

**Form fields:**
- Name (required)
- Company / Business name (required)
- Email (required)
- Describe the manual process you want to automate (textarea, required)
- Rough budget range (select: Under $500 / $500–$2,000 / $2,000–$10,000 / $10,000+)
- How did you find me? (select: LinkedIn / Google / Referral / Other)

**Submit button:** "Send it →"

**Post-submit:** Inline success state — "Got it. I'll be back within 24 hours."

**Form action:** POST to a Next.js API route `/api/contact` → sends email via Nodemailer/Resend to arunreddy.co@gmail.com + stores in optional Supabase table

**Social links:** LinkedIn · GitHub · Email

---

## 5. TECHNICAL SPECIFICATIONS

### Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Dark Mode | next-themes |
| Fonts | next/font (Google Fonts: Plus Jakarta Sans + Instrument Serif) |
| Icons | Lucide React |
| Form | React Hook Form + native fetch |
| Email | Resend API (free tier: 3,000 emails/month) |
| Deployment | Vercel (free tier) |
| Analytics | Vercel Analytics (free) |

### Performance targets
- Lighthouse score: 95+
- LCP: < 2.5s
- CLS: < 0.1
- TTI: < 3s

### SEO
- Meta tags per page
- OG image for social sharing
- Structured data (Person + WebSite schema)
- Sitemap.xml

### Domain
- Register arunreddy.co on Namecheap or Cloudflare ($10-15/year)
- Point to Vercel

---

## 6. CONTENT REQUIREMENTS

### Copy principles (from CRO persona)
1. **Lead with outcomes, not tools.** Never "I use n8n" — always "I eliminated 15 hrs/week of manual work"
2. **The prospect is the hero.** Your website is about their problem, not your skills.
3. **Specificity = credibility.** Exact numbers, exact tools, exact timeframes
4. **One CTA per section.** Never two competing actions
5. **Social proof everywhere.** Hackathon, live URLs, real workflow screenshots

### Tone of voice
- Like a smart consultant who noticed something wrong with your operation
- Direct. Confident. No hedging.
- Never: "passionate about", "leverage", "synergy", "game-changing"
- Always: specific, outcome-first, human

---

## 7. V1 SCOPE (What gets built now)

### IN SCOPE
- [x] Full single-page website with all 8 sections
- [x] 9 individual case study pages
- [x] Dark/light mode toggle
- [x] Contact form with email delivery
- [x] Mobile responsive
- [x] Vercel deployment ready
- [x] SEO basics

### OUT OF SCOPE (v2)
- [ ] Live AI chat widget (after first client)
- [ ] Testimonials section (after first client)
- [ ] Blog / content section
- [ ] Booking calendar integration
- [ ] CMS for project updates

---

## 8. SUCCESS METRICS

- **Engagement:** Avg. session duration > 2 minutes
- **Conversion:** Contact form submission rate > 3% of visitors
- **Discovery:** At least 1 inbound enquiry per week from LinkedIn traffic
- **Trust:** Every visitor should be able to understand what you do in < 10 seconds

---

*PRD complete. Claude Code build begins after this document.*
