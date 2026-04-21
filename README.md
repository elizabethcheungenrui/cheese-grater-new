# The Cheese Grater Website

A modern full-stack rebuild of The Cheese Grater Magazine website, replacing a legacy WordPress system with a custom publication platform focused on performance, maintainability, and editorial flexibility.

Live site: https://cheesegratermagazine.org

---

## Features

- Server-rendered and statically optimised publication site built with Astro
- Dynamic article pages backed by Supabase content
- Reusable component system for article cards, layouts, and section pages
- Interactive homepage features built with React and Framer Motion
- Full-text search using PostgreSQL
- Structured SEO (JSON-LD, metadata, Open Graph)
- Optimised image delivery and improved page performance

---

## Tech Stack

- Astro
- React + TypeScript
- Supabase (Database)
- PostgreSQL
- Vercel (Hosting & Deployment)
- Cloudflare (DNS/CDN)
- Cloudflare R2 (Image storage)

---

## My Role

I designed and built this platform from scratch as a full replacement for the publication’s previous WordPress site.

This included:
- Frontend architecture and component system
- Content integration and data modelling
- Search and SEO implementation
- Performance optimisation
- Deployment and infrastructure setup

---

## Architecture Overview

- Content is stored in Supabase and queried by the frontend
- Astro handles static generation and server-side rendering
- React is used for interactive components (e.g. homepage animations)
- Reusable UI components ensure consistency across all sections
- Images are served via Cloudflare R2 and optimised for delivery

---

## Deployment

The site is deployed on Vercel, with Cloudflare managing DNS and CDN behaviour. Content updates can trigger redeploy hooks to refresh the live site.

---

## Status

Actively maintained and continuously developed alongside the publication’s editorial needs.
