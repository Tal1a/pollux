const router = require('express').Router();
const Board = require('../../schema/board');

router.get("/:boardId", (request, response, next) => {
	next();
});

router.get("/", (request, response, next) => {
	next();
});

router.post("/", (request, response, next) => {
	Board.add(request.body)
	     .then((board) => response.status(201).send(board))
	     .catch((error) => next(error));
});

router.delete("/:boardId", (request, response, next) => {
	next();
});

module.exports = router;
