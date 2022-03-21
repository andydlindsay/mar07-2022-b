# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

### Web Server
* all devices connected via tcp/ip
* Requests
  * VERB/METHOD: GET, POST
  * PATH/URL: 


http://localhost:3001/home

* Request response protocol

                              Request
Client <======= tcp ========> Server

```js
// tcp server
const net = require('net');
const port = 3001;

const server = net.createServer();

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

server.on('connection', (connection) => {});

// http server
const http = require('http');
const port = 3001;

const server = http.createServer();

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```


```html
<form action="/login" method="POST">


</form>
```

### Middleware
* is code that sits between the request and the response
* transform the incoming request or outgoing response in some way
* headers: cookies, request parameters, query string parameters
* body: urlencoded, json, image
* encryption

"username=alice&password=123"
{
  username: 'alice',
  password: '123'
}





public
* styles
  * style.css
  * main-layout.css
* scripts
  * main.js
  * client.js

/public/styles/style.css
/public/styles/main-layout.css

app.use(serveStatic('public'));


### EJS (Embedded JavaScript)
* create templates


* variables + template === html
* include partials
* navigation partial
* header partial


