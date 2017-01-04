const https = require('https');
const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});