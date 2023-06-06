const router = require("express").Router()
const { noiseGetAll, noisePostOne } = require("../controllers/noise.controller")

router.get("/all",noiseGetAll);
router.post('/one',noisePostOne);

module.exports = router;