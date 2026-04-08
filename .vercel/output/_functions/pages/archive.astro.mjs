import { d as createAstro, c as createComponent, e as addAttribute, f as renderSlot, g as renderHead, a as renderTemplate, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                   */
import { g as getSectionArticles } from '../chunks/getSectionArticles_vt-MYah2.mjs';
import { g as getPrintEditions } from '../chunks/getPrintEditions_CfqZOidz.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://cheesegratermagazine.org");
const $$ArchiveLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchiveLayout;
  const { title = "Archive - The Cheese Grater Magazine" } = Astro2.props;
  return renderTemplate`<html lang="en-GB"> <head><meta charset="utf-8"><meta name="viewport" content="width=1020, initial-scale=1"><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="https://images.cheesegratermagazine.org/author_thumbnails/cg_author.jpeg" sizes="32x32">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> <main class="page"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/layouts/ArchiveLayout.astro", void 0);

const $$Archive$1 = createComponent(async ($$result, $$props, $$slots) => {
  const newsData = await getSectionArticles("News", 5);
  const humourData = await getSectionArticles("Humour", 5);
  const printData = await getPrintEditions();
  const latestIssue = printData[0];
  return renderTemplate`${maybeRenderHead()}<div class="archive-page"> <header class="page-header"> <img src="https://images.cheesegratermagazine.org/archive/cg-logo-archive.png" alt="Cheese Grater Magazine" style="width: 1020px;"> <nav class="header-nav"> <ul> <li><a href="/">HOME</a></li> <li><a href="/news">INVESTIGATIONS</a></li> <li><a href="/humour">HUMOUR</a></li> <li><a href="/past-issues">BACK ISSUES</a></li> <li><a href="/about">ABOUT US</a></li> <li><a href="/contact">CONTACT</a></li> </ul> </nav> </header> <main class="page-body"> <div class="content"> <section class="section"> <a href="/news"> <img src="https://images.cheesegratermagazine.org/archive/cg-invest-top.png" alt="Investigations"> </a> <div class="body"> <img src="https://images.cheesegratermagazine.org/archive/cg-detective.png"> <div class="content"> ${newsData?.articles.map((article) => renderTemplate`<article> <a${addAttribute(`/article/${article.slug}/#`, "href")}> <h3>${article.title}</h3> <p>${article.summary}</p> </a> </article>`)} </div> </div> </section> <section class="section"> <a href="/humour"> <img src="https://images.cheesegratermagazine.org/archive/cg-humour-top.png" alt="Humour"> </a> <div class="body"> <img src="https://images.cheesegratermagazine.org/archive/cg-jester.png"> <div class="content"> ${humourData?.articles.map((article) => renderTemplate`<article> <a${addAttribute(`/article/${article.slug}/#`, "href")}> <h3>${article.title}</h3> <p>${article.summary}</p> </a> </article>`)} </div> </div> </section> </div> <a${addAttribute(`https://print.cheesegratermagazine.org/${latestIssue.slug}.pdf`, "href")} target="_blank"> <img class="print-img"${addAttribute(`https://print.cheesegratermagazine.org/${latestIssue.slug}.png`, "src")}${addAttribute(`Print Edition ${latestIssue.name}`, "alt")}> </a> </main> <footer class="page-footer"> <p>
© The Cheese Grater Magazine Society, Students' Union UCL, 2/F Bloomsbury
      Theatre, 15 Gordon Street, London, WC1H 0AH<br>This is a faithful
      recreation of the <i>Cheese Grater</i> website circa 2012-2016.<br>Just
      goes to show how far we've come, eh?<br>For the original reference see
      this <a href="https://web.archive.org/web/20120724103754/http://www.cheesegratermagazine.org/" target="_blank">archived link</a>.
</p> </footer> </div>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/misc/Archive.astro", void 0);

const $$Archive = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ArchiveLayout", $$ArchiveLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Archive", $$Archive$1, {})} ` })}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/archive.astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
