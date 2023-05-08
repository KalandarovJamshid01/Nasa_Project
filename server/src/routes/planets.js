const router = require("express").Router();
const { getAllPlanets } = require("./../controllers/planets");
router.get("/", getAllPlanets);

module.exports = router;
