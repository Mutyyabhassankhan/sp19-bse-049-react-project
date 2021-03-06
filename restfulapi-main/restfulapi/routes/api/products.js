const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Product } = require("../../models/product");
//get products
router.get("/", async (req, res) => {
  let products = await Product.find();
  return res.send({ products });
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(product); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.charges = req.body.charges;
  product.description = req.body.description;

  await product.save();
  return res.send(product);
});
//update a record
router.delete("/:id", async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
});
//Insert a record
router.post("/", async (req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.charges = req.body.charges;
  product.description = req.body.description;
  await product.save();
  return res.send(product);
});
module.exports = router;
