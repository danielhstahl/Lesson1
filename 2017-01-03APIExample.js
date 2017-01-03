const https = require('https');
const http = require('http');
var i = 'http://jsonplaceholder.typicode.com/users?id=1'

http.get(i, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});