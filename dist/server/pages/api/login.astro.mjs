import { p as pool } from '../../chunks/connection_DYy2Rla8.mjs';
import bcrypt from 'bcrypt';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const data = await request.json();
  const { username, password } = data;
  const [rows] = await pool.query(
    "SELECT * FROM admins WHERE username = ?",
    [username]
  );
  console.log("Usuario recibido:", username);
  console.log("Resultado DB:", rows);
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
    path: "/"
  });
  return new Response("OK");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
