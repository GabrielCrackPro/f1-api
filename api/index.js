const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);
app.use(morgan("dev"));
app.use(express.json());

app.listen(port, () => console.log(`🚀 Listening on port ${port}...`));
