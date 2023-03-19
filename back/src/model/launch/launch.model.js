const launches = [];

const launch = {
  flightNumber: 100,
  mission: "",
  rocket: "",
  launchDate: new Date("December 27, 2030"),
  destination: "",
  customer: ["", ""],
  upcoming: true,
  success: true
};

launches.push(launch);

module.exports = {
  launches
};