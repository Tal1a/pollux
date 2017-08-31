const router = require('express').Router();
const Card = require('../../schema/card');
const NoDocumentFoundError = require('../errors').NoDocumentFoundError;

router.post("/:boardId/lists/:listId/cards", (request, response, next) => {
	Card.create(request.body)
	     .then((card) => response.status(201).send(card))
	     .catch((error) => next(error));
});

router.get("/:boardId/lists/:listId/cards", (request, response, next) => {
	Card.find().exec()
	     .then((cards) => response.status(201).send(cards))
	     .catch((error) => next(error));
});

router.get("/:boardId/lists/:listId/cards/:cardId", (request, response, next) => {
	Card.findById(request.params.cardId).exec()
	     .then((card) => {
		     if (!card) {
			     throw new NoDocumentFoundError(Card, request.params.cardId);
		     }
		     response.status(201).send(card);
	     })
	     .catch((error) => next(error));
});

router.delete("/:boardId/lists/:listId/cards/:cardId", (request, response, next) => {
	Card.findByIdAndRemove(request.params.cardId).exec()
	     .then((card) => {
		     if (!card) {
			     throw new NoDocumentFoundError(Card, request.params.cardId);
		     }
		     response.sendStatus(204);
	     })
	     .catch((error) => next(error));
});

module.exports = router;
