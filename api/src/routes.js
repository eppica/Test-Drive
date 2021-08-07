const express = require("express");
const routes = express.Router();

const QuestionController = require("./controllers/question");

routes.get("/:content/:quantity", QuestionController.content);
routes.get("/question", QuestionController.all);
routes.post("/question", QuestionController.post);
routes.delete("/question", QuestionController.delete);

module.exports = routes;
