import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://eerhkevdqolhculinrij.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlcmhrZXZkcW9saGN1bGlucmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDM1NDgsImV4cCI6MjA1NzcxOTU0OH0.zGA3FV5F5LIMBCTZKRX6zQ9Dcav53MqbrkIvRW59hw8",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

export { supabase as s };
