const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to handle JSON files
app.use(express.urlencoded({ extended: false }));


// require the JSON files in the data folder
 let Harrow = require('./data/Harrow.json');
 let Heathrow = require('./data/Heathrow.json');
 let Stratford = require('./data/Stratford.json');

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
    res.json(Stratford.pharmacies);
})

app.get('/colleges', (req, res) => {
    console.log('Returning all the Colleges in Stratford City');
    res.json(Stratford.colleges);
})

app.get('/doctors', (req, res) => {
    console.log('Returning all the Doctors in Stratford City');
    res.json(Stratford.doctors);
})

app.get('/hospitals', (req, res) => {
    console.log('Returning all the Hospitals in Stratford City');
    res.json(Stratford.hospitals);
})

// Level 300: You should be able to return data based on any city that is passed to the server
app.get('/:city/pharmacies', (req, res) => {
    let cityData = req.params.city;

    if(cityData === "Stratford") {
     res.json(Stratford.pharmacies);

    } else if(cityData === "Heathrow") {
        res.json(Heathrow.pharmacies);

    }else if(cityData === "Harrow") {
        res.json(Harrow.pharmacies);

    } else{
        res.status(404).send('No result Find for this City Sorry!!!');
    }

})

app.get('/:city/colleges', (req, res) => {
    let cityData = req.params.city;

    if(cityData === "Stratford") {
     res.json(Stratford.colleges);

    } else if(cityData === "Heathrow") {
        res.json(Heathrow.colleges);

    }else if(cityData === "Harrow") {
        res.json(Harrow.colleges);

    } else{
        res.status(404).send('No result Find for this Colleges Sorry!!!');
    }

})

app.get('/:city/doctors', (req, res) => {
    let cityData = req.params.city;

    if(cityData === "Stratford") {
     res.json(Stratford.doctors);

    } else if(cityData === "Heathrow") {
        res.json(Heathrow.doctors);

    }else if(cityData === "Harrow") {
        res.json(Harrow.doctors);

    } else{
        res.status(404).send('No result Find for this Doctors Sorry!!!');
    }

})

app.get('/:city/hospitals', (req, res) => {
    let cityData = req.params.city;

    if(cityData === "Stratford") {
     res.json(Stratford.hospitals);

    } else if(cityData === "Heathrow") {
        res.json(Heathrow.hospitals);

    }else if(cityData === "Harrow") {
        res.json(Harrow.hospitals);

    } else{
        res.status(404).send('No result Find for this Hospitals Sorry!!!');
    }

})

// Level 500: Make all of that in one single route as:

app.get("/:city/:category", (req, res) => {
    const city = req.params.city;
    const category = req.params.category;
    city.includes("harrow") && category.includes("pharmacies")
      ? res.json(Harrow.pharmacies)
      : city.includes("harrow") && category.includes("colleges")
      ? res.json(Harrow.colleges)
      : city.includes("harrow") && category.includes("doctors")
      ? res.json(Harrow.doctors)
      : city.includes("harrow") && category.includes("hospitals")
      ? res.json(Harrow.hospitals)
      : city.includes("heathrow") && category.includes("pharmacies")
      ? res.json(Heathrow.pharmacies)
      : city.includes("heathrow") && category.includes("colleges")
      ? res.json(Heathrow.colleges)
      : city.includes("heathrow") && category.includes("doctors")
      ? res.json(Heathrow.doctors)
      : city.includes("heathrow") && category.includes("hospitals")
      ? res.json(Heathrow.hospitals)
      : city.includes("stratford") && category.includes("pharmacies")
      ? res.json(Stratford.pharmacies)
      : city.includes("stratford") && category.includes("colleges")
      ? res.json(Stratford.colleges)
      : city.includes("stratford") && category.includes("doctors")
      ? res.json(Stratford.doctors)
      : city.includes("stratford") && category.includes("hospitals")
      ? res.json(Stratford.hospitals)
      : res.status(400).json({ msg: "City or Category not found" })
  });








app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});