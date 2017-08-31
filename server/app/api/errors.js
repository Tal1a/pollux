class NoDocumentFoundError extends Error {
	constructor(model, id) {
		super(`No document with id [${id}] of model [${model.modelName}] found`);
		this.status = 404;
		Error.captureStackTrace(this, NoDocumentFoundError);
	}
}

module.exports = {
	NoDocumentFoundError: NoDocumentFoundError
};