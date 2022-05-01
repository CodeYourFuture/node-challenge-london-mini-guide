const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

app.get("/harrow", (req, res) => {
  res.send(harrow);
});
app.get("/heathrow", (req, res) => {
  res.send(heathrow);
});
app.get("/Stratford", (req, res) => {
  res.send(heathrow);
});
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
