import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B_7FqapG.mjs';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_CuERSLEB.mjs';
import { C as CCard, f as formatDate } from '../../chunks/CCard_Bo47fINw.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://cheesegratermagazine.org");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const supabase = getSupabaseClient();
  const { slug } = Astro2.params;
  const { data: author, error: authorError } = await supabase.from("authors").select("*").eq("slug", slug).single();
  if (authorError || !author) {
    throw new Error("Author not found");
  }
  const { data: articles, error: articlesError } = await supabase.from("article_authors").select(`articles (*)`).eq("author_id", author.id).order("date_published", { referencedTable: "articles", ascending: false });
  if (articlesError) {
    throw articlesError;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${author.name} - The Cheese Grater Magazine` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="search-page"> <h1>${`All articles by ${author.name}: ${articles?.length ?? 0} articles`}</h1> <ul class="card-grid"> ${articles?.map(({ articles: article }) => renderTemplate`<li> ${renderComponent($$result2, "CCard", CCard, { "slug": article.slug, "section": article.section, "title": article.title, "image": article.image_url ?? article.author_thumbnail, "tag": article.subsection, "date": formatDate(article.date_published), "category": "subpage" })} </li>`)} </ul> </section> ` })}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/author/[slug].astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/author/[slug].astro";
const $$url = "/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
