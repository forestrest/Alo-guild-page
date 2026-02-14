import type { APIRoute } from "astro";
import { pool } from "../../db/connection";

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const formData = await request.formData();

    const nickInvitado = formData.get("nickInvitado")?.toString().trim();
    const nickInvitador = formData.get("nickInvitador")?.toString().trim();
    const rolDiscord = formData.get("rolDiscord")?.toString().trim().toUpperCase();


    // 🔐 Validación estricta
    if (!nickInvitado || !nickInvitador || !rolDiscord) {
      return new Response("Campos incompletos", { status: 400 });
    }

    if (nickInvitado.length > 30 || nickInvitador.length > 30 || rolDiscord.length > 50) {
      return new Response("Longitud inválida", { status: 400 });
    }

    const regex = /^[a-zA-Z0-9_\- ]+$/;

    if (!regex.test(nickInvitado) || !regex.test(nickInvitador)) {
      return new Response("Formato inválido", { status: 400 });
    }

    // 🔒 Verificar duplicado
    const [existing]: any = await pool.execute(
      "SELECT id FROM Invitados WHERE nick_invitado = ?",
      [nickInvitado]
    );

    if (existing.length > 0) {
      return new Response("El invitado ya existe", { status: 409 });
    }

    
    // 🔎 Contar invitaciones actuales del invitador
    const [rows]: any = await pool.execute(
    "SELECT COUNT(*) as total FROM Invitados WHERE validar_invitacion = 1 and nick_invitador = ?",
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
    return new Response(
        JSON.stringify({ error: "Rol inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
    );
    }

    // 🚫 Validar límite
    if (totalInvitaciones >= limite) {
    return new Response(
        JSON.stringify({
        error: `Este invitador ya alcanzó el límite de ${limite} invitaciones`
        }),
        { status: 403, headers: { "Content-Type": "application/json" } }
    );
    }

    // 🔒 Insertar con prepared statement
    await pool.execute(
      `INSERT INTO Invitados
       (nick_invitado, nick_invitador, rol, ip_registro, created_at)
       VALUES (?, ?, ?, ?, NOW())`,
      [nickInvitado, nickInvitador, rolDiscord, clientAddress]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response("Error interno", { status: 500 });
  }
};
