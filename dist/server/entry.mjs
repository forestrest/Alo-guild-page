import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CwA4EJvu.mjs';
import { manifest } from './manifest_BWDfLXMx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/blacklist.astro.mjs');
const _page2 = () => import('./pages/api/invitados.astro.mjs');
const _page3 = () => import('./pages/api/login.astro.mjs');
const _page4 = () => import('./pages/api/logout.astro.mjs');
const _page5 = () => import('./pages/api/proxyblacklist.astro.mjs');
const _page6 = () => import('./pages/api/whitelist.astro.mjs');
const _page7 = () => import('./pages/auditoria.astro.mjs');
const _page8 = () => import('./pages/blacklist.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/invitados.astro.mjs');
const _page11 = () => import('./pages/listas.astro.mjs');
const _page12 = () => import('./pages/registro_invitados.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/blacklist.ts", _page1],
    ["src/pages/api/invitados.ts", _page2],
    ["src/pages/api/login.ts", _page3],
    ["src/pages/api/logout.ts", _page4],
    ["src/pages/api/proxyBlacklist.ts", _page5],
    ["src/pages/api/whitelist.ts", _page6],
    ["src/pages/auditoria.astro", _page7],
    ["src/pages/blacklist.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/invitados.astro", _page10],
    ["src/pages/listas.astro", _page11],
    ["src/pages/registro_invitados.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/xampp/htdocs/pelados/pelados/dist/client/",
    "server": "file:///C:/xampp/htdocs/pelados/pelados/dist/server/",
    "host": "0.0.0.0",
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
