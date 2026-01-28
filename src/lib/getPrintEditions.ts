import { getSupabaseClient } from "../lib/supabaseClient";
const supabase = getSupabaseClient();

export type PastIssue = {
  id: string;
  name: string;
  slug: string;
};

export async function getPrintEditions(): Promise<PastIssue[]> {
  const { data, error } = await supabase
    .from("past-issues")
    .select("*")
    .order("name", { ascending: false });

  if (error) throw error;

  return data as PastIssue[];
}
