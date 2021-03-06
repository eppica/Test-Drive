const Question = require("../model/question");
const shuffle = require("shuffle-array");

class QuestionController {
	async content(req, res) {
		let data;
		let dataShuffled;

		if (req.params.content == "simulado") {
			data = await Question.find({});
			dataShuffled = shuffle.pick(data, {
				picks: 30,
			});
		} else {
			data = await Question.find({ content: req.params.content });
			dataShuffled = shuffle.pick(data, {
				picks: parseInt(req.params.quantity),
			});
		}

		return res.json(dataShuffled);
	}

	async all(req, res) {
		const data = await Question.find({});
		return res.json(data);
	}

	async post(req, res) {
		const data = await Question.create(req.body);

		return res.json(data);
	}

	async delete(req, res) {
		const data = await Question.deleteOne({});

		return res.json(data);
	}
}

module.exports = new QuestionController();
