<!-- /js/supabase.js -->
<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

  // TODO: wstaw swoje dane z Supabase -> Project Settings -> API
  const SUPABASE_URL = "https://adhrcsrzadufvktedpvn.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaHJjc3J6YWR1ZnZrdGVkcHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NzA2NjgsImV4cCI6MjA4NjI0NjY2OH0.UhO-Fwywb2S0aOOQptFIjVBXsvFDSiSIa6WKv8D4Egs";

  export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
</script>
