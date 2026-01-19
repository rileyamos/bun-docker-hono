import { Hono } from "hono";

import health from "@routes/health";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/health", health);

export default app;
