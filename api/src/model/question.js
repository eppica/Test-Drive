const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	type: {
		type: Number,
		min: 1,
		max: 3,
		required: true,
	},
	question: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		enum: [
			"legislacao",
			"sinalizacao",
			"direcao-defensiva",
			"meio-ambiente",
			"mecanica-basica",
			"primeiros-socorros",
			"simulado",
		],
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	alternatives: {
		type: [{ id: Number, text: String }],
		required: true,
	},
	answer_id: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Question", QuestionSchema);
