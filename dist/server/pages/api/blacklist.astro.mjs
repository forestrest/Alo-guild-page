import { p as pool } from '../../chunks/connection_DYy2Rla8.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nickAlbion = formData.get("nickAlbion")?.toString().trim().toUpperCase();
    const nickDiscord = formData.get("nickDiscord")?.toString().trim();
    const razon = formData.get("razon")?.toString().trim();
    if (!nickAlbion || !razon) {
      return new Response(
        JSON.stringify({ error: "Campos obligatorios incompletos" }),
        { status: 400 }
      );
    }
    if (razon.length > 250) {
      return new Response(
        JSON.stringify({ error: "La razón no puede superar 250 caracteres" }),
        { status: 400 }
      );
    }
    await pool.execute(
      `INSERT INTO Blacklist 
       (nick_albion, nick_discord, razon, created_at)
       VALUES (?, ?, ?, NOW())`,
      [nickAlbion, nickDiscord || null, razon]
    );
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error interno" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
