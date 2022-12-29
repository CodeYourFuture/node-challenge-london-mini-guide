const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
const cors = require("cors");
app.use(cors());
//require the Json files from data folder
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');




app.get("/Harrow", (req, res) => {

  res.status(200).json(Harrow);
});


app.get("/:city", (req, res) => {
  const city = req.params.city;
  console.log(city)
  res.status(200).send(city);
});



// 100: on the route `/` respond with the routes you are planing to implement
app.get('/', (req, res) => {
  res.send({
    SupportedRoutes: [
      '/pharmacies',
      '/colleges',
      '/doctors',
      '/hospitals'
    ]
  });
});



// 200: only one city
app.get("/pharmacies", (req, res) => {
  res.json(Harrow.pharmacies);
});
app.get("/colleges", (req, res) => {
  res.json(Harrow.colleges);
});
app.get("/doctors", (req, res) => {
  res.json(Harrow.doctors);
});
app.get("/hospitals", (req, res) => {
  res.json(Harrow.hospitals);
});

// 300: should be able to return data based on any city that is passed to the server.
app.get("/:city/pharmacies", function (req, res) {
  if (req.params.city === "Harrow") {
    res.json(Harrow.pharmacies);
  } else if (req.params.city === "Stratford") {
    res.json(Stratford.pharmacies);
  } else res.json(Heathrow.pharmacies);
});

app.get("/:city/doctors", function (req, res) {
  if (req.params.city === "Harrow") {
    res.json(Harrow.doctors);
  } else if (req.params.city === "Stratford") {
    res.json(Stratford.doctors);
  } else res.json(Heathrow.doctors);
});

app.get("/:city/colleges", function (req, res) {
  if (req.params.city === "Harrow") {
    res.json(Harrow.colleges);
  } else if (req.params.city === "Stratford") {
    res.json(Stratford.colleges);
  } else res.json(Heathrow.colleges);
});

app.get("/:city/hospitals", function (req, res) {
  if (req.params.city === "Harrow") {
    res.json(Harrow.hospitals);
  } else if (req.params.city === "Stratford") {
    res.json(Stratford.hospitals);
  } else res.json(Heathrow.hospitals);
});

// 500 :all in one single route
app.get('/:city/:category', (req, res) => {
  const reqCity = req.params.city;
  const reqCategory = req.params.category;
  if (reqCity === 'Harrow') {
    switch (reqCategory) {
      case 'pharmacies':
        res.status(200).send(Harrow.pharmacies);
        break;
      case 'colleges':
        res.status(200).send(Harrow.colleges);
        break;
      case 'hospitals':
        res.status(200).send(Harrow.hospitals);
        break;
      case 'doctors':
        res.status(200).send(Harrow.doctors);
    }
  }
  else if (reqCity === 'Heathrow') {
    switch (reqCategory) {
      case 'pharmacies':
        res.status(200).send(Heathrow.pharmacies);
        break;
      case 'colleges':
        res.status(200).send(Heathrow.colleges);
        break;
      case 'hospitals':
        res.status(200).send(Heathrow.hospitals);
        break;
      case 'doctors':
        res.status(200).send(Heathrow.doctors);
    }
  }
  else if (reqCity === 'Stratford') {
    switch (reqCategory) {
      case 'pharmacies':
        res.status(200).send(Stratford.pharmacies);
        break;
      case 'colleges':
        res.status(200).send(Stratford.colleges);
        break;
      case 'hospitals':
        res.status(200).send(Stratford.hospitals);
        break;
      case 'doctors':
        res.status(200).send(Stratford.doctors);
    }
  }
  else {
    res.status(404).send('bad req')
  }
})


app.listen(port, () => console.log(`Server on port ${port}`));
