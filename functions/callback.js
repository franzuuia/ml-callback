export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  return new Response(`¡Callback recibido! Código: ${code}`, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
