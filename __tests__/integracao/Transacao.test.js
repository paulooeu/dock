import request from "supertest";
import app from "../../src/app";
import truncate from "../util/trucate";
import Pessoa from '../../src/app/models/Pessoa'
import Conta from '../../src/app/models/Conta'

describe("Transacao", () => {
  beforeEach(async () => {
    await truncate();
  });
      /** teste para sacar */
  //todos os campos sao obrigatorios e valor maior que 0
  it("Teste validação saque", async () => {
    const response = await request(app).post("/sacar").send({
      valor:0
    });
    expect(response.status).toBe(400);
  });

  it("Teste conta inexistente ", async () => {
    const response = await request(app).post("/sacar").send({
      valor:100,
      conta_id:0
    });
    expect(response.status).toBe(401);
  });

  it("Teste Saldo insuficiente ", async () => {
    const pessoaInstance = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "00011122237",
      data_nascimento: "1994-11-06",
    });

    const conta = await Conta.create({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:true,
      tipo_conta:10,
      pessoa_id:pessoaInstance.id,
      data_criacao:new Date()
    });
    const response = await request(app).post("/sacar").send({
      valor:1000,
      conta_id:conta.id
    });
    expect(response.status).toBe(401);
  });

  it("Teste conta bloqueada ", async () => {
    const pessoaInstance = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "10011122237",
      data_nascimento: "1994-11-06",
    });

    const conta = await Conta.create({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:false,
      tipo_conta:10,
      pessoa_id:pessoaInstance.id,
      data_criacao:new Date()
    });
    const response = await request(app).post("/sacar").send({
      valor:1000,
      conta_id:conta.id
    });
    expect(response.status).toBe(401);
  });

  it("Teste sacar ", async () => {
    const pessoaInstance = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "20011122237",
      data_nascimento: "1994-11-06",
    });

    const conta = await Conta.create({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:true,
      tipo_conta:10,
      pessoa_id:pessoaInstance.id,
      data_criacao:new Date()
    });
    const response = await request(app).post("/sacar").send({
      valor:50,
      conta_id:conta.id
    });
    expect(response.status).toBe(200);
  });

    /** teste para depositar */
    it("Teste validação depositar", async () => {
      const response = await request(app).post("/depositar").send({
        valor:0
      });
      expect(response.status).toBe(400);
    });

    it("Teste conta inexistente ", async () => {
      const response = await request(app).post("/depositar").send({
        valor:100,
        conta_id:0
      });
      expect(response.status).toBe(401);
    });

  it("Teste depositar ", async () => {
    const pessoaInstance = await Pessoa.create({
      nome: "paulo sergio",
      cpf: "30011122237",
      data_nascimento: "1994-11-06",
    });

    const conta = await Conta.create({
      saldo:100,
      limite_saque_diario:200,
      flag_ativo:true,
      tipo_conta:10,
      pessoa_id:pessoaInstance.id,
      data_criacao:new Date()
    });
    const response = await request(app).post("/depositar").send({
      valor:50,
      conta_id:conta.id
    });
    expect(response.status).toBe(200);
  });





});
