import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_7FqapG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "500 \u2013 Internal Server Error", "data-astro-cid-5v2qf5k4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="server-error" data-astro-cid-5v2qf5k4> <h1 data-astro-cid-5v2qf5k4>500 Internal Server Error</h1> <p data-astro-cid-5v2qf5k4>
If you're seeing this – don't worry, it's not your fault. Please let our editors know at <a href="mailto:editor@cheesegratermagazine.org" data-astro-cid-5v2qf5k4>editor@cheesegratermagazine.org</a> and we'll get this article back up as quickly as possible.
</p> </main> ` })} `;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/500.astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
