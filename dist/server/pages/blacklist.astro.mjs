import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import 'clsx';
import { p as pool } from '../chunks/connection_BNiGHa6Z.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blacklist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blacklist;
  const admin = Astro2.cookies.get("admin");
  const [rows] = await pool.execute(`
  SELECT 
    id,
    nick_albion,
    nick_discord,
    razon,
    created_at
  FROM blacklist
  ORDER BY created_at DESC
`);
  if (!admin) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-ppxswbhd> <h1 class="titulo" data-astro-cid-ppxswbhd>Blacklist Registrados</h1> <div class="tabla-container" data-astro-cid-ppxswbhd> <table data-astro-cid-ppxswbhd> <thead data-astro-cid-ppxswbhd> <tr data-astro-cid-ppxswbhd> <th data-astro-cid-ppxswbhd>ID</th> <th data-astro-cid-ppxswbhd>Nick en Albion</th> <th data-astro-cid-ppxswbhd>Nick en Discord</th> <th data-astro-cid-ppxswbhd>Razón</th> <th data-astro-cid-ppxswbhd>Fecha</th> </tr> </thead> <tbody data-astro-cid-ppxswbhd> ${rows.map((row) => renderTemplate`<tr data-astro-cid-ppxswbhd> <td data-astro-cid-ppxswbhd>${row.id}</td> <td data-astro-cid-ppxswbhd>${row.nick_albion}</td> <td data-astro-cid-ppxswbhd>${row.nick_discord}</td> <td data-astro-cid-ppxswbhd>${row.razon}</td> <td data-astro-cid-ppxswbhd>${new Date(row.created_at).toLocaleDateString()}</td> </tr>`)} </tbody> </table> </div> </div>`;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/blacklist.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/blacklist.astro";
const $$url = "/blacklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blacklist,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
