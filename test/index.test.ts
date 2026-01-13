import { expect, test, describe } from "bun:test";
import app from "../src/index";

describe("Health Check", () => {
  test("GET /health returns 200 OK", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("OK");
  });
});
