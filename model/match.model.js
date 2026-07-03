module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define(
    "Match",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      equipe1: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      equipe2: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      stade: {
        type: DataTypes.STRING,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "matchs",
      timestamps: true,
    }
  );

  Match.associate = (models) => {
    Match.hasMany(models.Affectation, {
      foreignKey: "matchId",
      as: "affectations",
    });
  };

  return Match;
};