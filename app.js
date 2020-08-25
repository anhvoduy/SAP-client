const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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

const siteApp = path.join(__dirname, 'coins/build');
server.use('/', express.static(siteApp, { index: 'index.html '}));
server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'coins/build', 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Node Js version: ${process.version} on port: %s`, port);
});