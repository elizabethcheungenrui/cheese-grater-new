export { renderers } from '../renderers.mjs';

const GET = () => {
  return new Response(
    `
User-agent: *
Allow: /

Sitemap: https://new.cheesegratermagazine.org/sitemap-index.xml
`.trim(),
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
