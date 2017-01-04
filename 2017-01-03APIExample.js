const https = require('https');
const http = require('http');

https.get('https://api.stlouisfed.org/fred/series/observations?series_id=DSWP1&api_key=6b75e4bc06a6ed991a7a9cc64d70c3fa&file_type=json', (res) => {

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});