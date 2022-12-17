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
app.get('/pharmacies', (req, res) => {b 
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


// Level 500
const validCategories = ['PHARMACIES', 'DOCTORS', 'COLLEGES', 'HOSPITALS'];

app.get('/:city/:category', (request,response) => {
    const city = getCity(request.params.city);
    if (city)
    {
        const category = request.params.category.toUpperCase();
        if (validCategories.includes(category))
        {
            response.send(city[category.toLowerCase()]);
        }
        else
        {
            response.status(404).send({Error: `Invalid Category ${category}`});
        }
    }
    else {
        response.status(404).send("City not found");
    }

    });



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});