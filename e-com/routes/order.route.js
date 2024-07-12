let express = require("express");
const { orderController } = require("../controllers");

let route = express.Router();

route.post("/add-order", orderController.addOrder);
route.get("/get-all-order", orderController.getAllOrder);

module.exports = route;
