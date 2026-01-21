import type { APIRoute } from "astro";
import { getSupabaseClient } from "../../lib/supabaseClient";

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;

  if (!slug) {
    return new Response("Missing print edition", { status: 400 });
  }

  const supabase = getSupabaseClient();

  // Reconstruct the PDF path from the slug
  // Must match how files are stored in Supabase
  const pdfPath = `${slug}.pdf`;

  const { data, error } = await supabase.storage
    .from("past-issues")
    .createSignedUrl(pdfPath, 60, {
      download: `${slug}.pdf`,
    });

  if (error || !data) {
    console.error("Failed to create signed URL:", error);
    return new Response("Print edition not found", { status: 404 });
  }

  // Hard redirect to Supabase download URL
  return Response.redirect(data.signedUrl, 302);
};
