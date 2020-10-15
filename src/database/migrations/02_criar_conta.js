module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Conta", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      saldo: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      limite_saque_diario: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      flag_ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tipo_conta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Pessoa', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Conta");
  },
};
