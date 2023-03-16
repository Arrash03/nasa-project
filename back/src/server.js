const http = require("http");
const app = require("./express/app");
const { findHabitablePlanets } = require("./model/planets/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){
  await findHabitablePlanets();
  server.listen(PORT, ()=>{
    console.log(`server is on port ${PORT}...`);
  });
};

startServer();

