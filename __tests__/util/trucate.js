import database from "../../src/database";
module.exports = () => {
  return Promise.all(
    Object.keys(database.connection.models).map((key) => {
      return database.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    })
  );
};
