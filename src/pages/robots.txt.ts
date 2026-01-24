// src/pages/robots.txt.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(
    `
User-agent: *
Allow: /

Sitemap: https://new.cheesegratermagazine.org/sitemap-index.xml
`.trim(),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
};
