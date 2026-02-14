// src/pages/api/proxyBlacklist.ts
export async function post({ request }) {
  try {
    // Recibimos JSON desde el cliente
    const json = await request.json();

    // Convertimos JSON a FormData server-side
    const formData = new FormData();
    for (const key in json) {
      if (json[key] !== null && json[key] !== undefined) {
        formData.append(key, json[key]);
      }
    }

    // Hacemos POST a Railway desde el servidor
    const res = await fetch("https://alo-guild-page-production.up.railway.app/api/blacklist", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    // Retornamos JSON al cliente
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
