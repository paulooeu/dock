import * as Yup from "yup";
import Conta from "../models/Conta";

class ContaController {
  async store(req, res) {

    const schema = Yup.object().shape({
      saldo: Yup.number().required(),
      limite_saque_diario: Yup.number().required(),
      flag_ativo: Yup.boolean().required(),
      tipo_conta: Yup.number().required(),
      pessoa_id: Yup.number().required()

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {saldo,limite_saque_diario,flag_ativo,tipo_conta,pessoa_id} = (req.body);
    const contaInstance = await Conta.create({
      saldo,
      limite_saque_diario,
      flag_ativo,
      tipo_conta,
      pessoa_id,
      data_criacao: new Date()
    });
    return res.json({
      contaInstance
    });
  }

  async bloquear(req, res) {

    const schema = Yup.object().shape({
      flag_ativo: Yup.boolean().required(),
      conta_id: Yup.number().required().min(0)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {flag_ativo, conta_id} = req.body
    const contaExistente = await Conta.findOne({
      where:{id:conta_id}
    })

    if(!contaExistente){
      return res.status(401).json({ error: "Conta não existe" });
    }


  contaExistente.update({flag_ativo:flag_ativo})

    return res.json({
      contaExistente
    });
  }
}

export default new ContaController();
