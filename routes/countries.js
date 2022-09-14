const express = require('express')
const router = express.Router();
const Country = require('models/Country');

//Get home page of the countries route
router.get('/', async (req, res) =>{
    const countires = await Country.findAll(); 
    res.render('countries', {
        title: 'Countries',
        countrylist: countires
    });
});

module.exports = router;