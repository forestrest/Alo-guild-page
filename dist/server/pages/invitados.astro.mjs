import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ccV0Ncx2.mjs';
import { p as pool } from '../chunks/connection_BNiGHa6Z.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Invitados = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Invitados;
  const admin = Astro2.cookies.get("admin");
  const [rows] = await pool.execute(`
  SELECT 
    id,
    nick_invitado,
    nick_invitador,
    rol,
    ip_registro,
    created_at,
    validar_invitacion
  FROM invitados
  ORDER BY created_at DESC
`);
  if (!admin) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Invitados", "data-astro-cid-xjv3hliw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-xjv3hliw> <h1 class="titulo" data-astro-cid-xjv3hliw>Invitados Registrados</h1> <div class="tabla-container" data-astro-cid-xjv3hliw> <table data-astro-cid-xjv3hliw> <thead data-astro-cid-xjv3hliw> <tr data-astro-cid-xjv3hliw> <th data-astro-cid-xjv3hliw>ID</th> <th data-astro-cid-xjv3hliw>Invitado</th> <th data-astro-cid-xjv3hliw>Invitador</th> <th data-astro-cid-xjv3hliw>Rol</th> <th data-astro-cid-xjv3hliw>IP registrada</th> <th data-astro-cid-xjv3hliw>Fecha</th> </tr> </thead> <tbody data-astro-cid-xjv3hliw> ${rows.map((row) => renderTemplate`<tr data-astro-cid-xjv3hliw> <td data-astro-cid-xjv3hliw>${row.id}</td> <td data-astro-cid-xjv3hliw>${row.nick_invitado}</td> <td data-astro-cid-xjv3hliw>${row.nick_invitador}</td> <td data-astro-cid-xjv3hliw>${row.rol}</td> <td data-astro-cid-xjv3hliw>${row.ip_registro}</td> <td data-astro-cid-xjv3hliw>${new Date(row.created_at).toLocaleDateString()}</td> </tr>`)} </tbody> </table> </div> </div> ` })}`;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/invitados.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/invitados.astro";
const $$url = "/invitados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Invitados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
