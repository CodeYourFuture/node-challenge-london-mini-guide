const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
//require json data
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");
console.log(Stratford.pharmacies);

//lEVEL 100
app.get("/", (req, res) => {
  res.send({
    "/pharmacies": "retruns an array of pharmacies in a specific area",
    "/Doctors": "retruns an array of Doctor in a specific area",
    "/Colleges": "retruns an array of Colleges in a specific area",
    "/Hospitals": "retruns an array of Hospitals in a specific area",
  });
});

//LEVEL200
app.get("/pharmacies", (req, res) => {
  res.send(Stratford.pharmacies);
});
app.get("/doctors", (req, res) => {
  res.send(Stratford.doctors);
});
app.get("/colleges", (req, res) => {
  res.send(Stratford.colleges);
});
app.get("/hospitals", (req, res) => {
  res.send(Stratford.hospitals);
});

app.listen(port, () => {
  console.log(`running server ${port}`);
});
