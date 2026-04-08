import { d as createAstro, c as createComponent, r as renderComponent, q as renderScript, a as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead } from './astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$HeaderDesktop, a as $$HeaderMobile, b as $$Footer } from './Footer_B2YebArc.mjs';
/* empty css                           */

const $$Astro$2 = createAstro("https://cheesegratermagazine.org");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://cheesegratermagazine.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://cheesegratermagazine.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "The Cheese Grater Magazine",
    description = "Students' Union UCL's multi-award winning student publication, specialising in investigative and satirical journalism since 2004."
  } = Astro2.props;
  return renderTemplate`<html lang="en-GB"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="https://images.cheesegratermagazine.org/author_thumbnails/cg_author.jpeg" sizes="32x32">${renderComponent($$result, "Analytics", $$Index$1, {})}${renderComponent($$result, "SpeedInsights", $$Index, {})}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderComponent($$result, "HeaderDesktop", $$HeaderDesktop, {})} ${renderComponent($$result, "HeaderMobile", $$HeaderMobile, {})} <main class="page"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
