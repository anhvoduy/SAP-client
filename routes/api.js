const router = require('express').Router();
const moment = require('moment');
const baseService = require('../services/baseService');
const info = require('../package.json');
const userInfo = require('../config').userInfo;

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
        let data = await baseService.loginSAP(userInfo);
        res.json({
            code: true,
            data: data,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        next();
    } 
    catch(err) {
        throw err;
    }
});

router.get('/items', async function (req, res, next) {
    try 
    {
        let res_login = await baseService.loginSAP(userInfo);
        
        let { SessionId } = res_login;
        let cookieString = `B1SESSION=${SessionId}`;

        let res_items = await baseService.getItems(cookieString);
        res.json({
            code: true,
            data: res_items,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        next();
    } 
    catch(err) {
        throw err;
    }
});

router.get('/accountcategorylist', async function (req, res, next) {
    try 
    {
        await baseService.refreshSession();
        let accountcategorylist = await baseService.getAccountCategoryList();
        res.json({
            code: true,
            data: accountcategorylist,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        next();
    } 
    catch(err) {
        throw err;
    }
});

router.get('/chartofaccounts', async function (req, res, next) {
    try 
    {
        await baseService.refreshSession();
        let accounts = await baseService.getChartOfAccounts();
        res.json({
            code: true,
            data: accounts,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        next();
    } 
    catch(err) {
        throw err;
    }
});

module.exports = router;