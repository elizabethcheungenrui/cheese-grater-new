import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const supabaseUrl = "https://lrhddyosfvnhpxojsjpa.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyaGRkeW9zZnZuaHB4b2pzanBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDMyODQsImV4cCI6MjA3OTU3OTI4NH0.AmLUpIGec9rT_JEY5A5Ju6SXkGoSL3Fn8xyWyAVXltg";
  return createClient(supabaseUrl, supabaseAnonKey);
}

export { getSupabaseClient as g };
