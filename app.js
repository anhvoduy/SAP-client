const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');

//const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
//const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const options = {
    pfx: fs.readFileSync('./sslcert/sap-10-ssl.pfx'),
    passphrase: 'P@ssw0rd'
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

const httpServer = http.createServer(server);
httpServer.listen(port);

const httpsServer = https.createServer(credentials, server);
httpsServer.listen(portssl);