import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Dto7fIJ9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ccV0Ncx2.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const admin = Astro2.cookies.get("admin");
  if (!admin) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-container" data-astro-cid-3nssi2tu> <h1 data-astro-cid-3nssi2tu>Bienvenido al Panel, Pelón</h1> </div> ` })} `;
}, "C:/xampp/htdocs/pelados/pelados/src/pages/dashboard.astro", void 0);

const $$file = "C:/xampp/htdocs/pelados/pelados/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
