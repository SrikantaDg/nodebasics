const http = require('http');

const routeRequest = require('./routes');

http.createServer(routeRequest).listen(3000);