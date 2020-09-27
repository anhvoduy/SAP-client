const router = require('express').Router();
const moment = require('moment');
const baseService = require('../services/baseService');

router.post('/BusinessPartners', async function (req, res, next) {
    try 
    {
        let cardCode = 'C1', cardName = 'Customer C1', cardType = 'cCustomer';
        await baseService.refreshSession();
        let data = await baseService.addBusinessPartners(cardCode, cardName, cardType);
        return res.json({ code: true, data: data });
    } 
    catch(err) {
        throw err;
    }
});

router.get('/BusinessPartners', async function (req, res, next) {
    try 
    {
        let cardCode = 'C1';
        await baseService.refreshSession();
        let data = await baseService.getBusinessPartners(cardCode);
        return res.json({ code: true, data: data });
    } 
    catch(err) {
        throw err;
    }
});

router.patch('/BusinessPartners', async function (req, res, next) {
    try 
    {
        let cardCode = 'C1', cardName = 'Customer C1111';
        await baseService.refreshSession();
        let data = await baseService.editBusinessPartners(cardCode, cardName);
        return res.json({ code: true, data: data });
    } 
    catch(err) {
        throw err;
    }
});

module.exports = router;