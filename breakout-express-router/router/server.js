require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

const db = require('./db/db');
db.query('SELECT * FROM products;')
  .then(d => console.log(d));

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
