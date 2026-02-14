export { renderers } from '../../renderers.mjs';

async function post({ request }) {
  try {
    const json = await request.json();
    const formData = new FormData();
    for (const key in json) {
      if (json[key] !== null && json[key] !== void 0) {
        formData.append(key, json[key]);
      }
    }
    const res = await fetch("https://alo-guild-page-production.up.railway.app/api/blacklist", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
