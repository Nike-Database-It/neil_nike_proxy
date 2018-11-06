const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());



// APP LISTENING PROTOCOL
const PORT = 3500;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
