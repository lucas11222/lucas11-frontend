import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwkvNt5L.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../chunks/card_XNVS2cLn.mjs';
import { $ as $$Layout, B as Button } from '../chunks/Layout_HloBeVFf.mjs';
import { s as supabase } from '../chunks/supabase_BA5FEgI2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lucas11.vercel.app");
const prerender = false;
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  const user = session.data.user?.user_metadata.name;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center h-screen w-screen flex-col scrollbar-hide"> ${renderComponent($$result2, "Card", Card, { "className": "w-100" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-center text-3xl" }, { "default": async ($$result5) => renderTemplate`Settings` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center text-xl" }, { "default": async ($$result5) => renderTemplate`
Welcome to the settings page! heres you can control your user
` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": async ($$result4) => renderTemplate` <p class="text-center text-xl">User email.</p> <p class="text-center text-xs">${email}</p> ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": async ($$result4) => renderTemplate` <p class="text-center text-xl">User name.</p> <p class="text-center text-xs">${user}</p> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, {}, { "default": async ($$result4) => renderTemplate` <form action="/api/signout"> ${renderComponent($$result4, "Button", Button, { "type": "submit" }, { "default": async ($$result5) => renderTemplate`Sign out` })} </form> ` })} ` })} </div> ` })}`;
}, "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/settings.astro", void 0);

const $$file = "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/settings.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
