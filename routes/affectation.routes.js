const router = require("express").Router();
const ctrl = require("../controllers/affectation.controller");

router.post("/", ctrl.createAffectation);
router.get("/", ctrl.getAllAffectations);

module.exports = router;