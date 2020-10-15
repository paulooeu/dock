import Sequelize, { Model } from "sequelize";

class Conta extends Model {
  static init(sequelize) {
    super.init(
      {
        saldo: Sequelize.DOUBLE,
        limite_saque_diario: Sequelize.DOUBLE,
        flag_ativo: Sequelize.BOOLEAN,
        tipo_conta:Sequelize.INTEGER,
        data_criacao: Sequelize.DATE,

      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'Pessoa' });
  }
}
export default Conta;
