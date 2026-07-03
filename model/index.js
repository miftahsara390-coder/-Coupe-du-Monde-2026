const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const db = {};

db.sequelize = sequelize;

db.Arbitre = require("./arbitre.model")(sequelize, DataTypes);
db.Affectation = require("./affectation.model")(sequelize, DataTypes);
db.Match = require("./match.model")(sequelize, DataTypes);


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;