const router = require("express").Router();
const ctrl = require("../controllers/match.controller");

router.post("/", ctrl.createMatch);
router.get("/:id/arbitres", ctrl.getMatchArbitres);

module.exports = router;