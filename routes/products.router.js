// Requires
const router = require('express').Router();
const request = require('request');

// API Get
router.get('/', function(req, res) {
    let productId = req.query.id;
    console.log('Product Id: ', productId);

    let url =   'https://redsky.target.com/v2/pdp/tcin/'
                + productId
                + '?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics'

    request(url, function (error, response) {
        if (!error) {
            console.log("response", response.body);
            let prodObj = JSON.parse(response.body);
            console.log("prodObj", prodObj);
            console.log('Product*******', prodObj.product.item.product_description.title);
            console.log('Genre', prodObj.product.item.product_classification.item_type_name);
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    })
})

// Exports
module.exports = router;