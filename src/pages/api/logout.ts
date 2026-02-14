import type { APIRoute } from "astro";

export const POST: APIRoute = async () => {
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
