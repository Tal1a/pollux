const router = require('express').Router();

router.use("/", require("./boards"));
router.use("/", require("./lists"));
router.use("/", require("./labels"));
router.use("/", require("./cards"));
router.use("/", require("./comments"));

module.exports = router;