const net = require('net');

const config = {
  host: 'localhost',
  port: 12345
};

const client = net.createConnection(config);
// console.log(client);

client.on('data', (messageFromServer) => {
  console.log('message from server:', messageFromServer);
});

client.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  // console.log(data);
  client.write(data);
});
