const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

module.exports = () => {
	const app = express();

	app.set("port", process.env.PORT);

	app.use(express.json());

	app.set("uri", process.env.DB_URL);
	console.log(process.env.DB_URL);

	return app;
};
