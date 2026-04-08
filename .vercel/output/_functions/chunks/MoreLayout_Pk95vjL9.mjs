import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, e as addAttribute, f as renderSlot, g as renderHead, r as renderComponent } from './astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$HeaderDesktop, a as $$HeaderMobile, b as $$Footer } from './Footer_B2YebArc.mjs';
import 'clsx';
/* empty css                         */
/* empty css                           */
/* empty css                         */

const $$Astro$1 = createAstro("https://cheesegratermagazine.org");
const $$MoreTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MoreTitle;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="more-title"> <h1 class="heading">${heading}</h1> </header>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/more/MoreTitle.astro", void 0);

const $$Astro = createAstro("https://cheesegratermagazine.org");
const $$MoreLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MoreLayout;
  const { frontmatter } = Astro2.props;
  const {
    title,
    description = "Students' Union UCL's multi-award winning student publication, specialising in investigative and satirical journalism since 2004."
  } = frontmatter;
  return renderTemplate`<html lang="en-GB"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${`${title} \u2014 The Cheese Grater Magazine`}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="https://images.cheesegratermagazine.org/author_thumbnails/cg_author.jpeg" sizes="32x32">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderComponent($$result, "HeaderDesktop", $$HeaderDesktop, {})} ${renderComponent($$result, "HeaderMobile", $$HeaderMobile, {})} <main class="page"> ${renderComponent($$result, "MoreTitle", $$MoreTitle, { "heading": title })} <section class="more-styling"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/layouts/MoreLayout.astro", void 0);

export { $$MoreLayout as $ };
