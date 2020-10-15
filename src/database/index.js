import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import Pessoa from "../app/models/Pessoa";
import Conta from "../app/models/Conta";
import Transacao from "../app/models/Transacao";

const models = [Pessoa,Conta,Transacao];
class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();
