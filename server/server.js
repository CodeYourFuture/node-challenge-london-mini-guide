const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const Harrow = require('./data/Harrow.json');
const londan = require('./data/Londan.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');

app.get('/', (req, res) => {
  res.send(
    {
      SupportedRoutes: [
        '/Harrow',
        '/Heatgrow',
        'Stratford'
      ],
      Version: "0.0.0.1",
      Author: "mrmaroga",
      Github: "https://github.com/AdvocateM",
      Web: "https://mrmaroga.com"
    });
});

app.get('/pharmacies', (req, res) => {
  res.send(Stratford.pharmacies)
});

app.get('/colleges', (req, res) => {
  res.send(Stratford.colleges)
});

app.get('/doctors', (req, res) => {
  res.send(Stratford.doctors)
});

app.get('/hospitals', (req, res) => {
  res.send(Stratford.hospitals)
});

// Now make your city dynamic. You should be able to return data based on any city that is passed to the server.
app.get('/:city/pharmacies', (req, res) => {
  const input = req.params['city'];

  if (input === `Harrow` || input === `harrow`) {
    res.send(Harrow.pharmacies)
    console.log(input)

  } else if (input === `heathrow` || input === `Heathrow`) {
    res.send(Heathrow.pharmacies)
    console.log(input)
  }
  else if (input === `stratford` || input === `Stratford`) {
    res.send(Stratford.pharmacies)
    console.log(input)
  } else {
    res.send("Oops, Something wasn't right. Please Check your Spelling...")
    console.log(input)
  }

});

// Make all of that in one single route as:
app.get('/:city/:category', (req, res) => {
  const city = req.params['city'];
  const category = req.params['category'];
  // console.log(`${city}, ${category}`)
  // res.send(Heathrow.pharmacies)

  if (city === `Harrow` || city === `harrow`) {

    if (category === `pharmacies` || category === `Pharmacies`) {
      res.send(Harrow.pharmacies)
      console.log(`${city}, ${category}`)
    } else if (category === `Colleges` || category === `colleges`) {
      res.send(Harrow.colleges)
      console.log(`${city}, ${category}`)
    } else if (category === `doctors` || category === `doctors`) {
      res.send(Harrow.doctors)
      console.log(`${city}, ${category}`)
    } else if (category === `hospitals` || category === `hospitals`) {
      res.send(Harrow.hospitals)
      console.log(`${city}, ${category}`)
    } else {
      res.send("Oops, Something wasn't right. Please Check your Spelling...")
      console.log(`${city}, ${category}`)
    }
  }

  // City heathrow and it's Category
  else if (city === `heathrow` || city === `Heathrow`) {
    if (category === `pharmacies` || category === `Pharmacies`) {
      res.send(Heathrow.pharmacies)
      console.log(`${city}, ${category}`)
    } else if (category === `Colleges` || category === `colleges`) {
      res.send(Heathrow.colleges)
      console.log(`${city}, ${category}`)
    } else if (category === `doctors` || category === `doctors`) {
      res.send(Harrow.doctors)
      console.log(`${city}, ${category}`)
    } else if (category === `hospitals` || category === `hospitals`) {
      res.send(Heathrow.hospitals)
      console.log(`${city}, ${category}`)
    } else {
      res.send("Oops, Something wasn't right. Please Check your Spelling...")
      console.log(`${city}, ${category}`)
    }
  }

  // City Stratford and it's Category
  else if (city === `stratford` || city === `Stratford`) {

    if (category === `pharmacies` || category === `Pharmacies`) {
      res.send(Stratford.pharmacies)

      console.log(`${city}, ${category}`)
    } else if (category === `Colleges` || category === `colleges`) {
      res.send(Stratford.colleges)
      console.log(`${city}, ${category}`)
    } else if (category === `doctors` || category === `doctors`) {
      res.send(Stratford.doctors)
      console.log(`${city}, ${category}`)
    } else if (category === `hospitals` || category === `hospitals`) {
      res.send(Stratford.hospitals)
      console.log(`${city}, ${category}`)
    } else {
      res.send("Oops, Something wasn't right. Please Check your Spelling...")
      console.log(`${city}, ${category}`)
    }
  }

  // Error Message when the city Doesn't exist
  else {
    res.send("Oops, Something wasn't right. Please Check your Spelling...")
    console.log(city)
  }
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
