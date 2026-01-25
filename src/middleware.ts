import { createClient } from "@supabase/supabase-js";
import type { MiddlewareHandler } from "astro";

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
);

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Skip already-canonical paths
  if (path.startsWith("/article/")) {
    return next();
  }

  // Look up old WP link
  const { data } = await supabase
    .from("articles")
    .select("slug")
    .eq("link", path)
    .maybeSingle();

  if (data?.slug) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `/article/${data.slug}`,
      },
    });
  }

  return next();
};
