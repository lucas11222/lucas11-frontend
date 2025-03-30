// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
export const prerender = false;
export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/lucas11/" });
  cookies.delete("sb-refresh-token", { path: "/lucas11/" });
  return redirect("/lucas11/settings");
};