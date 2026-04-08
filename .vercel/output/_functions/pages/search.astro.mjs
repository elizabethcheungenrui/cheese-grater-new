import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_7FqapG.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { g as getSupabaseClient } from '../chunks/supabaseClient_CuERSLEB.mjs';
import { C as CCard, f as formatDate } from '../chunks/CCard_Bo47fINw.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function SearchClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q")?.trim() ?? "";
    setQuery(q);
  }, []);
  useEffect(() => {
    if (!query) return;
    let cancelled = false;
    async function runSearch() {
      setLoading(true);
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.rpc("search_articles", { query });
      if (!cancelled && !error && data) {
        setResults(data);
      }
      setLoading(false);
    }
    runSearch();
    return () => {
      cancelled = true;
    };
  }, [query]);
  return /* @__PURE__ */ jsxs("section", { className: "search-page", children: [
    /* @__PURE__ */ jsx("h1", { children: query ? `Search results for “${query}”` : "Search" }),
    loading && /* @__PURE__ */ jsx("p", { children: "Searching…" }),
    !loading && query && results.length === 0 && /* @__PURE__ */ jsx("p", { children: "No results found." }),
    /* @__PURE__ */ jsx("ul", { className: "card-grid", children: results.map((article) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      CCard,
      {
        slug: article.slug,
        section: article.section,
        title: article.title,
        image: article.image_url ?? article.author_thumbnail,
        tag: article.subsection,
        date: formatDate(article.date_published),
        category: "subpage"
      }
    ) }, article.id)) })
  ] });
}

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Search", "}": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchClient", SearchClient, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/misc/SearchClient", "client:component-export": "default" })} ` })}`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/search.astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
