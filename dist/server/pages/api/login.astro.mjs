import { p as pool } from '../../chunks/connection_BNiGHa6Z.mjs';
import bcrypt from 'bcrypt';
export { renderers } from '../../renderers.mjs';

const OPTIONS = async ({ request }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://alo-guild-page-production.up.railway.app");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  return new Response(null, { headers, status: 204 });
};
const POST = async ({ request, cookies }) => {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "https://alo-guild-page-production.up.railway.app");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Allow-Credentials", "true");
  try {
    const data = await request.json();
    const { username, password } = data;
    const [rows] = await pool.query(
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
      path: "/"
    });
    return new Response("OK", { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
