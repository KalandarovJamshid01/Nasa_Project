const express = require("express");
const app = express();
const planets = require("./routes/planets");

app.use(express.json());
app.use("/planets", planets);
module.exports = app;
