import * as Yup from "yup";
import Pessoa from "../models/Pessoa";

class PessoaController {
  async store(req, res) {

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required().min(11),
      data_nascimento: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const {id} = await Pessoa.create(req.body);
    return res.json({
      id
    });
  }
}

export default new PessoaController();
