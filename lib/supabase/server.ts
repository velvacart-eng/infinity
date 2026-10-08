import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getServiceSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase URL and service role key must be configured");
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}
