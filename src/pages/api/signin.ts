import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";
export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["github", "discord"];

  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: import.meta.env.CALLBACK_URL
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }

    return redirect(data.url);
  }

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/lucas11/signin");
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/lucas11/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/lucas11/",
  });
  return redirect("/lucas11/settings");
};