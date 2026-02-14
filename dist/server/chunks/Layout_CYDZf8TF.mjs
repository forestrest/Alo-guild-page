import { e as createComponent, n as renderHead, r as renderTemplate, o as renderSlot, l as renderScript, h as createAstro } from './astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const admin = Astro2.cookies.get("admin");
  if (!admin) {
    return Astro2.redirect("/");
  }
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><title>Panel del Gremio</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${admin && renderTemplate`<header data-astro-cid-sckkx6r4> <nav data-astro-cid-sckkx6r4> <a href="/dashboard" data-astro-cid-sckkx6r4>Dashboard</a> <a href="/invitados" data-astro-cid-sckkx6r4>Invitados</a> <a href="/listas" data-astro-cid-sckkx6r4>Listas</a> <a href="/auditoria" data-astro-cid-sckkx6r4>Auditoría</a> <a href="/api/logout" id="logoutBtn" data-astro-cid-sckkx6r4>Cerrar sesión</a> </nav> </header>`} <div class="container" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/xampp/htdocs/pelados/pelados/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/xampp/htdocs/pelados/pelados/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
