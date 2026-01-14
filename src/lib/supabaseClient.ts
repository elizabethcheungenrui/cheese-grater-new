import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY!;
  return createClient(supabaseUrl, supabaseAnonKey);
}
