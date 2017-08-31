const router = require('express').Router();
const Board = require('../../schema/board');
const NoDocumentFoundError = require('../errors').NoDocumentFoundError;

router.post("/", (request, response, next) => {
	Board.create(request.body)
	     .then((board) => response.status(201).send(board))
	     .catch((error) => next(error));
});

router.get("/", (request, response, next) => {
	Board.find().exec()
	     .then((boards) => response.status(201).send(boards))
	     .catch((error) => next(error));
});

router.get("/:boardId", (request, response, next) => {
	Board.findById(request.params.boardId).exec()
	     .then((board) => {
		     if (!board) {
			     throw new NoDocumentFoundError(Board, request.params.boardId);
		     }
		     response.status(201).send(board);
	     })
	     .catch((error) => next(error));
});

router.delete("/:boardId", (request, response, next) => {
	Board.findByIdAndRemove(request.params.boardId).exec()
	     .then((board) => {
		     if (!board) {
			     throw new NoDocumentFoundError(Board, request.params.boardId);
		     }
		     response.sendStatus(204);
	     })
	     .catch((error) => next(error));
});

module.exports = router;

