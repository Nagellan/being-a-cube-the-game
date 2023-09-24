const server = Bun.serve({
  async fetch(req: Request) {
    const url = new URL(req.url);

    console.log("Server responded to:", url.pathname);

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

console.log(
  "Server started.\nListening on:",
  `http://${server.hostname}:${server.port}`
);

// Stop server on Ctrl-C
process.on("SIGINT", () => {
  console.log("Server stopped");

  server.stop();

  process.exit(0);
});
