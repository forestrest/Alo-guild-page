import type { APIRoute } from "astro";
import { pool } from "../../db/connection";

// 🔧 Función para construir headers dinámicos
function buildCorsHeaders(origin: string = "https://alo-guild-page-production.up.railway.app") {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  return headers;
}

export const OPTIONS: APIRoute = async ({ request }) => {
  const headers = buildCorsHeaders();
  return new Response(null, { headers, status: 204 });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const headers = buildCorsHeaders();

  try {
    const formData = await request.formData();

    const nickInvitado = formData.get("nickInvitado")?.toString().trim();
    const nickInvitador = formData.get("nickInvitador")?.toString().trim();
    const rolDiscord = formData.get("rolDiscord")?.toString().trim().toUpperCase();

    // 🔐 Validación estricta
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

    // 🔒 Verificar duplicado
    const [existing]: any = await pool.execute(
      "SELECT id FROM invitados WHERE nick_invitado = ?",
      [nickInvitado]
    );
    if (existing.length > 0) {
      return new Response(JSON.stringify({ error: "El invitado ya existe" }), { status: 409, headers });
    }

    // 🔎 Contar invitaciones actuales del invitador
    const [rows]: any = await pool.execute(
      "SELECT COUNT(*) as total FROM invitados WHERE validar_invitacion = 1 and nick_invitador = ?",
      [nickInvitador]
    );
    const totalInvitaciones = rows[0].total;

    // 🎯 Determinar límite según rol
    let limite = 0;
    if (rolDiscord === "GREMIO") {
      limite = 3;
    } else if (rolDiscord === "INVITADO") {
      limite = 2;
    } else {
      return new Response(JSON.stringify({ error: "Rol inválido" }), { status: 400, headers });
    }

    // 🚫 Validar límite
    if (totalInvitaciones >= limite) {
      return new Response(
        JSON.stringify({ error: `Este invitador ya alcanzó el límite de ${limite} invitaciones` }),
        { status: 403, headers }
      );
    }

    // 🔒 Insertar con prepared statement
    await pool.execute(
      `INSERT INTO invitados
       (nick_invitado, nick_invitador, rol, ip_registro, created_at)
       VALUES (?, ?, ?, ?, NOW())`,
      [nickInvitado, nickInvitador, rolDiscord, clientAddress]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500, headers });
  }
};