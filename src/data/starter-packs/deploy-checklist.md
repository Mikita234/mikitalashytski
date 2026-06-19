# Deploy Checklist

## Pre-deploy
- [ ] `npm run build` succeeds locally
- [ ] Environment variables documented (not in repo)
- [ ] Contact form endpoint configured
- [ ] Images optimized (not 5MB PNGs)

## GitHub
- [ ] Repo created
- [ ] README describes project
- [ ] `.gitignore` excludes `.env`

## Cloudflare Pages (Astro/static)
- [ ] Project connected to GitHub
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Production URL opens

## Vercel (Next.js apps)
- [ ] Project imported from GitHub
- [ ] Framework preset: Next.js
- [ ] Env vars set in dashboard
- [ ] Preview deployment tested

## Domain
- [ ] DNS records added
- [ ] HTTPS active
- [ ] www redirect configured

## Post-deploy
- [ ] Google Search Console property added
- [ ] Sitemap submitted
- [ ] Analytics connected (optional day 1)
- [ ] Test form on production URL

## Rollback
- [ ] Know how to revert last deploy in hosting dashboard
- [ ] Previous commit hash noted
