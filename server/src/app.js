const express = require("express");
const app = express();
const cors = require("cors");

const planets = require("./routes/planets");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/planets", planets);
module.exports = app;
