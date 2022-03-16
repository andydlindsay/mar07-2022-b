const net = require('net');
const port = 12345;

const server = net.createServer();
// console.log(server);

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});

const connections = [];

server.on('connection', (connection) => {
  console.log('a new client has connected');
  connections.push(connection);

  // console.log(connection);
  connection.write('welcome to our chat server!');

  connection.on('data', (messageFromClient) => {
    console.log('message from client:', messageFromClient);

    // iterate through current connections
    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(messageFromClient);
      }
    }

    // connection.write(messageFromClient);
  });

  connection.setEncoding('utf-8');
});
