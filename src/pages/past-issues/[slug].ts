import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;

  if (!slug) {
    return new Response("Missing print edition", { status: 400 });
  }

  const publicUrl =
    `https://lrhddyosfvnhpxojsjpa.supabase.co/storage/v1/object/public/past-issues/${slug}.pdf`;

  // Hard redirect to Supabase download URL
  return Response.redirect(publicUrl, 302);
};
