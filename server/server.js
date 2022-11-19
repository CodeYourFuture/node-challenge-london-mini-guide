const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send([
        {
            "/pharmacies": "returns an array of pharmacies in a specific area"
        },
        {
            "/colleges": "colleges list for stratford"
        },
        {
            "/doctors": "returns doctors list for stratford"
        },
        {
            "/hospitals": "returns hospitals list for stratford"
        }	
    ])
})

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
})