const express = require('express');
const app = express();
app.use(express.json());
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');
app.get('/', (req, res) => {
  res.send(
    {
      SupportedRoutes: [
        "/Harow",
        "/Heathrow",
        "/Stratford"
      ]
    }
  )
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('works'))