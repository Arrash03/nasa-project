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


module.exports = {
  launches,
  launchesCreator
};