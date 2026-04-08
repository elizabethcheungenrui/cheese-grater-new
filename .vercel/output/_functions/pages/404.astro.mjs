import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_7FqapG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 \u2013 Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="not-found" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404 Not Found</h1> <p data-astro-cid-zetdm5md>
Either we’ve cocked up and routed this link to something that doesn’t
      exist, or you just aren’t that good at typing in links yourself. Maybe try
      searching up what you want instead?
</p> </main> ` })} `;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/404.astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
