import Sequelize, { Model } from "sequelize";

class Transacao extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.DOUBLE,
        data_transacao: Sequelize.DATE,
        tipo:Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Conta, { foreignKey: 'conta_id', as: 'Conta' });
  }
}
export default Transacao;
