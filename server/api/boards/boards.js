const router = require('express').Router();

router.get("/:id", (request, response, next) => {
	next();
});

// add routes

module.exports = router;
