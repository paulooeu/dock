import Sequelize, { Model } from "sequelize";


class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

}
export default Pessoa;
