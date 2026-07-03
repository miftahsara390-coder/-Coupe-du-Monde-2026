module.exports = (sequelize, DataTypes) => {
  const Arbitre = sequelize.define(
    "Arbitre",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      nationalite: {
        type: DataTypes.STRING,
      },

      confederation: {
        type: DataTypes.ENUM(
          "UEFA",
          "CONMEBOL",
          "CAF",
          "AFC",
          "CONCACAF",
          "OFC"
        ),
        allowNull: false,
      },

      categorie: {
        type: DataTypes.ENUM(
          "central",
          "assistant",
          "var",
          "avar",
          "4e"
        ),
        allowNull: false,
      },

      experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      statut: {
        type: DataTypes.ENUM(
          "actif",
          "suspendu",
          "blesse",
          "retraite"
        ),
        defaultValue: "actif",
      },
    },
    {
      tableName: "arbitres", 
      timestamps: true, 
    }
  );

 
  Arbitre.associate = (models) => {
    Arbitre.hasMany(models.Affectation, {
      foreignKey: "arbitreId",
      as: "affectations",
    });
  };

  return Arbitre;
};