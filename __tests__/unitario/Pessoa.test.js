import request from "supertest";
import app from "../../src/app";
import truncate from "../util/trucate";

describe("Pessoa", () => {
  beforeEach(async () => {
    await truncate();
  });

  //Nome obrigatorio, cpf minimo 11 digitos, data obrigatoria
  it("Teste validação pessoa", async () => {
    const response = await request(app).post("/pessoa").send({
      cpf: "029658475",
    });
    expect(response.status).toBe(400);
  });

  it("Teste de criação", async () => {
    const response = await request(app).post("/pessoa").send({
      nome: "paulo sergio",
      cpf: "00011122233",
      data_nascimento: "1994-11-06",
    });

    expect(response.status).toBe(200);
  });

});
