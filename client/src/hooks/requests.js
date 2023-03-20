const URL = "http://localhost:8000";

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets/`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const jsonResponse =  await response.json();
  return jsonResponse.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${URL}/launches`, {
      "method": "post",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(launch)
    });
  }
  catch{
    return { "ok": false }
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  return await fetch(`${URL}/launches/${id}`, {
    method: "delete"
  });
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};