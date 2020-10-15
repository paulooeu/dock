import * as Yup from "yup";
import Conta from "../models/Conta";
import Transacao from '../models/Transacao'

class TransacaoController {

  async sacar(req, res) {
    const schema = Yup.object().shape({
      valor: Yup.number().required().min(0),
      conta_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {valor, conta_id} = req.body
    const contaExistente = await Conta.findOne({
      where:{id:conta_id}
    })

    if(!contaExistente){
      return res.status(401).json({ error: "Conta não existe" });
    }
    if(contaExistente.saldo <valor){
      return res.status(401).json({ error: "Saldo insuficiente" });
    }

    const transacaoInstance =  await Transacao.create({
      valor:parseFloat(valor),
      conta_id:conta_id,
      data_transacao:"1994-11-06T21:00:00-03:00",
      tipo:'S'
    })
    if(!transacaoInstance){
      return res.status(401).json({ error: "Transação negada" });
    }


  contaExistente.saldo = parseFloat(contaExistente.saldo) - parseFloat(valor)

  contaExistente.update({saldo:contaExistente.saldo})

    return res.json({
      contaExistente
    });
  }
  async depositar(req, res) {
    const schema = Yup.object().shape({
      valor: Yup.number().required().min(0),
      conta_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {valor, conta_id} = req.body
    const contaExistente = await Conta.findOne({
      where:{id:conta_id}
    })

    if(!contaExistente){
      return res.status(401).json({ error: "Conta não existe" });
    }

    const transacaoInstance =  await Transacao.create({
      valor:parseFloat(valor),
      conta_id:conta_id,
      data_transacao:"1994-11-06T21:00:00-03:00",
      tipo:'D'
    })
    if(!transacaoInstance){
      return res.status(401).json({ error: "Transação negada" });
    }


  contaExistente.saldo = parseFloat(contaExistente.saldo) + parseFloat(valor)

  contaExistente.update({saldo:contaExistente.saldo})

    return res.json({
      contaExistente
    });
  }
  async extrato(req, res) {
    const schema = Yup.object().shape({
      conta_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {conta_id} = req.body
    const contaExistente = await Conta.findOne({
      where:{id:conta_id}
    })

    if(!contaExistente){
      return res.status(401).json({ error: "Conta não existe" });
    }

    const transacaoList =  await Transacao.findAll({
    where:{conta_id:conta_id},
    order: ['data_transacao']
    })




    return res.json({
      transacaoList
    });
  }
}

export default new TransacaoController();
