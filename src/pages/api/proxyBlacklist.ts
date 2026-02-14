export async function post({ request }) {
  const json = await request.json();

  // Convertir JSON a FormData para enviar a Railway
  const formData = new FormData();
  for (const key in json) {
    formData.append(key, json[key]);
  }

  const res = await fetch("https://alo-guild-page-production.up.railway.app/api/blacklist", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
