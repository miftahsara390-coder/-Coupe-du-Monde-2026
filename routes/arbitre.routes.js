const router = require("express").Router();
const ctrl = require("../controllers/arbitre.controller");

router.post("/", ctrl.createArbitre);
router.get("/", ctrl.getArbitres);
router.delete("/:id", ctrl.deleteArbitre);
router.get("/:id/matchs", ctrl.getArbitreByIdWithMatchs);

module.exports = router;