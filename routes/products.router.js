// Requires
const router = require('express').Router();
const request = require('request');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');


// API Get
router.get('/', function(req, res) {
    let productId = req.query.id;
    console.log('Product Id: ', productId);
    let returnObj = {
        id: null,
        genre: "",
        url: "",
        name: "",
        price: null,
        currency: ""
    }

    let url =   'https://redsky.target.com/v2/pdp/tcin/'
                + productId
                + '?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics'

    request(url, function (error, response) {
        if (!error) {
            let prodObj = JSON.parse(response.body);
            returnObj.id = productId;
            returnObj.genre = prodObj.product.item.product_classification.item_type_name,
            returnObj.url = prodObj.product.item.buy_url
            
            console.log("returnObj", returnObj);
            console.log('Type', typeof(productId));
            let mongoUrl = 'mongodb://localhost:27017/';
            MongoClient.connect(mongoUrl, function (err, db) {
                if (err) throw err;
                let dbo = db.db("myretail");
                dbo.collection("products").findOne({
                    "_id": productId
                }, function (err, result) {
                    if (err) throw err;
                    console.log(result.name);
                    returnObj.name = result.name;
                    returnObj.price = result.price;
                    returnObj.currency = result.currency;
                    db.close();
                    res.send(returnObj);
                });
            });
        } else {
            res.sendStatus(500);
        }
    })
});

router.get('/allproducts', function(req, res) {
    console.log('In allproducts');
    let url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/';
    MongoClient.connect(url, function (err, db) {
    // mongoose.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("myretail");
        dbo.collection("products").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
})

router.get('/updateprice', function(req, res) {
    console.log('In updateprice');
    let productId = req.query.id;
    let newPrice = req.query.price;
    console.log(productId + " " + newPrice);
    let url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/';
    MongoClient.connect(url, function (err, db) {
    // mongoose.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("myretail");
        let myquery = {_id: productId};
        var newvalues = {$set: {price: newPrice}};
        dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
    res.sendStatus(200);
})

// Exports
module.exports = router;