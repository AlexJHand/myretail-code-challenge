// Requires
const router = require('express').Router();
const request = require('request');

// API Get
router.get('/', function(req, res) {
    let productId = req.query.id;
    console.log('Product Id: ', productId);
    res.sendStatus(200);
})

// Exports
module.exports = router;