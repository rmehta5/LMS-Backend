const Joi = require("joi");
const mongoose = require("mongoose");
const { Author } = require("./author");

const bookSchema = new mongoose.Schema({
	name: { type: String, required: true },
	author: { type: [mongoose.Schema.Types.ObjectId], ref: Author },
	stockCount: { type: Number, required: true },
	category: { type: String, required: true },
	rentalRate: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

function validateBook(book) {
	const schema = {
		name: Joi.string().required(),
		author: Joi.string().required(),
		stockCount: Joi.number().required(),
		rentalRate: Joi.number().required(),
		category: Joi.string().required(),
	};

	return Joi.validate(book, schema);
}

exports.Book = Book;
exports.validateBook = validateBook;
