const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("../router/planets/planets.router");
const launchesRouter = require("../router/launch/launch.router");

const app = express();

// it is important to be able to request from another origin
app.use(cors({
  origin:"http://localhost:3000"
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use(planetsRouter);
app.use(launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

module.exports = app;
