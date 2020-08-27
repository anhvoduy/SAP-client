const router = require('express').Router();
const moment = require('moment');
const baseService = require('../services/baseService');
const info = require('../package.json');

router.get('/status', function (req, res, next) {
    res.json({
        code: true,
        message: 'GET(): Success',
        version: info.version,
        time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

router.post('/status', function (req, res, next) {
    res.json({
        code: true,
        message: 'POST(): Success',
        body: req.body,
        version: info.version,
        time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    });
    next();
});

router.get('/loginsap', async function (req, res, next) {
    try 
    {
        let data = await baseService.loginSAP();
        console.log('data:', data);
        
        res.json({
            code: true,     
            data: data,
            version: info.version,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });

        next();
    } 
    catch(err) {
        throw err;
    }
});

module.exports = router;