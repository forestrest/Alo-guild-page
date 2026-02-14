import { e as createComponent, n as renderHead, r as renderTemplate, l as renderScript, h as createAstro } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                              */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$RegistroInvitados = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RegistroInvitados;
  const success = Astro2.url.searchParams.get("success");
  return renderTemplate`<html lang="es" data-astro-cid-abzyy2wm> <head><meta charset="UTF-8"><title>Registro de Invitados</title><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-abzyy2wm> <div class="register-container" data-astro-cid-abzyy2wm> <h1 data-astro-cid-abzyy2wm>Registro del Reino</h1> <form id="registroForm" autocomplete="off" data-astro-cid-abzyy2wm> <input type="text" name="nickInvitado" placeholder="Nick del Invitado" maxlength="30" required data-astro-cid-abzyy2wm> <input type="text" name="nickInvitador" placeholder="Nick del Invitador" maxlength="30" required data-astro-cid-abzyy2wm> <select name="rolDiscord" id="rolDiscord" data-astro-cid-abzyy2wm> <option value="" data-astro-cid-abzyy2wm>Rol en Discord de Alopecia</option> <option value="GREMIO" data-astro-cid-abzyy2wm>GREMIO</option> <option value="INVITADO" data-astro-cid-abzyy2wm>INVITADO</option> </select> <button type="submit" data-astro-cid-abzyy2wm>Registrar Guerrero</button> </form> ${success && renderTemplate`<div class="success-message" data-astro-cid-abzyy2wm>
Invitado registrado con éxito ⚔️
</div>`} <div class="footer-text" data-astro-cid-abzyy2wm>
ALOPECIA • Sistema Público
</div> <div class="footer-text" data-astro-cid-abzyy2wm>
Iniciar sesión <a href="/" data-astro-cid-abzyy2wm>Click Here</a> </div> </div> ${renderScript($$result, "C:/xampp/htdocs/pelados/pelados/src/pages/registro_invitados.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/registro_invitados.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/registro_invitados.astro";
const $$url = "/registro_invitados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegistroInvitados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
