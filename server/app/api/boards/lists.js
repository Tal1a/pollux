const router = require('express').Router();
const List = require('../../schema/list');


router.get("/:boardId/lists/:listId", (request, response, next) => {
	next();
});

router.get("/:boardId/lists", (request, response, next) => {
	next();
});

router.post("/:boardId/lists", (request, response, next) => {
	next();
});

router.delete("/:boardId/lists/:listId", (request, response, next) => {
	next();
});

module.exports = router;
