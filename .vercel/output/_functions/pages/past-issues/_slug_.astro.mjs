export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response("Missing print edition", { status: 400 });
  }
  const publicUrl = `https://print.cheesegratermagazine.org/${slug}.pdf`;
  return Response.redirect(publicUrl, 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
