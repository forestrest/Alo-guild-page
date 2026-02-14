// src/pages/api/proxyBlacklist.ts
export async function post({ request }) {
  const body = await request.formData();

  const res = await fetch("https://alo-guild-page-production.up.railway.app/api/blacklist", {
    method: "POST",
    body
  });

  const data = await res.json();

  // Retornar datos al cliente, incluyendo el ID generado
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
