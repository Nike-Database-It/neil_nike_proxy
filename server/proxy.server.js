const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());


// GET METHODS
app.get('/:shoeID/similar', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3001/${id}/similar`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/search', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3002/${id}/search`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/search/:text', (req, res) => {
  const id = req.params.shoeID;
  const query = req.params.text;
  axios.get(`http://localhost:3002/${id}/search/${query}`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/sizes', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3003/${id}/sizes`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/description', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3003/${id}/description`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/reviews', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3004/${id}/reviews`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/mpg', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3005/${id}/mpg`)
    .then(resp => res.status(200).send(resp.data))
    .catch((err) => {
      console.log(err);
      res.end();
    });
});

app.get('/:shoeID/n&c', (req, res) => {
  const id = req.params.shoeID;
  axios.get(`http://localhost:3006/${id}/n&c`)
    .then(resp => res.status(200).send(resp.data));
});

app.get('/:shoeID/n&c/:style', (req, res) => {
  const id = req.params.shoeID;
  const { style } = req.params;
  axios.get(`http://localhost:3006/${id}/n&c/${style}`)
    .then(resp => res.status(200).send(resp.data));
});


// APP LISTENING PROTOCOL
const PORT = 3500;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
