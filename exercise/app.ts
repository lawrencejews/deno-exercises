import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

import routeParser from "https://dev.jspm.io/route-parser@0.0.5";
import RouteParser from "https://unpkg.com/@types/route-parser@0.1.3/index.d.ts";

//Server set-up
const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ port: PORT, hostname: HOSTNAME });
console.log(`Server now running at http://${HOSTNAME}:${PORT}`);

for await (const req of server) {
  const html = await serveFile(req, "index.html");
  req.respond(html);
}


//Routing Set-up
const Route = routeParser as typeof RouteParser;
const route = new Route("/:name")

// for await (const req of server) {
//     const match: any = route.match(req.url);
//     req.respond({ body: `<h1>Hello${match.name}!<h1/> `});

    // const params = new URLSearchParams(req.url.substr(1));
    // const name = params.get("name");
    // req.respond({ body: `<h1>Hello${name || "World"}!<h1/> `});
// }
