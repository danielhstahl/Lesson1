const https = require('https');
const http = require('http');

const myExampleFunction=(res)=>{
	return "Hello World";
}

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});

myExampleFunction();
//console.log("Hello world");

