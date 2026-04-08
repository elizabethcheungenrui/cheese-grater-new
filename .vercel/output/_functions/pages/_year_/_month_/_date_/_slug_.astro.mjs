import { d as createAstro, c as createComponent } from '../../../../chunks/astro/server_CunD4GDZ.mjs';
import 'piccolore';
import 'clsx';
import { g as getSupabaseClient } from '../../../../chunks/supabaseClient_CuERSLEB.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://cheesegratermagazine.org");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { year, month, date, slug } = Astro2.params;
  const canonicalSlug = `${year}-${month}-${date}-${slug}`;
  const supabase = getSupabaseClient();
  const { data } = await supabase.from("articles").select("slug").eq("slug", canonicalSlug).maybeSingle();
  console.log(canonicalSlug);
  if (data) {
    return Astro2.redirect(`/article/${canonicalSlug}`, 301);
  }
  return Astro2.redirect(
    `https://old.cheesegratermagazine.org/${year}/${month}/${date}/${slug}`,
    307
  );
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/[year]/[month]/[date]/[slug].astro", void 0);

const $$file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/[year]/[month]/[date]/[slug].astro";
const $$url = "/[year]/[month]/[date]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
