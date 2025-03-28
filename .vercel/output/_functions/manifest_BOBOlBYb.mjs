import { d as decodeKey } from './chunks/astro/server_CwkvNt5L.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DSWQHtC6.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/","cacheDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/node_modules/.astro/","outDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/dist/","srcDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/src/","publicDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/public/","buildClientDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/dist/client/","buildServerDir":"file:///C:/Users/altam/OneDrive/Desktop/Lucas11%20Frontend/lucas11-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/callback.ts","pathname":"/api/callback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/register.ts","pathname":"/api/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/signin.ts","pathname":"/api/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/signout.ts","pathname":"/api/signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUDvVJiU.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUDvVJiU.css"}],"routeData":{"route":"/settings","isIndex":false,"type":"page","pattern":"^\\/settings\\/?$","segments":[[{"content":"settings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/settings.astro","pathname":"/settings","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUDvVJiU.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://lucas11.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/settings.astro",{"propagation":"none","containsHead":true}],["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/callback@_@ts":"pages/api/callback.astro.mjs","\u0000@astro-page:src/pages/api/register@_@ts":"pages/api/register.astro.mjs","\u0000@astro-page:src/pages/api/signin@_@ts":"pages/api/signin.astro.mjs","\u0000@astro-page:src/pages/api/signout@_@ts":"pages/api/signout.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/settings@_@astro":"pages/settings.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CXTXM6kC.mjs","\u0000@astrojs-manifest":"manifest_BOBOlBYb.mjs","@/components/ui/my-sidebar":"_astro/my-sidebar.Cqv9QTou.js","@astrojs/react/client.js":"_astro/client.SN4c9S7H.js","C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.B_wtga84.js","C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/components/posthog.astro?astro&type=script&index=0&lang.ts":"_astro/posthog.astro_astro_type_script_index_0_lang.CLVsJEkU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.documentElement.classList.add(\"dark\");"],["C:/Users/altam/OneDrive/Desktop/Lucas11 Frontend/lucas11-astro/src/components/posthog.astro?astro&type=script&index=0&lang.ts","(function(u,t){var p,i,s,g;t.__SV||(window.posthog=t,t._i=[],t.init=function(l,c,r){function _(n,e){var a=e.split(\".\");a.length==2&&(n=n[a[0]],e=a[1]),n[e]=function(){n.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(s=u.createElement(\"script\")).type=\"text/javascript\",s.crossOrigin=\"anonymous\",s.async=!0,s.src=c.api_host+\"/static/array.js\",(g=u.getElementsByTagName(\"script\")[0]).parentNode.insertBefore(s,g);var o=t;for(r!==void 0?o=t[r]=[]:r=\"posthog\",o.people=o.people||[],o.toString=function(n){var e=\"posthog\";return r!==\"posthog\"&&(e+=\".\"+r),n||(e+=\" (stub)\"),e},o.people.toString=function(){return o.toString(1)+\".people (stub)\"},p=\"capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId\".split(\" \"),i=0;i<p.length;i++)_(o,p[i]);t._i.push([l,c,r])},t.__SV=1)})(document,window.posthog||[]);posthog.init(void 0,{api_host:\"https://eu.i.posthog.com\",person_profiles:\"identified_only\"});"]],"assets":["/_astro/logo.zNpnLnkx.svg","/_astro/Discord-Symbol-White.B77MMf3i.svg","/_astro/index.DUDvVJiU.css","/logo.svg","/robots.txt","/_astro/client.SN4c9S7H.js","/_astro/index.BL4UB2kp.js","/_astro/my-sidebar.Cqv9QTou.js","/404.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"We6Ztuh+jLrOqU54k6SCta/zez4et9XpEs7ccddfp+k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
