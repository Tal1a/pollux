const router = require('express').Router();

router.get("/:boardId/labels/:labelId", (request, response, next) => {
	next();
});

router.get("/:boardId/labels", (request, response, next) => {
	next();
});

router.post("/:boardId/labels", (request, response, next) => {
	next();
});

router.delete("/:boardId/labels/:labelId", (request, response, next) => {
	next();
});

module.exports = router;
