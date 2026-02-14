import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ccV0Ncx2.mjs';
import { p as pool } from '../chunks/connection_BNiGHa6Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Auditoria = createComponent(async ($$result, $$props, $$slots) => {
  const [logs] = await pool.query(`
  SELECT a.*, ad.username 
  FROM auditoria a
  JOIN admins ad ON ad.id = a.admin_id
  ORDER BY a.created_at DESC
`);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card"> <h2>Registro de Auditoría</h2> <table> <thead> <tr> <th>Fecha</th> <th>Admin</th> <th>Acción</th> <th>Tabla</th> <th>Detalle</th> </tr> </thead> <tbody> ${logs.map((log) => renderTemplate`<tr> <td>${log.created_at}</td> <td>${log.username}</td> <td>${log.accion}</td> <td>${log.tabla_afectada}</td> <td>${log.detalles}</td> </tr>`)} </tbody> </table> </div> ` })}`;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/auditoria.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/auditoria.astro";
const $$url = "/auditoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Auditoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
