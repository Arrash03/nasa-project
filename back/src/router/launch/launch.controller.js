const {launches} = require("../../model/launch/launch.model");

function getAllLaunches(req, res) {
  return res.status(200).json(launches);
};

module.exports = getAllLaunches;