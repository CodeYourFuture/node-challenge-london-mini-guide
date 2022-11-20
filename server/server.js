const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

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

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
})