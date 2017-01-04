const https = require('https');
const http = require('http');

https.get('https://api.stlouisfed.org/fred/series?series_id=GNPCA&api_key=a317e3bc1c064490ef1f196c1d4b8dab&file_type=json', (res) => {

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
