import { e as createComponent, n as renderHead, l as renderScript, r as renderTemplate } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><title>Login Administrativo</title><!-- Fuente medieval --><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <div class="login-container" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Panel del Reino</h1> <form id="loginForm" data-astro-cid-j7pv25f6> <input name="username" placeholder="Usuario" required data-astro-cid-j7pv25f6> <input name="password" type="password" placeholder="Password" required data-astro-cid-j7pv25f6> <button data-astro-cid-j7pv25f6>Entrar al Reino</button> </form> <div class="footer-text" data-astro-cid-j7pv25f6>
Sistema Administrativo
</div> <div class="footer-text" data-astro-cid-j7pv25f6>
Blacklist Alopecia <a href="/blacklist" data-astro-cid-j7pv25f6>Click Here</a> </div> <div class="footer-text" data-astro-cid-j7pv25f6>
Invitar a un amigo <a href="/registro_invitados" data-astro-cid-j7pv25f6>Click Here</a> </div> </div> ${renderScript($$result, "C:/xampp/htdocs/pelados/pelados/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
