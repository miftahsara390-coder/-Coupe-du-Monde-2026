const { Match, Affectation, Arbitre } = require("../model");

exports.createMatch = async (req, res) => {
  try {
    const data = await Match.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMatchArbitres = async (req, res) => {
  try {
    const { id } = req.params;

    const match = await Match.findByPk(id, {
      include: [
        {
          model: Affectation,
          as: "affectations",
          include: [
            {
              model: Arbitre,
              as: "arbitre",
            },
          ],
        },
      ],
    });

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    res.json(match);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};