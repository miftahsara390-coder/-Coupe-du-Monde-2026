require("dotenv").config();

const express = require("express");
const db = require("./model");

const app = express();
app.use(express.json());


const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);


app.use("/arbitres", require("./routes/arbitre.routes"));
app.use("/matchs", require("./routes/match.routes"));
app.use("/affectations", require("./routes/affectation.routes"));


db.sequelize.authenticate()
  .then(() => {
    console.log("DB connected");
    return db.sequelize.sync(); 
  })
  .then(() => {
    console.log("DB synced");
    app.listen(3000, () =>
      console.log("Server running on port 3000 🚀")
    );
  })
  .catch((err) => console.error(err));