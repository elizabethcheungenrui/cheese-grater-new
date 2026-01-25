import { getSupabaseClient } from "../lib/supabaseClient";

const supabase = getSupabaseClient();

export type PastIssue = {
  slug: string;
  name: string;
  coverUrl: string;
  pdfPath: string;
  href: string;
};

export async function getPrintEditions(): Promise<PastIssue[]> {
  const { data: files, error } = await supabase.storage
    .from("past-issues")
    .list("", {
      limit: 200,
      sortBy: { column: "name", order: "desc" },
    });

  if (error) throw error;

  const covers = files?.filter((f) => f.name.endsWith(".png")) ?? [];

  return covers.map((file) => {
    const slug = file.name.replace(".png", "");

    const { data } = supabase.storage
      .from("past-issues")
      .getPublicUrl(file.name);

    return {
      slug,
      name: slug,
      coverUrl: data.publicUrl,
      pdfPath: `${slug}.pdf`,
      href: `/past-issues/${slug}`,
    };
  });
}
