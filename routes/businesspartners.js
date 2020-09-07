const router = require('express').Router();
const moment = require('moment');
const baseService = require('../services/baseService');

router.get('/accountcategorylist', async function (req, res, next) {
    try 
    {
        await baseService.refreshSession();
        let accountcategorylist = await baseService.getAccountCategoryList();
        return res.json({
            code: true,
            data: accountcategorylist,
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        });        
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
        return res.json({
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