
exports.validateUser = (req, res, next) => {
  const { nom, email, password, role } = req.body;

  if (!nom || !email || !password) {
    return res.status(400).json({
      error: "Nom, email et mot de passe sont obligatoires.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Format d'email invalide.",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Le mot de passe doit contenir au moins 6 caractères.",
    });
  }

  const rolesAutorises = ["admin", "commissaire", "arbitre", "consultation"];
  if (role && !rolesAutorises.includes(role)) {
    return res.status(400).json({
      error: "Rôle invalide. Rôles autorisés : " + rolesAutorises.join(", "),
    });
  }


  next();
};