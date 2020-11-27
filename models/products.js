const mongoose = require("mongoose");
var productSchema=mongoose.Schema({
    name:String,
    price:String,
});
const product=mongoose.model("product",productSchema);
module.exports=product;