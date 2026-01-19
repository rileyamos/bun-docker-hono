import { Hono } from 'hono'

/**
 * Health Check
 * @returns 200 OK
 */
const health = new Hono();

health.get("/", (c) => {
  c.status(200);
  return c.text("OK");
});

export default health;