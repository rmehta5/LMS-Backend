const Joi = require("joi");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
	name: { type: String, required: true },
});

const Author = mongoose.model("Author", authorSchema);

function validateAuthor(author) {
	const schema = {
		name: Joi.string().require().min(3).max(256),
	};
	return Joi.validate(author, validateAuthor);
}
exports.Author = Author;
exports.validateAuthor = validateAuthor;
