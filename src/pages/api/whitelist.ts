import type { APIRoute } from "astro";
import { pool } from "../../db/connection";

export const GET: APIRoute = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM whitelist ORDER BY created_at DESC"
    );

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("GET whitelist error:", error);
    return new Response(
      JSON.stringify({ message: "Error al obtener whitelist" }),
      { status: 500 }
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { usuario_invitado, usuario_que_invita } = await request.json();

    if (!usuario_invitado || !usuario_que_invita) {
      return new Response(
        JSON.stringify({ message: "Datos incompletos" }),
        { status: 400 }
      );
    }

    // 🔴 Validar si ya está en blacklist
    const [existsBlack]: any = await pool.query(
      "SELECT id FROM blacklist WHERE usuario_invitado = ?",
      [usuario_invitado]
    );

    if (existsBlack.length > 0) {
      return new Response(
        JSON.stringify({ message: "Usuario está en blacklist" }),
        { status: 400 }
      );
    }

    // 🟡 Validar duplicado en whitelist
    const [existsWhite]: any = await pool.query(
      "SELECT id FROM whitelist WHERE usuario_invitado = ?",
      [usuario_invitado]
    );

    if (existsWhite.length > 0) {
      return new Response(
        JSON.stringify({ message: "Usuario ya está en whitelist" }),
        { status: 400 }
      );
    }

    // 🟢 Insertar
    const [result]: any = await pool.query(
      "INSERT INTO whitelist (usuario_invitado, usuario_que_invita) VALUES (?, ?)",
      [usuario_invitado, usuario_que_invita]
    );

    return new Response(
      JSON.stringify({
        message: "Usuario agregado correctamente",
        id: result.insertId,
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error("POST whitelist error:", error);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ message: "ID requerido" }),
        { status: 400 }
      );
    }

    const [result]: any = await pool.query(
      "DELETE FROM whitelist WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ message: "Registro no encontrado" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Registro eliminado correctamente" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE whitelist error:", error);
    return new Response(
      JSON.stringify({ message: "Error al eliminar" }),
      { status: 500 }
    );
  }
};
