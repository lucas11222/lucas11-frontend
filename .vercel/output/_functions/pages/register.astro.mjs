import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwkvNt5L.mjs';
import { $ as $$Layout, B as Button } from '../chunks/Layout_HloBeVFf.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../chunks/card_XNVS2cLn.mjs';
import { L as Label, I as Input } from '../chunks/label_BISZAMWR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://lucas11.vercel.app");
const prerender = false;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/settings");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center h-screen w-screen flex-col scrollbar-hide"> ${renderComponent($$result2, "Card", Card, { "className": "w-100" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-center text-3xl" }, { "default": ($$result5) => renderTemplate`Register` })} ${renderComponent($$result4, "CardDescription", CardDescription, { "className": "text-center" }, { "default": ($$result5) => renderTemplate`Already have an account? <a href="/signin">Sign in</a>` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, {}, { "default": ($$result4) => renderTemplate` <form action="/api/register" method="post"> ${renderComponent($$result4, "Label", Label, { "htmlFor": "email" }, { "default": ($$result5) => renderTemplate`Email` })} ${renderComponent($$result4, "Input", Input, { "type": "email", "name": "email", "id": "email" })} ${renderComponent($$result4, "Label", Label, { "htmlFor": "password" }, { "default": ($$result5) => renderTemplate`Password` })} ${renderComponent($$result4, "Input", Input, { "type": "password", "name": "password", "id": "password" })} ${renderComponent($$result4, "Button", Button, { "type": "submit", "className": "" }, { "default": ($$result5) => renderTemplate`Register` })} </form> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, {}, { "default": ($$result4) => renderTemplate` <form action="/api/register" method="post"> ${renderComponent($$result4, "Button", Button, { "type": "submit", "className": "" }, { "default": ($$result5) => renderTemplate`Register` })} </form> ` })} ` })} </div> ` })}`;
}, "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/register.astro", void 0);

const $$file = "C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
