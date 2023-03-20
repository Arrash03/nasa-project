const launches = [];

 let latestFlightNumber = 100;

function launchesCreator(launch) {
  let launchCompleteForm = Object.assign({
    flightNumber: latestFlightNumber,
    customer: ["", ""],
    upcoming: true,
    success: true
  }, launch);

  launches.push(launchCompleteForm);
  latestFlightNumber += 1;
  return launchCompleteForm
}

function isLaunchExist(launchId){
  return launches.find((launch) => {
    return launch.flightNumber === launchId;
  });
}

function abortLaunchModel(launchId){
  const specifiedLaunch = launches.find((launch) => {
    return launch.flightNumber === launchId;
  });

  specifiedLaunch.upcoming = false;
  specifiedLaunch.success = false;
  
  return launches;
}


module.exports = {
  launches,
  launchesCreator,
  isLaunchExist,
  abortLaunchModel
};