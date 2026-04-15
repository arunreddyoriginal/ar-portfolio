# CLAUDE.md — arunreddy.co
## Master Context for Claude Code

Read this entire file before touching a single line of code.

---

## WHO YOU ARE BUILDING FOR

**Arun Reddy** — AI Workflow & Agentic AI Architect. Student in Hyderabad. Building toward full-time freelancing targeting US/UK clients. Has shipped 9 real production systems. Targets founders, CEOs, and ops leads at 10–200 person companies.

**Brand:** arunreddy.co  
**Positioning:** "I build AI systems that eliminate your most expensive bottlenecks"

---

## WHAT YOU ARE BUILDING

A Next.js 14 portfolio/sales website that converts visitors into client enquiries. NOT a generic portfolio. A sales machine with case studies that show business outcomes.

**Tech stack:**
- Next.js 14 with App Router (`src/` directory)
- Tailwind CSS v3
- Framer Motion for animations
- next-themes for dark/light mode
- Lucide React for icons
- React Hook Form for the contact form
- Resend (or nodemailer) for email delivery

**Fonts (via next/font Google):**
- `Plus_Jakarta_Sans` — weights 300, 400, 500, 600, 700 — for all body and UI
- `Instrument_Serif` — italic only — for editorial display moments in headlines

**Do NOT use:** Inter, Roboto, Arial, Space Grotesk, or any system font.

---

## DESIGN SYSTEM

### Colors (CSS variables — defined in globals.css)

```css
:root {
  /* Light mode */
  --bg-primary: #FAFAFA;
  --bg-secondary: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-subtle: #F4F4F5;
  --text-primary: #09090B;
  --text-secondary: #52525B;
  --text-muted: #A1A1AA;
  --accent: #0057FF;
  --accent-hover: #0047D9;
  --accent-subtle: #EFF4FF;
  --border: #E4E4E7;
  --border-strong: #D4D4D8;
}

.dark {
  --bg-primary: #0A0A0F;
  --bg-secondary: #111118;
  --bg-card: #111118;
  --bg-subtle: #18181F;
  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --text-muted: #52525B;
  --accent: #3B7FFF;
  --accent-hover: #5A96FF;
  --accent-subtle: #0F1A35;
  --border: #1F1F2A;
  --border-strong: #2A2A38;
}
```

### Typography scale
- Display XL: 72px / Plus Jakarta Sans 700 — hero headline only
- Display L: 56px / Plus Jakarta Sans 700 — section headlines
- Display M: 40px / Plus Jakarta Sans 600
- H2: 32px / Plus Jakarta Sans 600
- H3: 24px / Plus Jakarta Sans 600
- Body L: 18px / Plus Jakarta Sans 400 — intro paragraphs
- Body: 16px / Plus Jakarta Sans 400 — default
- Small: 14px / Plus Jakarta Sans 400
- Caption: 12px / Plus Jakarta Sans 500 (uppercase, letter-spacing)

*Instrument Serif italic is used ONLY for stylistic emphasis within headlines — one or two words maximum.*

### Spacing system
Use Tailwind's default spacing. Key custom values:
- Section padding: `py-24 md:py-32`
- Container: `max-w-6xl mx-auto px-6`
- Card padding: `p-8`
- Gap between cards: `gap-6`

### Component patterns
- **Cards:** `rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8`
- **Buttons primary:** `bg-[var(--accent)] text-white rounded-full px-6 py-3 font-medium text-sm hover:bg-[var(--accent-hover)] transition-colors`
- **Buttons secondary:** `border border-[var(--border)] rounded-full px-6 py-3 font-medium text-sm hover:bg-[var(--bg-subtle)] transition-colors`
- **Badges:** `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-subtle)] text-[var(--text-secondary)]`
- **Section labels:** `text-xs font-semibold uppercase tracking-widest text-[var(--accent)]`

### Motion rules
- All sections: fade-up on scroll using Framer Motion `whileInView`
- Stagger children in grids with `delay: index * 0.1`
- Page load: hero elements stagger in — headline (0s), sub (0.1s), CTA (0.2s), trust strip (0.4s)
- Hover on cards: `scale: 1.01` with `transition: { duration: 0.2 }`
- NO bouncy springs. `ease: [0.25, 0, 0, 1]` (smooth deceleration) for everything
- `viewport: { once: true }` on all scroll animations — no repeat triggers

---

## FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, ThemeProvider, metadata
│   ├── page.tsx            ← Home page, renders all sections in order
│   ├── globals.css         ← CSS variables, base styles, Tailwind directives
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    ← Contact form POST handler
│   └── projects/
│       └── [slug]/
│           └── page.tsx    ← Dynamic case study page
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         ← Sticky nav with dark mode toggle
│   │   └── Footer.tsx      ← Simple footer with links
│   └── sections/
│       ├── Hero.tsx        ← Full-viewport hero
│       ├── Problem.tsx     ← Pain point cards
│       ├── Services.tsx    ← Two-track service cards
│       ├── Projects.tsx    ← Project card grid
│       ├── Process.tsx     ← 3-step process
│       ├── Industries.tsx  ← Industry use cases
│       ├── FAQ.tsx         ← Accordion FAQ
│       └── Contact.tsx     ← Contact form
├── data/
│   └── projects.ts         ← All project data as typed objects
└── lib/
    └── utils.ts            ← cn() utility and helpers
```

---

## DATA: ALL 9 PROJECTS

The `src/data/projects.ts` file is the single source of truth. Every project has:

```typescript
interface Project {
  slug: string;
  title: string;
  category: 'Workflow Automation' | 'Agentic AI' | 'Infrastructure';
  tagline: string;          // One-line problem statement
  problem: string;          // 2-3 sentences, pain-first
  solution: string;         // What was built, how it works
  impact: string;           // Business outcome, specific
  stack: string[];          // Tech badges
  whatICanBuild: string[];  // 4-6 bullet points for business
  liveUrl?: string;         // Optional
  featured: boolean;        // Top 3 show first
}
```

**The 9 projects (in display order):**

1. AI Cold Outreach System (slug: `ai-cold-outreach-system`) — Workflow Automation — featured
2. Conversational BI Dashboard (slug: `conversational-bi-dashboard`) — Agentic AI — featured
3. Support Ticket Triager (slug: `support-ticket-triager`) — Agentic AI — featured, has liveUrl
4. StackScout (slug: `stackscout`) — Agentic AI
5. StartupIQ (slug: `startupiq`) — Agentic AI
6. PFS 2.0 Adaptive Learning (slug: `pfs-adaptive-learning`) — Agentic AI
7. Voice Personal Assistant (slug: `voice-assistant`) — Agentic AI
8. ContentSystem (slug: `contentsystem`) — Agentic AI
9. n8n-claw Stack (slug: `n8n-claw-stack`) — Infrastructure

See `PRD.md` section 4.4 for full copy for each project.

---

## CRITICAL RULES — NEVER VIOLATE

1. **CSS variables only** for all colors. Never hardcode hex in components.
2. **Both light and dark mode** must look polished. Test every component in both.
3. **Mobile first.** Every component must work at 320px width.
4. **No Lorem ipsum.** All copy comes from this file and the PRD. If unsure, ask.
5. **No purple gradients.** No generic AI aesthetics. Clean, sharp, precise.
6. **One font family for UI** (Plus Jakarta Sans). Instrument Serif only for editorial accents.
7. **`viewport: { once: true }`** on ALL Framer Motion scroll animations.
8. **The contact form API route** must validate all required fields server-side.
9. **Accessibility:** All interactive elements need focus states. Images need alt text.
10. **No inline styles** unless absolutely necessary for dynamic values.

---

## SECTION BUILD ORDER

Build in this order to avoid blockers:

1. `globals.css` — CSS variables + base styles
2. `lib/utils.ts` — cn() utility
3. `data/projects.ts` — all project data
4. `layout.tsx` — fonts, ThemeProvider, metadata
5. `components/layout/Nav.tsx` — nav with dark mode toggle
6. `components/layout/Footer.tsx`
7. `components/sections/Hero.tsx`
8. `components/sections/Problem.tsx`
9. `components/sections/Services.tsx`
10. `components/sections/Projects.tsx`
11. `components/sections/Process.tsx`
12. `components/sections/Industries.tsx`
13. `components/sections/FAQ.tsx`
14. `components/sections/Contact.tsx`
15. `app/page.tsx` — assembles all sections
16. `app/projects/[slug]/page.tsx` — case study template
17. `app/api/contact/route.ts` — form handler

---

## PACKAGES TO INSTALL

```bash
npm install framer-motion next-themes lucide-react react-hook-form
npm install resend  # for contact form email
npm install clsx tailwind-merge  # for cn() utility
```

---

## ENVIRONMENT VARIABLES

Create `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=arunreddy.co@gmail.com
```

---

## SPECIFIC COMPONENT NOTES

### Nav.tsx
- Logo: "AR" monogram left, nav links right on desktop
- Mobile: hamburger → full-screen overlay menu
- Dark mode toggle: sun/moon icon, uses `next-themes` `useTheme`
- CTA button: "Let's talk" → scrolls to #contact
- Sticky with `backdrop-blur-md` on scroll
- On scroll: add subtle border-bottom

### Hero.tsx
- Full viewport height (`min-h-screen`)
- Headline: 2 lines — "I build AI systems" then "that eliminate your most expensive bottlenecks."
- The word "bottlenecks" uses Instrument Serif italic
- Terminal animation: a CSS-animated mock code block showing:
  ```
  → Scanning website...       ✓
  → Detecting pain points...  ✓  
  → Writing outreach email... ✓
  → Sent in 15 seconds        ✓
  ```
  Lines appear with typewriter-style CSS animation, staggered
- Trust badge row: logos/text for Google Cloud, Gemini, Claude, n8n, ADK

### Projects.tsx
- Show all 9 projects
- Filter tabs: "All" | "Workflow Automation" | "Agentic AI" | "Infrastructure"
- Featured 3 get larger cards (span 2 cols on md)
- Regular 6 in standard card grid
- Each card: category badge, title, tagline, impact line, stack chips, arrow link
- Hover: card lifts + accent border appears on left edge

### FAQ.tsx
- Radix-style accordion (implement with useState, no radix dependency)
- Smooth height animation with Framer Motion `AnimatePresence`

### Contact.tsx
- Split layout: left side has "Why work with me" bullets, right side has form
- Form uses React Hook Form
- Client-side validation + server response handling
- On submit: show loading state → success message
- Fields: name, company, email, message (textarea), budget (select), source (select)

---

## SEO METADATA (for layout.tsx)

```typescript
export const metadata: Metadata = {
  title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
  description: 'I build AI systems that eliminate your most expensive bottlenecks. n8n workflow automation, multi-agent systems, Google ADK, Gemini. Based in Hyderabad, working globally.',
  keywords: ['AI automation', 'agentic AI', 'n8n workflows', 'Google ADK', 'AI freelancer', 'workflow automation'],
  openGraph: {
    title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
    description: 'I build AI systems that eliminate your most expensive bottlenecks.',
    url: 'https://arunreddy.co',
    siteName: 'Arun Reddy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
  },
};
```

---

## WHEN BUILDING CASE STUDY PAGES (/projects/[slug])

Each page follows this structure:
1. Back arrow (← All Projects)
2. Category badge + Title (H1)
3. Problem section (red-tinted card)
4. Solution section (detailed, with architecture if complex)
5. Stack used (badges)
6. "What I can build for your company" (bulleted, business-framed)
7. CTA: "Want something similar? Let's talk →" (scrolls to contact or links to /#contact)

Generate static params from `projects.ts` data.

---

## AFTER ALL COMPONENTS ARE BUILT

Run through this checklist:
- [ ] Dark mode looks as good as light mode
- [ ] Mobile layout at 375px, 768px, 1280px
- [ ] Contact form submits and shows success state
- [ ] All project slugs resolve to case study pages
- [ ] Nav links scroll to correct sections
- [ ] No hydration errors (ThemeProvider setup)
- [ ] Framer Motion animations only trigger once on scroll
- [ ] All images have alt text (use `role="img"` for decorative SVGs)
- [ ] `npx next build` completes without errors

---

*End of CLAUDE.md. Start building.*
