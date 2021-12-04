const mongoose = require("mongoose");
mongoose.pluralize(null);

const companySchema = mongoose.Schema( {
    companyid : String,
    name : String,
    productids : [{
        type:String
    }]
});

const companyModel = mongoose.model("Company",companySchema);

module.exports= companyModel;