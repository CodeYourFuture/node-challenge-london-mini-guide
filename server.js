const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

app.get("/", (req, res) => {
  res.send(
    "use /:city/:category like /heathrow , /harrow and /stratford for finding details /n you can add / pharmacies , / colleges /doctors or /hospital to specify "
  );
});

app.get("/:city/:service", (req, res) => {
  const city = eval(req.params.city);
  const service = req.params.service;
  res.send(city[service] ? city[service] : "SERVICE IS NOT VALID");
});
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
