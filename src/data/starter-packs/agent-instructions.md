# Agent Instructions

You are building a production website, not a demo.

## Stack defaults
| Project type | Stack |
|---|---|
| Local service site | Astro + Cloudflare + Markdown |
| Blog/content | Astro + Cloudflare + Markdown |
| Shop | Shopify |
| Tickets/events | Next.js + Vercel + Supabase + Stripe |
| SaaS | Next.js + Vercel + Supabase + Stripe |
| Internal tool | Streamlit |

## Do NOT
- Rewrite entire project in one pass
- Add fake team members or stock testimonials
- Use Next.js for 5-page brochure sites
- Skip contact form
- Hardcode API keys

## Do
- Read AGENTS.md / project rules if present
- Edit file-by-file with small commits
- Run build before suggesting deploy
- Use real business names from brief
- Add basic meta title/description per page

## Review before deploy
1. `npm run build` passes
2. Form test submission works
3. Mobile viewport checked
4. No console errors on home
