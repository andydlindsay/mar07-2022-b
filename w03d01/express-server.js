const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5829;

// middleware
// app.use((req, res, next) => {
//   console.log('incoming request', req.method, req.url);

//   // res.send('hello from the middleware');
//   next();
//   // return;
// });
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));

// console.log(arguments);

// GET /about
app.get('/about', (req, res) => {
  // res.send('this is the about page');
  // res.sendFile(`${__dirname}/pages/about.html`);
  res.json({ message: 'hello there' });
});

// GET /products
app.get('/products', (req, res) => {
  if (true) {
    return res.send('your cookie is not valid');
  }

  res.send('products page');
});

// 404 page
app.get('*', (req, res) => {
  res.send('page not found ooops');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
