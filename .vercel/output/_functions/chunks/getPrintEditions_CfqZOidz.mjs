import { g as getSupabaseClient } from './supabaseClient_CuERSLEB.mjs';

const supabase = getSupabaseClient();
async function getPrintEditions() {
  const { data, error } = await supabase.from("past-issues").select("*").order("name", { ascending: false });
  if (error) throw error;
  return data;
}

export { getPrintEditions as g };
