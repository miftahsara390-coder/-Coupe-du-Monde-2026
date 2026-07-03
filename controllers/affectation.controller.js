const db = require("../model");

exports.createAffectation = async (req, res) => {
  try {
    const data = await db.Affectation.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllAffectations = async (req, res) => {
  try {
    const data = await db.Affectation.findAll({
      include: [db.Arbitre, db.Match],
    });
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};