module.exports = (sequelize, DataTypes) => {
 const User = squelize.define("User", {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM(
        "admin",
        "commissaire",
        "arbitre",
        "consultation"
      ),
      defaultValue: "consultation",
    },
  });
};