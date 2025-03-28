import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_C9MIWrE0.mjs';
import { manifest } from './manifest_BOBOlBYb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/callback.astro.mjs');
const _page3 = () => import('./pages/api/register.astro.mjs');
const _page4 = () => import('./pages/api/signin.astro.mjs');
const _page5 = () => import('./pages/api/signout.astro.mjs');
const _page6 = () => import('./pages/register.astro.mjs');
const _page7 = () => import('./pages/settings.astro.mjs');
const _page8 = () => import('./pages/signin.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/callback.ts", _page2],
    ["src/pages/api/register.ts", _page3],
    ["src/pages/api/signin.ts", _page4],
    ["src/pages/api/signout.ts", _page5],
    ["src/pages/register.astro", _page6],
    ["src/pages/settings.astro", _page7],
    ["src/pages/signin.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6b666929-83a5-4a0c-b07d-48bcf98fea9a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
