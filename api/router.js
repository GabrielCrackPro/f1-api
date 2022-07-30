const router = require("express").Router();

const data = {
  teams: require("./data/teams.json"),
  drivers: require("./data/drivers.json"),
  races: require("./data/races.json"),
  circuits: require("./data/circuits.json"),
};

router
  .get("/", (req, res) => {
    res.json({
      message: "Welcome to F1 22 API",
      endpoints: "Go to /api/endpoints",
    });
  })
  .get("/api/teams", (req, res) => {
    res.json(data.teams);
  })
  .get("/api/drivers", (req, res) => {
    res.json(data.drivers);
  })
  // TODO: Add more races

  .get("/api/races", (req, res) => {
    res.json(data.races);
  })
  .get("/api/circuits", (req, res) => {
    res.send(data.circuits);
  })
  .get("/api/teams/:name", (req, res) => {
    const { name } = req.params;
    const team = data.teams.filter((team) => team.name == name);
    res.json(team);
  })
  .get("/api/drivers/:name", (req, res) => {
    const { name } = req.params;
    const driver = data.drivers.filter((driver) => driver.name == name);
    res.json(driver);
  })
  .get("/api/races/:round", (req, res) => {
    const { round } = req.params;
    const race = data.races.filter((race) => race.round == round);
    res.json(race);
  })
  .get("/api/circuits/:circuitId", (req, res) => {
    const { circuitId } = req.params;
    const circuit = data.circuits.filter((circuit) => circuit.id == circuitId);
    res.json(circuit);
  });

module.exports = router;
