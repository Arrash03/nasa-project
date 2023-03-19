const { launches,
        launchesCreator } = require("../../model/launch/launch.model");

function getAllLaunches(req, res) {
  return res.status(200).json(launches);
};

function postLaunchData(req, res){
  const launch = req.body;
  // checking validation 
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
    return res.status(400).json({
      "error": "Missing required launch property"
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)){
    return res.status(400).json({
      "error": "Invalid launchDate syntax"
    });
  }

  // send to model
  else{
    const result = launchesCreator(launch);

    // send a response to client
    res.status(201).json(result);
  }
}

module.exports = {
  getAllLaunches,
  postLaunchData
}