module.exports = (sequelize, DataTypes) => {
  const Affectation = sequelize.define(
    "Affectation",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      role: {
        type: DataTypes.ENUM(
          "central",
          "assistant1",
          "assistant2",
          "var",
          "avar",
          "4e"
        ),
        allowNull: false,
      },
    },
    {
      tableName: "affectations",
      timestamps: true,
    }
  );

  Affectation.associate = (models) => {
    Affectation.belongsTo(models.Arbitre, {
      foreignKey: "arbitreId",
      as: "arbitre",
    });

    Affectation.belongsTo(models.Match, {
      foreignKey: "matchId",
      as: "match",
    });
  };

  return Affectation;
};