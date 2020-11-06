const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

// setup express
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

// setup api
server.use('/api', require('./routes/api'));
server.use('/api/account', require('./routes/account'));
server.use('/api/businesspartners', require('./routes/businesspartners'));

/* error handling: this is middleware to handle error */
server.use(function (err, req, res, next) {
    let error = {
        code: err.code,
        message: err.message
    };
	res.status(500);
	res.json(error);
});

// setup http + https
const port = 3001;
const portssl = 3003;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // TO DO review ssl certificate

const key  = fs.readFileSync('sslcert/key.pem');
const cert = fs.readFileSync('sslcert/cert.pem');
const options = {
    key: key,
    cert: cert
};
const credentials = options;

const httpServer = http.createServer(server);
httpServer.listen(port);

const httpsServer = https.createServer(credentials, server);
httpsServer.listen(portssl);