import { Router } from "express";

import PessoaController from "./app/controllers/PessoaController";
import ContaController from "./app/controllers/ContaController";
import TransacaoController from "./app/controllers/TransacaoController";

const routes = new Router();


routes.post("/pessoa", PessoaController.store);
routes.post("/conta", ContaController.store);
routes.post("/bloquear", ContaController.bloquear);
routes.post("/sacar", TransacaoController.sacar);
routes.post("/depositar", TransacaoController.depositar);
routes.get("/extrato", TransacaoController.extrato);
routes.get("/extratoPorPeriodo", TransacaoController.extratoPorPeriodo);


export default routes;
