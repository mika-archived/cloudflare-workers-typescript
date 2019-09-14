addEventListener("fetch", (event: Event) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(handleRequest(fetchEvent.request));
});

/**
 * Fetch and log a request
 */
async function handleRequest(request: Request): Promise<Response> {
  return new Response("Hello worker with webpack written in TypeScript!", { status: 200 });
}
