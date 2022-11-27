const express = require("express");
const cors = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({origin: "*"}));
app.use(express.json()); // To parses the incoming JSON requests, and puts the parsed data in "req.body".
// cities data
const stratford = require("../data/Stratford.json");
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");


app.get("/", (req, res) => {
    res.send([
        {
            "/pharmacies": "returns an array of pharmacies in a specific area",
            "/colleges": "returns an array of colleges in a specific area",
            "/doctors": "returns an array of doctors in a specific area",
            "/hospitals": "returns an array of hospitals in a specific area"
        }
    ])
})

const cities = {stratford, harrow, heathrow}; // London cities with data

// route to get data with specified city and category e.g http://localhost/stratford/pharmacies
app.get("/:city/:category", (req, res) => {
    const city = req.params.city;
    const category = req.params.category;
    res.send(cities[city][category]);
})

app.listen(port, (req, res) => console.log(`http://localhost:${port}`));

module.exports = app;