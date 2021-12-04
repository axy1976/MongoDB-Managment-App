
const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = mongoose.Schema( {
    productid : String,
    title : String,
    price : String,
    category : [{
        type:String
    }],
    companyid : String,
    sellerid : [{
        type:String
    }],
});

const productModel = mongoose.model("Product",productSchema);

module.exports= productModel;
