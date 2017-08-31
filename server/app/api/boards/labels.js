const router = require('express').Router();
const Label = require('../../schema/label');
const NoDocumentFoundError = require('../errors').NoDocumentFoundError;


router.post("/:boardId/labels", (request, response, next) => {
	Label.create(request.body)
	     .then((label) => response.status(201).send(label))
	     .catch((error) => next(error));
});

router.get("/:boardId/labels", (request, response, next) => {
	Label.find().exec()
	     .then((labels) => response.status(201).send(labels))
	     .catch((error) => next(error));
});

router.get("/:boardId/labels/:labelId", (request, response, next) => {
	Label.findById(request.params.labelId).exec()
	     .then((label) => {
		     if (!label) {
			     throw new NoDocumentFoundError(Label, request.params.labelId);
		     }
		     response.status(201).send(label);
	     })
	     .catch((error) => next(error));
});

router.delete("/:boardId/labels/:labelId", (request, response, next) => {
	Label.findByIdAndRemove(request.params.labelId).exec()
	     .then((label) => {
		     if (!label) {
			     throw new NoDocumentFoundError(Label, request.params.labelId);
		     }
		     response.sendStatus(204);
	     })
	     .catch((error) => next(error));
});

module.exports = router;
