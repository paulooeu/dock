import request from "supertest";
import app from "../../src/app";
import truncate from "../util/trucate";
import Pessoa from '../../src/app/models/Pessoa'
import Conta from '../../src/app/models/Conta'

describe("Conta", () => {
  beforeEach(async () => {
    await truncate();
  });

  //todos os campos sao obrigatorios
  it("Teste validação conta", async () => {
    const response = await request(app).post("/conta").send({
      saldo:100,
    //  limite_saque_diario:200,
      flag_ativo:true,
    //  tipo_conta:10,
      pessoa_id:1
    });
    expect(response.status).toBe(400);
  });

  it("Teste de criação", async () => {
    const pessoa = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "00911125233",
      data_nascimento: "1994-11-06",
    });

    const response = await request(app).post("/conta").send({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:true,
      tipo_conta:10,
      pessoa_id:pessoa.id
    });

    expect(response.status).toBe(200);
  });

  it("Teste conta inexistente ", async () => {
    const response = await request(app).post("/bloquear").send({
      "flag_ativo":false,
      "conta_id":0
    });
    expect(response.status).toBe(401);
  });

  it("Teste conta bloquear conta ", async () => {
    const pessoa = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "00018122238",
      data_nascimento: "1994-11-06",
    });

    const conta = await Conta.create({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:true,
      tipo_conta:10,
      pessoa_id:pessoa.id,
      data_criacao:new Date()
    });

    const response = await request(app).post("/bloquear").send({
      "flag_ativo":true,
      "conta_id":conta.id
    });

    expect(response.status).toBe(200);
  });

});
