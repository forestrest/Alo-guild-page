import { p as pool } from '../../chunks/connection_BNiGHa6Z.mjs';
export { renderers } from '../../renderers.mjs';

const OPTIONS = async () => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  return new Response(null, { status: 204, headers });
};
const POST = async ({ request }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  try {
    const formData = await request.formData();
    const nickAlbion = formData.get("nickAlbion")?.toString().trim().toUpperCase();
    const nickDiscord = formData.get("nickDiscord")?.toString().trim();
    const razon = formData.get("razon")?.toString().trim();
    if (!nickAlbion || !razon) {
      return new Response(
        JSON.stringify({ error: "Campos obligatorios incompletos" }),
        { status: 400, headers }
      );
    }
    if (razon.length > 250) {
      return new Response(
        JSON.stringify({ error: "La razón no puede superar 250 caracteres" }),
        { status: 400, headers }
      );
    }
    await pool.execute(
      `INSERT INTO blacklist 
       (nick_albion, nick_discord, razon, created_at)
       VALUES (?, ?, ?, NOW())`,
      [nickAlbion, nickDiscord || null, razon]
    );
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error interno" }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
