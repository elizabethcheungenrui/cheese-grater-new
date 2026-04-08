import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DyEllbhR.mjs';
import { manifest } from './manifest_DsndOkCz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/archive.astro.mjs');
const _page5 = () => import('./pages/article/_slug_.astro.mjs');
const _page6 = () => import('./pages/author/_slug_.astro.mjs');
const _page7 = () => import('./pages/awards.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/get-involved.astro.mjs');
const _page10 = () => import('./pages/graters.astro.mjs');
const _page11 = () => import('./pages/humour.astro.mjs');
const _page12 = () => import('./pages/life-members.astro.mjs');
const _page13 = () => import('./pages/news.astro.mjs');
const _page14 = () => import('./pages/past-editors.astro.mjs');
const _page15 = () => import('./pages/past-issues/_slug_.astro.mjs');
const _page16 = () => import('./pages/past-issues.astro.mjs');
const _page17 = () => import('./pages/podcast.astro.mjs');
const _page18 = () => import('./pages/resources.astro.mjs');
const _page19 = () => import('./pages/robots.txt.astro.mjs');
const _page20 = () => import('./pages/search.astro.mjs');
const _page21 = () => import('./pages/tips.astro.mjs');
const _page22 = () => import('./pages/voices.astro.mjs');
const _page23 = () => import('./pages/welfare.astro.mjs');
const _page24 = () => import('./pages/_year_/_month_/_date_/_slug_.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about.mdx", _page3],
    ["src/pages/archive.astro", _page4],
    ["src/pages/article/[slug].astro", _page5],
    ["src/pages/author/[slug].astro", _page6],
    ["src/pages/awards.mdx", _page7],
    ["src/pages/contact.mdx", _page8],
    ["src/pages/get-involved.mdx", _page9],
    ["src/pages/graters.astro", _page10],
    ["src/pages/humour.astro", _page11],
    ["src/pages/life-members.mdx", _page12],
    ["src/pages/news.astro", _page13],
    ["src/pages/past-editors.mdx", _page14],
    ["src/pages/past-issues/[slug].ts", _page15],
    ["src/pages/past-issues.astro", _page16],
    ["src/pages/podcast.astro", _page17],
    ["src/pages/resources.mdx", _page18],
    ["src/pages/robots.txt.ts", _page19],
    ["src/pages/search.astro", _page20],
    ["src/pages/tips.mdx", _page21],
    ["src/pages/voices.astro", _page22],
    ["src/pages/welfare.mdx", _page23],
    ["src/pages/[year]/[month]/[date]/[slug].astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "34afc68e-af2f-4c01-b98d-4e0909cd66b0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
