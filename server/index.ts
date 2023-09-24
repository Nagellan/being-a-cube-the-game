const server = Bun.serve({
  async fetch(req: Request) {
    const url = new URL(req.url);

    switch (url.pathname) {
      // html
      case "/": {
        return new Response(Bun.file("./out/index.html"));
      }

      // scripts
      case "/index.js": {
        return new Response(Bun.file("./out/index.js"));
      }

      // styles
      case "/styles.css": {
        return new Response(Bun.file("./out/styles.css"));
      }

      default: {
        return new Response("Not Found!", { status: 404 });
      }
    }
  },
});

console.log(`Listening on http://${server.hostname}:${server.port}`);
