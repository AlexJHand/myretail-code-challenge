var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ProductsSchema = new Schema({
    id: {
        type: String,
        required: "Id is Required"
    },
    name: {
        type: String,
        required: "Name is Required",
    },
    price: {
        type: String,
        required: "Price is Required",
    },
    currency: {
        type: String, 
    }
});

// This creates our model from the above schema, using mongoose's model method
var Products = mongoose.model("Products", ProductsSchema);

// Export the User model
module.exports = Products;
