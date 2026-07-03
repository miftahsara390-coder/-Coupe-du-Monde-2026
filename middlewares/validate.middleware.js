exports.validateArbitre = (req, res, next) => {
  const { nom, prenom, confederation, categorie } = req.body;

  if (!nom || !prenom || !confederation || !categorie) {
    return res.status(400).json({ error: "Champs obligatoires manquants" });
  }

  next();
};

exports.validateAffectation = (req, res, next) => {
  const { arbitreId, matchId, role } = req.body;

  if (!arbitreId || !matchId || !role) {
    return res.status(400).json({ error: "Données invalides" });
  }

  next();
};