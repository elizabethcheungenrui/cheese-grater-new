import { getSupabaseClient } from "../lib/supabaseClient";

const supabase = getSupabaseClient();

export type PastIssue = {
  name: string;
  url: string;
  href: string;
};

export async function getPrintEditions(): Promise<PastIssue[]> {
  const { data: files, error } = await supabase.storage
    .from("past-issues")
    .list("", {
      limit: 200,
      sortBy: { column: "name", order: "desc" },
    });

  if (error) {
    throw error;
  }

  return (
    files
      ?.filter((file) => file.name.endsWith(".png"))
      .map((file) => {
        const slug = file.name.replace(".png", "");

        const { data } = supabase.storage
          .from("past-issues")
          .getPublicUrl(file.name);

        return {
          name: slug,
          url: data.publicUrl,
          href: `/print/${slug}`
        };
      }) ?? []
  );
}
