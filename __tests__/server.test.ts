import request from "supertest";
import server from "../src/server";

describe("GET", () => {
  test("should send back a json response with a message", async () => {
    const response = await request(server).get("/api");

    expect(response.body).toEqual({ msg: "Desde la api" });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);

    // las que no debe pasar
    expect(response.status).not.toBe(404);
    expect(response.body.msg).not.toBe("Api de prueba");
  });
});
