const { describe } = require("node:test");
const server = require("../src/server");
const session = require("supertest");
const agent = session(server);

describe("All Countries Rountes", () => {
  describe("GET /countries/", () => {
    it("should return status 200", async () => {
      const response = await agent.get("/countries/");
      expect(response.statusCode).toBe(200);
    });

    it("should return all countries with specified properties", async () => {
      const { query } = await agent.get("/countries/");
      const expectedProperties = [
        "id",
        "countryCode",
        "name",
        "flagImage",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ];
      expectedProperties.forEach((property) => {
        expect(query).toHaveProperty(property);
      });
    });

    it("should return error 404 for incorrect route", async () => {
      const { statusCode } = await agent.get("/regwe4");
      expect(statusCode).toBe(404);
    });
  });
});

describe("Countries Routes", () => {
  describe("GET /countries/:idPais", () => {
    it("should return status 200", async () => {
      const response = await agent.get("/countries/ARG");
      expect(response.statusCode).toBe(200);
    });

    it("should return an object with specified properties", async () => {
      const { body } = await agent.get("/countries/ARG");
      const expectedProperties = [
        "id",
        "countryCode",
        "name",
        "flagImage",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ];
      expectedProperties.forEach((property) => {
        expect(body).toHaveProperty(property);
      });
    });

    it("should return error 400 for invalid id", async () => {
      const { statusCode } = await agent.get("/countries/sdfhsfh");
      expect(statusCode).toBe(400);
    });

    it("should return error 404 for non-existent id", async () => {
      const { statusCode } = await agent.get("/countries/1233241");
      expect(statusCode).toBe(404);
    });
  });
});

describe("Activities Routes", () => {
  describe("POST /activities", () => {
    it("should return status 200 with create new activity", async () => {
      const newActivity = {
        name: "Nueva Actividad",
        difficulty: "3",
        duration: "2",
        season: "Summer",
        countries: ["ARG"],
      };

      const response = await request(app).post("/activities").send(newActivity);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("success", true);
      expect(response.body).toHaveProperty(
        "message",
        "Activity created successfully"
      );
    });

    it("should return status 400 if any required field is missing", async () => {
      const incompleteActivity = {
        name: "Nueva Actividad",
        duration: "2",
        season: "Summer",
        countries: ["ARG"],
      };

      const response = await request(app)
        .post("/activities")
        .send(incompleteActivity);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("success", false);
      expect(response.body).toHaveProperty(
        "message",
        "Missing required fields"
      );
    });
  });
});
