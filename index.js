const express = require("express");

const cors = require("cors");
const user = require("./src/route/user.route");

var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: "*"
	})
);

app.use("/api/users",user);

app.listen(3000);



