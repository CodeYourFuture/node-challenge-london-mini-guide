const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to handle JSON files


// require the JSON files in the data folder
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');

// Level 100:  / respond with the routes you are planing to implement
app.get('/', (req, res) => {
    console.log("Returning all the routes");
    res.send(
        {
            SupportedRoutes : [
                '/Pharmacies',
                '/Doctors',
                '/Colleges',
                '/Hospitals',
            ],
            Version:"0.0.0.1",
            Author: "Tresor && Riyaaz"
        });
})

// Level 200:  working for only one city Stratford

app.get('/pharmacies', (req, res) => {
    console.log('Returning all the Pharmacies in Stratford City');
    res.send(Stratford.pharmacies);
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});