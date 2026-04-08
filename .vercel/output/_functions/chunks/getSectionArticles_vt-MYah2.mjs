import { g as getSupabaseClient } from './supabaseClient_CuERSLEB.mjs';

const supabase = getSupabaseClient();
async function getSectionArticles(section, limit) {
  let query = supabase.from("articles").select("slug, title, summary, author, author_thumbnail, image_url, image_width, image_height, subsection, date_published").eq("section", section).order("date_published", { ascending: false });
  if (typeof limit === "number") {
    query = query.limit(limit);
  }
  const { data, error } = await query;
  if (error) throw error;
  return {
    section,
    articles: data
  };
}
async function getSubsectionArticles(section, subsection, limit) {
  let query = supabase.from("articles").select("*").eq("subsection", subsection).order("date_published", { ascending: false });
  const { data, error } = await query;
  if (error) throw error;
  return {
    section,
    articles: data
  };
}

export { getSubsectionArticles as a, getSectionArticles as g };
