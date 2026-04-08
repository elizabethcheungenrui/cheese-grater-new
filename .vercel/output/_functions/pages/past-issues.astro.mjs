import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_7FqapG.mjs';
import { $ as $$Title } from '../chunks/Title_CyFJWs41.mjs';
import { g as getPrintEditions } from '../chunks/getPrintEditions_CfqZOidz.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_2KVTJANJ.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$PrintList = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getPrintEditions();
  return renderTemplate`${maybeRenderHead()}<ul class="subpage-list" data-astro-cid-sqtlcpa4> ${data.map((issue) => renderTemplate`<li class="print-item" data-astro-cid-sqtlcpa4> <a${addAttribute(`/past-issues/${issue.slug}`, "href")} data-astro-cid-sqtlcpa4> ${renderComponent($$result, "Image", $$Image, { "src": `https://print.cheesegratermagazine.org/${issue.slug}.png`, "alt": `Print Edition ${issue.name}`, "width": 800, "height": 1120, "layout": "constrained", "data-astro-cid-sqtlcpa4": true })} </a> </li>`)} </ul> `;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/section-list/PrintList.astro", void 0);

const $$PastIssues = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Print Edition \u2013 The Cheese Grater Magazine" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "sectionUpper": "Print" })} ${renderComponent($$result2, "PrintList", $$PrintList, {})} ` })}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/past-issues.astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/past-issues.astro";
const $$url = "/past-issues";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PastIssues,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
