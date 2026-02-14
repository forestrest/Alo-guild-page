import type { APIRoute } from "astro";
import { pool } from "../../db/connection";
import bcrypt from "bcrypt";

export const POST: APIRoute = async ({ request, cookies }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://alo-guild-page-production.up.railway.app");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  const data = await request.json();
  const { username, password } = data;

  const [rows]: any = await pool.query(
    "SELECT * FROM admins WHERE username = ?",
    [username]
  );

    console.log("Usuario recibido:", username);
    console.log("Resultado DB:", rows);
    /*const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Password original:", password);
    console.log("Hash generado:", hash);
    */

  if (rows.length === 0) {
    return new Response("Usuario no existe", { status: 401 });
  }

  const admin = rows[0];

  const valid = await bcrypt.compare(password, admin.password);

  if (!valid) {
    return new Response("Password incorrecto", { status: 401 });
  }

  cookies.set("admin", admin.id, {
    httpOnly: true,
    path: "/",
  });

  return new Response("OK");
};
