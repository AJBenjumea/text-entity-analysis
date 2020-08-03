const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const entityMachine = require('./services/entityMachine');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  entityMachine(req.body.urlA, req.body.urlB)
    .then(data => {
      res.send(data)
    })
    .catch(err => res.status(500))
})

app.listen(process.env.PORT_A, () => console.log(`Example app listening at http://localhost:${process.env.PORT_A}`))