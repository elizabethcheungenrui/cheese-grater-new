import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, a as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B_7FqapG.mjs';
/* empty css                                     */
import { f as formatDate, C as CCard } from '../../chunks/CCard_Bo47fINw.mjs';
import { M as MBCard } from '../../chunks/MBCard_uisX_esf.mjs';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_CuERSLEB.mjs';
import { a as getSubsectionArticles } from '../../chunks/getSectionArticles_vt-MYah2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://cheesegratermagazine.org");
const $$ArticleContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleContent;
  const { article, isEditor } = Astro2.props;
  const data = await getSubsectionArticles(article.section, article.subsection);
  const filtered = data.articles.filter((a) => a.slug !== article.slug);
  const dataTop = filtered.slice(0, 4);
  const dataBottom = filtered.slice(4, 8);
  const supabase = getSupabaseClient();
  const { data: authorLinks } = await supabase.from("article_authors").select(`
    authors (
      id,
      name,
      slug
    )
  `).eq("article_id", article.id);
  return renderTemplate`${maybeRenderHead()}<article class="article-container"> <div class="container-main"> <main class="main-article"> <header class="main-heading"> <p class="date"> <a${addAttribute(`/${article.section.toLowerCase()}`, "href")} class="section-link"> ${article.subsection} </a> ${" / "} ${formatDate(article.date_published)} </p> <h1>${article.title}</h1> </header> <section class="main-content"> ${article.summary && renderTemplate`<h2>${unescapeHTML(article.summary)}</h2>`} <address class="author-box"> <img class="author-image"${addAttribute(article.author_thumbnail ?? "https://images.cheesegratermagazine.org/author_thumbnails/cg_author.jpeg", "src")}${addAttribute(article.author, "alt")} loading="lazy"> <div class="author-text"> <span class="author"> ${authorLinks?.length ? authorLinks.map(({ authors: author }, i) => {
    const total = authorLinks.length;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a${addAttribute(`/author/${author.slug}`, "href")}>${author.name}</a> ${total > 1 && i < total - 2 && ", "}${total > 1 && i === total - 2 && "& "}` })}`;
  }) : article.author} </span> <span class="role">${article.role}</span> </div> </address> ${article.image_url && renderTemplate`<img${addAttribute(article.image_url, "src")}${addAttribute(article.image_caption || "", "alt")}>`} ${article.image_caption && renderTemplate`<p class="caption">${article.image_caption}</p>`} ${article.content && renderTemplate`<div class="article-body">${unescapeHTML(article.content)}</div>`} </section> </main> ${!isEditor && renderTemplate`<aside class="more-article"> <span class="readmore"> ${article.section === "Podcast" ? "Listen to more" : "Read more"} </span> <div class="article-row desktop-only"> ${dataTop.map((a) => renderTemplate`${renderComponent($$result, "CCard", CCard, { "slug": a.slug, "section": data.section, "title": a.title, "image": a.image_url ?? a.author_thumbnail, "tag": a.subsection, "date": formatDate(a.date_published), "category": "subpage" })}`)} </div> <div class="article-row desktop-only"> ${dataBottom.map((a) => renderTemplate`${renderComponent($$result, "CCard", CCard, { "slug": a.slug, "section": data.section, "title": a.title, "image": a.image_url ?? a.author_thumbnail, "tag": a.subsection, "date": formatDate(a.date_published), "category": "subpage" })}`)} </div> <div class="article-row mobile-only"> ${dataTop.map((a) => renderTemplate`${renderComponent($$result, "MBCard", MBCard, { "slug": a.slug, "section": data.section, "title": a.title, "image": a.image_url ?? a.author_thumbnail, "tag": a.subsection, "date": formatDate(a.date_published), "articlecontent": true, ";": true })}`)} </div> </aside>`} </div> ${!isEditor && renderTemplate`<aside class="container-side"> <div class="contact-newsletter"> <span class="side-header">Got a story for us?</span> <p>
If you have something you want to share with our journalists, send
            us a tip via our
<a href="https://instagram.com/uclcheesegrater" target="_blank"> ${" "}
socials
</a>
,<a href="/get-involved"> email</a>, or our
<a href="/tips"> anonymous webform</a>.
</p> </div> </aside>`} </article>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/article/ArticleContent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cheesegratermagazine.org");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const supabase = getSupabaseClient();
  const { slug } = Astro2.params;
  const { data: article, error } = await supabase.from("articles").select("*").eq("slug", slug).single();
  if (error || !article) {
    throw new Error("Article not found");
  }
  function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  const summary = article.summary ? stripHtml(article.summary) : "";
  const imageUrl = article.image_url ?? "";
  const canonicalUrl = `https://cheesegratermagazine.org/article/${article.slug}/`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${article.title} - The Cheese Grater Magazine`, "description": summary }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "ArticleContent", $$ArticleContent, { "article": article, "isEditor": false })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <meta property="og:type" content="article"> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url"', '> <meta property="og:image"', '> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="twitter:image"', '> <script type="application/ld+json">', '<\/script> <link rel="canonical"', "> "])), addAttribute(article.title, "content"), addAttribute(summary, "content"), addAttribute(canonicalUrl, "content"), addAttribute(imageUrl, "content"), addAttribute(article.title, "content"), addAttribute(summary, "content"), addAttribute(imageUrl, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": canonicalUrl,
    "headline": article.title,
    "description": summary,
    "datePublished": article.date_published,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Cheese Grater",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.cheesegratermagazine.org/logos/cg_cropped.jpeg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    ...imageUrl && {
      image: imageUrl
    }
  })), addAttribute(canonicalUrl, "href")) })}` })}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/article/[slug].astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/article/[slug].astro";
const $$url = "/article/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
