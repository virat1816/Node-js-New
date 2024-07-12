let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
});

let product = mongoose.model("productSchema", productSchema);

module.exports = product;
