interface ImportMetaEnv {
[x: string]: any
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly CALLBACK_URL: string
  readonly POSTHOG_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}