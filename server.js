const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
//require json data
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

//lEVELL 100
app.get("/", (req, res) => {
  res.send({
    "/pharmcies": "retruns an array of pharmacies in a specific area",
    "/Doctors": "retruns an array of Doctor in a specific area",
    "/Colleges": "retruns an array of Colleges in a specific area",
    "/Hospitals": "retruns an array of Hospitals in a specific area",
  });
});

app.listen(port, () => {
  console.log(`running server ${port}`);
});
