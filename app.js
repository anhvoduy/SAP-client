const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');

const key  = fs.readFileSync('sslcert/key.pem');
const cert = fs.readFileSync('sslcert/cert.pem');
const options = {
    key: key,
    cert: cert
};
const credentials = options;

// setup express
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// setup api
server.use('/api', require('./routes/api'));

/* error handling: this is middleware to handle error */
server.use(function (err, req, res, next) {
    let error = {
        code: err.code,
        message: err.message
    };
	res.status(500);
	res.json(error);
});

const port = 3000;
const portssl = 3003;

// server.listen(port, () => {
//     console.log(`Node Js version: ${process.version} on port: %s`, port);
// });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const httpServer = http.createServer(server);
httpServer.listen(port);

const httpsServer = https.createServer(credentials, server);
httpsServer.listen(portssl);