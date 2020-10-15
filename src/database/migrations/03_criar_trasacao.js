module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Transacao", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      conta_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Conta', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      data_transacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("Transacao");
  },
};
