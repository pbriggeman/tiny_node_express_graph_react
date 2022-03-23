const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const connect = require('connect');

app.use(express.json());
app.use(express.static(path.join(__dirname+'/')));

// default URL for website
app.use('/', function(req,res){
  var options = {
    title: "Express"
  };

  res.sendFile(path.join(__dirname+'/index.html'), options);
  //__dirname : It will resolve to your project folder.
});

// app.use(express.static(path.join(__dirname+'/index.html')));

// app.use(express.static(__dirname + '/public'));
const port = 8080;
// connect()
//   .use(connect.static("/"))
//   .listen(port);

const server = http.createServer(app);
server.listen(port);
console.debug('Server listening on port ' + port);