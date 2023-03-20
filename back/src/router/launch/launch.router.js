const express = require("express");
const { getAllLaunches,
        postLaunchData,
        abortLaunchData } = require("./launch.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", postLaunchData);
launchesRouter.delete("/:id", abortLaunchData)

module.exports = launchesRouter;