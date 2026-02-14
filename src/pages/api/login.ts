import type { APIRoute } from "astro";
import { pool } from "../../db/connection";
import bcrypt from "bcrypt";

// Manejo de preflight (OPTIONS)
export const OPTIONS: APIRoute = async ({ request }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://alo-guild-page-production.up.railway.app");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");

  return new Response(null, { headers, status: 204 });
};

// Manejo de POST
export const POST: APIRoute = async ({ request, cookies }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://alo-guild-page-production.up.railway.app");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");

  try {
    const data = await request.json();
    const { username, password } = data;

    const [rows]: any = await pool.query(
      "SELECT * FROM admins WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return new Response("Usuario no existe", { status: 401, headers });
    }

    const admin = rows[0];
    const valid = await bcrypt.compare(password, admin.password);

    if (!valid) {
      return new Response("Password incorrecto", { status: 401, headers });
    }

    cookies.set("admin", admin.id, {
      httpOnly: true,
      path: "/",
    });

    return new Response("OK", { status: 200, headers });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers,
    });
  }
};