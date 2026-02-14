import { p as pool } from '../../chunks/connection_BNiGHa6Z.mjs';
export { renderers } from '../../renderers.mjs';

function buildCorsHeaders(origin = "https://alo-guild-page-production.up.railway.app") {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  return headers;
}
const OPTIONS = async ({ request }) => {
  const headers = buildCorsHeaders();
  return new Response(null, { headers, status: 204 });
};
const POST = async ({ request, clientAddress }) => {
  const headers = buildCorsHeaders();
  try {
    const formData = await request.formData();
    const nickInvitado = formData.get("nickInvitado")?.toString().trim();
    const nickInvitador = formData.get("nickInvitador")?.toString().trim();
    const rolDiscord = formData.get("rolDiscord")?.toString().trim().toUpperCase();
    if (!nickInvitado || !nickInvitador || !rolDiscord) {
      return new Response(JSON.stringify({ error: "Campos incompletos" }), { status: 400, headers });
    }
    if (nickInvitado.length > 30 || nickInvitador.length > 30 || rolDiscord.length > 50) {
      return new Response(JSON.stringify({ error: "Longitud inválida" }), { status: 400, headers });
    }
    const regex = /^[a-zA-Z0-9_\- ]+$/;
    if (!regex.test(nickInvitado) || !regex.test(nickInvitador)) {
      return new Response(JSON.stringify({ error: "Formato inválido" }), { status: 400, headers });
    }
    const [existing] = await pool.execute(
      "SELECT id FROM invitados WHERE nick_invitado = ?",
      [nickInvitado]
    );
    if (existing.length > 0) {
      return new Response(JSON.stringify({ error: "El invitado ya existe" }), { status: 409, headers });
    }
    const [rows] = await pool.execute(
      "SELECT COUNT(*) as total FROM invitados WHERE validar_invitacion = 1 and nick_invitador = ?",
      [nickInvitador]
    );
    const totalInvitaciones = rows[0].total;
    let limite = 0;
    if (rolDiscord === "GREMIO") {
      limite = 3;
    } else if (rolDiscord === "INVITADO") {
      limite = 2;
    } else {
      return new Response(JSON.stringify({ error: "Rol inválido" }), { status: 400, headers });
    }
    if (totalInvitaciones >= limite) {
      return new Response(
        JSON.stringify({ error: `Este invitador ya alcanzó el límite de ${limite} invitaciones` }),
        { status: 403, headers }
      );
    }
    await pool.execute(
      `INSERT INTO invitados
       (nick_invitado, nick_invitador, rol, ip_registro, created_at)
       VALUES (?, ?, ?, ?, NOW())`,
      [nickInvitado, nickInvitador, rolDiscord, clientAddress]
    );
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500, headers });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
