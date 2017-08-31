const router = require('express').Router();
const Board = require('../../schema/board');
const List = require('../../schema/list');
const NoDocumentFoundError = require('../errors').NoDocumentFoundError;


router.post("/:boardId/lists", (request, response, next) => {
	Board.findById(request.params.boardId);
		request.body.board_id = request.params.boardId;
	List.create(request.body)
	    .then((list) => {
		    response.status(201).send(list)
	    })
	    .catch((error) => next(error));
});

router.get("/:boardId/lists", (request, response, next) => {
	List.find().exec()
	    .then((lists) => response.status(201).send(lists))
	    .catch((error) => next(error));
});

router.get("/:boardId/lists/:listId", (request, response, next) => {
	List.findById(request.params.listId).exec()
	    .then((list) => {
		    if (!list) {
			    throw new NoDocumentFoundError(List, request.params.listId);
		    }
		    response.status(201).send(list);
	    })
	    .catch((error) => next(error));
});

router.delete("/:boardId/lists/:listId", (request, response, next) => {
	List.findByIdAndRemove(request.params.listId).exec()
	    .then((list) => {
		    if (!list) {
			    throw new NoDocumentFoundError(List, request.params.listId);
		    }
		    response.sendStatus(204);
	    })
	    .catch((error) => next(error));
});

module.exports = router;
