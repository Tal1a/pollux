const router = require('express').Router();
const Comment = require('../../schema/comment');
const NoDocumentFoundError = require('../errors').NoDocumentFoundError;

router.post("/:boardId/lists/:listId/cards/:cardId/comments", (request, response, next) => {
	Comment.create(request.body)
	     .then((comment) => response.status(201).send(comment))
	     .catch((error) => next(error));
});

router.get("/:boardId/lists/:listId/cards/:cardId/comments", (request, response, next) => {
	Comment.find().exec()
	     .then((comments) => response.status(201).send(comments))
	     .catch((error) => next(error));
});

router.get("/:boardId/lists/:listId/cards/:cardId/comments/:commentId", (request, response, next) => {
	Comment.findById(request.params.commentId).exec()
	     .then((comment) => {
		     if (!comment) {
			     throw new NoDocumentFoundError(Comment, request.params.commentId);
		     }
		     response.status(201).send(comment);
	     })
	     .catch((error) => next(error));
});

router.delete("/:boardId/lists/:listId/cards/:cardId/comments/:commentId", (request, response, next) => {
	Comment.findByIdAndRemove(request.params.commentId).exec()
	     .then((comment) => {
		     if (!comment) {
			     throw new NoDocumentFoundError(Comment, request.params.commentId);
		     }
		     response.sendStatus(204);
	     })
	     .catch((error) => next(error));
});

module.exports = router;
