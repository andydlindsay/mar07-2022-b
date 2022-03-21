const http = require('http');
const port = 3001;

const server = http.createServer((request, response) => {
  console.log('there has been a request');

  console.log(request.method, request.url);

  if (request.method === 'GET') {
    if (request.url === '/about') {
      response.write('welcome to the about page');
      return response.end();
    }

    if (request.url === '/products') {
      response.write('<h1>This is the products page</h1>');
      return response.end();
    }
  }

  response.write('welcome to the site');
  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
