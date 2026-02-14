export { renderers } from '../../renderers.mjs';

const POST = async () => {
  return new Response(
    JSON.stringify({ message: "Logout exitoso" }),
    {
      status: 200,
      headers: {
        "Set-Cookie": "admin_session=; HttpOnly; Path=/; Max-Age=0",
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
