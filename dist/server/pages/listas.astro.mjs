import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ccV0Ncx2.mjs';
import { p as pool } from '../chunks/connection_BNiGHa6Z.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Listas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Listas;
  const admin = Astro2.cookies.get("admin");
  const [rows] = await pool.execute(`
  SELECT id, nick_albion, nick_discord, razon, created_at
  FROM blacklist
  ORDER BY created_at DESC
`);
  if (!admin) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Listar", "data-astro-cid-2sg3zdut": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<button id="abrirModal" class="btn-medieval" data-astro-cid-2sg3zdut>Añadir a Blacklist</button> <div id="modalBlacklist" class="modal" data-astro-cid-2sg3zdut> <div class="modal-content" data-astro-cid-2sg3zdut> <h2 data-astro-cid-2sg3zdut>Registro en Blacklist</h2> <form id="blacklistForm" data-astro-cid-2sg3zdut> <input type="text" name="nickAlbion" placeholder="Nick Albion" required maxlength="30" data-astro-cid-2sg3zdut> <input type="text" name="nickDiscord" placeholder="Nick Discord (Opcional)" maxlength="30" data-astro-cid-2sg3zdut> <input type="text" name="razon" placeholder="Razón" required maxlength="500" data-astro-cid-2sg3zdut> <button type="submit" class="btn-registrar" data-astro-cid-2sg3zdut>Registrar</button> <button type="button" id="cerrarModal" class="btn-cancel" data-astro-cid-2sg3zdut>Cancelar</button> </form> <div id="mensajeBlacklist" data-astro-cid-2sg3zdut></div> </div> </div> <div class="dashboard-container" data-astro-cid-2sg3zdut> <h1 class="titulo" data-astro-cid-2sg3zdut>Blacklist Registrados</h1> <div class="tabla-container" data-astro-cid-2sg3zdut> <table data-astro-cid-2sg3zdut> <thead data-astro-cid-2sg3zdut> <tr data-astro-cid-2sg3zdut> <th data-astro-cid-2sg3zdut>ID</th> <th data-astro-cid-2sg3zdut>Nick en Albion</th> <th data-astro-cid-2sg3zdut>Nick en Discord</th> <th data-astro-cid-2sg3zdut>Razón</th> <th data-astro-cid-2sg3zdut>Fecha</th> </tr> </thead> <tbody id="tablaBlacklist" data-astro-cid-2sg3zdut> ${rows.map((row) => renderTemplate`<tr data-astro-cid-2sg3zdut> <td data-astro-cid-2sg3zdut>${row.id}</td> <td data-astro-cid-2sg3zdut>${row.nick_albion}</td> <td data-astro-cid-2sg3zdut>${row.nick_discord}</td> <td data-astro-cid-2sg3zdut>${row.razon}</td> <td data-astro-cid-2sg3zdut>${new Date(row.created_at).toLocaleDateString()}</td> </tr>`)} </tbody> </table> </div> </div> ` })} ${renderScript($$result, "C:/xampp/htdocs/pelados/pelados/src/pages/listas.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/listas.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/listas.astro";
const $$url = "/listas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Listas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
