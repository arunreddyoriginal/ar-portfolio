# CLAUDE CODE — STEP BY STEP BUILD GUIDE
## arunreddy.co Portfolio Website

Read this completely before opening Claude Code. Every step is in order.
Do not skip steps. Do not reorder steps.

---

## WHAT YOU HAVE IN THIS PACKAGE

```
PRD.md                          ← What we're building (read for context)
CLAUDE.md                       ← Master context for Claude Code
INSTRUCTIONS.md                 ← This file
setup.sh                        ← Automated dependency installer
tailwind.config.ts              ← Tailwind config with CSS variables
tsconfig.json                   ← TypeScript config
next.config.js                  ← Next.js config
.env.example                    ← Environment variables template
.gitignore                      ← Git ignore rules

src/
├── app/
│   ├── globals.css             ← Full design system CSS variables
│   ├── layout.tsx              ← Root layout with fonts + ThemeProvider
│   ├── page.tsx                ← Home page assembly
│   ├── api/contact/route.ts    ← Contact form email handler
│   └── projects/[slug]/page.tsx ← Case study page template
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             ← Sticky nav with dark mode toggle
│   │   └── Footer.tsx          ← Footer with social links
│   └── sections/
│       ├── Hero.tsx            ← Full-viewport hero with terminal animation
│       ├── Problem.tsx         ← Pain point cards
│       ├── Services.tsx        ← Two-track service cards
│       ├── Projects.tsx        ← Filterable project grid with cards
│       ├── Process.tsx         ← 3-step process section
│       ├── Industries.tsx      ← Industry use cases grid
│       ├── FAQ.tsx             ← Accordion FAQ
│       └── Contact.tsx         ← Contact form with email delivery
├── data/
│   └── projects.ts             ← All 9 project case studies (typed)
└── lib/
    └── utils.ts                ← cn() utility function
```

---

## PHASE 1 — CREATE THE NEXT.JS PROJECT (5 minutes)

### Step 1: Open your terminal and create the project

```bash
npx create-next-app@latest arunreddy-co \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

When asked questions during setup:
- TypeScript → Yes (already set in flags)
- ESLint → Yes
- Tailwind → Yes
- `src/` directory → Yes
- App Router → Yes
- Import alias → Yes, keep `@/*`

### Step 2: Enter the project and copy all source files

```bash
cd arunreddy-co
```

Copy every file from this package into the project. The folder structure maps exactly to what `create-next-app` created. When prompted to overwrite existing files, say YES to all.

Files to overwrite:
- `tailwind.config.ts` (replaces the default one)
- `tsconfig.json` (replaces the default one)
- `src/app/globals.css` (replaces the default one)

### Step 3: Install dependencies

```bash
npm install framer-motion next-themes lucide-react react-hook-form
npm install resend
npm install clsx tailwind-merge
```

### Step 4: Set up environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and add your Resend API key:
- Go to https://resend.com → Sign up free → Create API key
- Paste it as: `RESEND_API_KEY=re_your_actual_key`

### Step 5: First test run

```bash
npm run dev
```

Open http://localhost:3000 — you should see the website. If you see errors, go to Phase 2 troubleshooting.

---

## PHASE 2 — OPEN CLAUDE CODE AND POLISH (Main work)

### Step 1: Open Claude Code in your project folder

```bash
# From inside arunreddy-co/
claude
```

Or open VS Code, then open the Claude Code panel.

### Step 2: Paste this exact prompt to start the session

Copy and paste this word-for-word as your first message to Claude Code:

---

```
Read CLAUDE.md completely before doing anything else.

I have a Next.js 14 portfolio website for arunreddy.co already set up with all source files. Your job is to review every file, fix any issues, and make this website absolutely polished.

Here is what I need you to do in order:

1. Read CLAUDE.md
2. Read src/data/projects.ts to understand all 9 projects
3. Run `npm run build` and fix every TypeScript or build error you find
4. Check that dark mode works correctly in every section
5. Make sure all Framer Motion animations use viewport: { once: true }
6. Verify the contact form submits correctly to /api/contact
7. Confirm all 9 project slugs generate static pages correctly
8. Check the mobile layout at 375px width for every section

Fix issues as you find them. Do not ask for confirmation before fixing — just fix and tell me what you changed.
```

---

### Step 3: After Claude Code finishes the review, send this prompt

```
Now run through this visual polish checklist and fix anything that needs improvement:

1. Hero section: The terminal animation lines should appear one by one with a typewriter feel. Check the CSS animation delays in globals.css match the terminal-line nth-child selectors.

2. Project cards: Hover state should show a subtle left border in accent color and lift the card 2px. Check the card-hover class and the accent bar in Projects.tsx.

3. Nav: On scroll past 20px, the nav should get a frosted glass background. Check the scrolled state logic in Nav.tsx.

4. Contact form: After submit, show the green success state with the CheckCircle icon. Make sure the status state transitions work.

5. Dark mode: In dark mode, the hero gradient should use rgba(59, 127, 255, 0.08) not the light mode value. Check the .dark .hero-gradient rule in globals.css.

6. Typography: The word "expensive" in the hero headline should render in Instrument Serif italic. Check that --font-serif variable resolves correctly.

7. FAQ accordion: Opening one item should close the previously open item. Check the useState logic in FAQ.tsx.

Tell me exactly what you fixed.
```

---

### Step 4: Send this prompt for final SEO and performance pass

```
Do a final production-readiness pass:

1. Check layout.tsx has complete metadata including description, keywords, openGraph, and twitter fields

2. Add a <link rel="canonical" href="https://arunreddy.co"> inside the head in layout.tsx

3. In projects/[slug]/page.tsx, confirm generateStaticParams() returns all 9 slugs from getAllSlugs()

4. Check the contact API route at src/app/api/contact/route.ts validates name, company, email, and message as required fields

5. In globals.css, confirm the ::-webkit-scrollbar styles are defined

6. Make sure every <img> tag (if any) has an alt attribute

7. Run `npm run build` one final time and confirm it completes with zero errors

Show me the build output.
```

---

## PHASE 3 — DEPLOY TO VERCEL (10 minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial arunreddy.co website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/arunreddy-co.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com → Sign in with GitHub
2. Click "Add New Project"
3. Import your `arunreddy-co` repository
4. Framework: Next.js (auto-detected)
5. Root directory: leave as default
6. **Before deploying — add environment variables:**
   - `RESEND_API_KEY` → your Resend key
   - `CONTACT_EMAIL` → arunreddy.co@gmail.com
   - `NEXT_PUBLIC_SITE_URL` → https://arunreddy.co (or your Vercel URL for now)
7. Click Deploy

Vercel gives you a free URL like `arunreddy-co.vercel.app`. Your site is live.

### Step 3: (After buying domain) Connect arunreddy.co

1. Buy domain at Namecheap or Cloudflare (~$10-15/year)
2. In Vercel dashboard → Settings → Domains → Add `arunreddy.co`
3. Follow Vercel's DNS instructions (takes 5-30 minutes to propagate)
4. Done. HTTPS is automatic.

---

## PHASE 4 — AFTER YOUR FIRST CLIENT (Future additions)

These are OUT OF SCOPE for v1 but ready to add once you have one client:

### Add testimonials section
```
Add a Testimonials section between #process and #industries.
Each testimonial card: quote, name, company, and what they automated.
Design to match the existing card style.
```

### Add a live AI chat widget (when you can cover API costs)
```
Add a floating chat button in the bottom-right corner.
When clicked, opens a slide-up panel.
Wire it to the Anthropic Claude API using the fetch pattern from the Anthropic docs.
System prompt: "You are Arun Reddy's AI assistant on arunreddy.co. Help visitors understand if Arun can solve their automation problem. Ask about their specific workflow, estimate timeline, and encourage them to fill out the contact form."
```

### Add a blog/case studies CMS
```
Set up a /blog route with MDX files in /content/blog/.
Each post is a case study of a client project (after client approval).
```

---

## COMMON ERRORS AND FIXES

### "Module not found: framer-motion"
```bash
npm install framer-motion
```

### "ReferenceError: document is not defined"
Any component using `document.getElementById` must be a Client Component.
Make sure `'use client';` is at the very top of the file (line 1, before any imports).

### Hydration mismatch with dark mode
The ThemeProvider `suppressHydrationWarning` is set in layout.tsx.
If you still see errors, add `suppressHydrationWarning` to the `<body>` tag too.

### Contact form returns 500 error
Check that `RESEND_API_KEY` is set in `.env.local` AND in Vercel environment variables.
The `from` address in route.ts must use `onboarding@resend.dev` until you verify a custom domain in Resend.

### Build error: "Type error: Property 'slug' does not exist"
Make sure you're importing `Project` type from `@/data/projects` not defining it inline.

### Images show broken on Vercel
If you add any `<Image>` components later, add the domain to `images.domains` in `next.config.js`.

---

## FILE REFERENCE — WHAT EACH FILE DOES

| File | Purpose | Edit when |
|------|---------|-----------|
| `CLAUDE.md` | Master context for Claude Code | Adding new features |
| `src/data/projects.ts` | All 9 project case studies | Adding new projects |
| `src/app/globals.css` | CSS variables, base styles | Changing colors/fonts |
| `src/app/layout.tsx` | Root layout, fonts, metadata | Changing SEO/fonts |
| `src/app/page.tsx` | Home page section assembly | Reordering sections |
| `src/components/sections/Hero.tsx` | Hero with terminal animation | Changing headline/CTA |
| `src/components/sections/Projects.tsx` | Project card grid + filters | Changing card design |
| `src/components/sections/Contact.tsx` | Contact form | Changing form fields |
| `src/app/api/contact/route.ts` | Email handler | Changing email format |
| `src/app/projects/[slug]/page.tsx` | Case study page template | Changing case study layout |

---

## QUICK REFERENCE — KEY DESIGN DECISIONS

| Decision | Value | Why |
|----------|-------|-----|
| Primary font | Plus Jakarta Sans | Clean, modern, not overused |
| Accent font | Instrument Serif italic | Editorial moments only |
| Accent color (light) | #0057FF | Strong, trustworthy blue |
| Accent color (dark) | #3B7FFF | Slightly lighter for dark bg |
| Animation library | Framer Motion | Best-in-class React animation |
| Theme library | next-themes | SSR-safe dark mode, zero flicker |
| Email | Resend | Free tier, dead-simple API |
| Deployment | Vercel | Free tier, instant deploys, works with Next.js |

---

*End of instructions. Start with Phase 1.*
