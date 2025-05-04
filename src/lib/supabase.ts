import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://eerhkevdqolhculinrij.supabase.co",
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
    },
  },
);