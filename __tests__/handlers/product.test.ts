import request from "supertest";
import server from "../../src/server";

describe("POST /api/products", () => {
  test("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Product 1",
      price: 10.99,
      availability: true,
    });

    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe("Product 1");
    expect(response.body.data.price).toBe(10.99);
    expect(response.body.data.availability).toBe(true);
  });
});
