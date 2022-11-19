const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
//require json data
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

app.get("/", (req, res) => {
  res.send({
    supportedRoutes: ["/Pharmacies", "/Doctors", "/Colleges", "Hospitals"],
  });
});

app.listen(port, () => {
  console.log(`server listen to ${port}`);
});
