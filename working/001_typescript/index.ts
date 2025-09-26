type PostObject = {
  id: string;
  title: string;
  content?: string;
}

const server = Bun.serve({
  port: 3000,
  routes: {
    "/api/status": new Response("OK"),

    // Dynamic routes
    "/users/:id": req => {
      return new Response(`Hello User ${req.params.id}!`);
    },

    // Per-HTTP method handlers
    "/api/posts": {
      GET: () => new Response("List posts"),
      POST: async req => {
        const body = await req.json() as PostObject;
        return Response.json({ created: true, ...body });
      },
    },
  },
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);