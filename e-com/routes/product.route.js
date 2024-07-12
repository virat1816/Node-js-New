let express = require("express");
const { productController } = require("../controllers");
let route = express.Router();

route.get("/get", (req, res) => {
  res.status(200).json({
    message: "user get succeews",
  });
});

route.post("/add", productController.addProduct);

module.exports = route;
