const app = require("./config/express")();
const port = app.get("port");
const db = app.get("uri");
const mongoose = require("mongoose");

app.listen(port, () => {
	console.log(`🚀 Server running at port ${port}`);
});

mongoose.connect(db, { useNewUrlParser: true });

app.use(require("./src/routes"));
