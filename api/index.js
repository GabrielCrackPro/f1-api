const express = require("express");
const morgan = require("morgan");
const router = require("./router");

const app = express();

const port = process.env.PORT || 3000;

app.use(router);
app.use(morgan("dev"));
app.use(express.json());

app.listen(port, () => console.log(`🚀 Listening on port ${port}...`));
