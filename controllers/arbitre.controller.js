const { Arbitre, Affectation, Match } = require("../models");


exports.createArbitre = async (req, res) => {
  try {
    const data = await Arbitre.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getArbitres = async (req, res) => {
  const data = await Arbitre.findAll();
  res.json(data);
};


exports.deleteArbitre = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Arbitre.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Arbitre not found" });
    }

    res.json({ message: "Arbitre supprimé ✅" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getArbitreByIdWithMatchs = async (req, res) => {
  try {
    const { id } = req.params;

    const arbitre = await Arbitre.findByPk(id, {
      include: [
        {
          model: Affectation,
          as: "affectations",
          include: [
            {
              model: Match,
              as: "match",
            },
          ],
        },
      ],
    });

    res.json(arbitre);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};