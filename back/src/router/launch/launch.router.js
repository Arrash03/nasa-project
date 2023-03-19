const express = require("express");
const { getAllLaunches,
        postLaunchData } = require("./launch.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", postLaunchData);

module.exports = launchesRouter;