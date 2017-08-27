const router = require('express').Router();

router.get("/:boardId/lists/:listId/cards/:cardId", (request, response, next) => {
	next();
});

router.get("/:boardId/lists/:listId/cards", (request, response, next) => {
	next();
});

router.post("/:boardId/lists/:listId/cards", (request, response, next) => {
	next();
});

router.delete("/:boardId/lists/:listId/cards/:cardId", (request, response, next) => {
	next();
});

module.exports = router;
