import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwkvNt5L.mjs';
import { $ as $$Layout, B as Button } from '../chunks/Layout_HloBeVFf.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../chunks/card_XNVS2cLn.mjs';
import { L as Label, I as Input } from '../chunks/label_BISZAMWR.mjs';
import { Mail } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lucas11.vercel.app");
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center h-screen w-screen flex-col scrollbar-hide"> ${renderComponent($$result2, "Card", Card, { "className": "w-100" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-center text-3xl" }, { "default": ($$result5) => renderTemplate`Sign in` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center" }, { "default": ($$result5) => renderTemplate`New here? <a href="/register">Create an account</a>` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": ($$result4) => renderTemplate` <form action="/api/signin" method="post"> ${renderComponent($$result4, "Label", Label, { "htmlFor": "email" }, { "default": ($$result5) => renderTemplate`Email` })} ${renderComponent($$result4, "Input", Input, { "type": "email", "name": "email", "id": "email" })} ${renderComponent($$result4, "Label", Label, { "htmlFor": "password" }, { "default": ($$result5) => renderTemplate`Password` })} ${renderComponent($$result4, "Input", Input, { "type": "password", "name": "password", "id": "password" })} </form> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, {}, { "default": ($$result4) => renderTemplate` <form action="/api/signin" method="post"> ${renderComponent($$result4, "Button", Button, { "type": "submit" }, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "Mail", Mail, {})} Login with Email` })} ${renderComponent($$result4, "Button", Button, { "value": "github", "name": "provider", "type": "submit" }, { "default": ($$result5) => renderTemplate`Sign in with GitHub.` })} ${renderComponent($$result4, "Button", Button, { "value": "discord", "name": "provider", "type": "submit" }, { "default": ($$result5) => renderTemplate`Sign in with Discord.` })} </form> ` })} ` })} </div> ` })}`;
}, "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/signin.astro", void 0);

const $$file = "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
