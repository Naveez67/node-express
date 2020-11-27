var express = require('express');
var router = express.Router();
var product=require("../models/products");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let products= await product.find();
  console.log(products);
  res.render('products/productslist',{tit:"Products in DataBase",products});
});
router.get('/add', async function(req, res, next) {
  res.render('products/add');
});
//store data is db
router.post("/add", async function (req, res, next) {
  let product1 = new product(req.body);
  await product1.save();
  res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
  let Product = await product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/edit/:id", async function (req, res, next) {
  let Product = await product.findById(req.params.id);
  res.render("products/edit",{Product})
});
router.post("/edit/:id", async function (req, res, next) {
  let Product = await product.findById(req.params.id);
  Product.name=req.body.name;
  Product.price=req.body.price;
  await Product.save();
  res.redirect("/products");
});

module.exports = router;
