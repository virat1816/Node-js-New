const { orderService } = require("../services");

let addOrder = async (req, res) => {
  let body = req.body;

  let result = await orderService.addOrder(body);
  res.status(201).json({
    message: "order placed success",
    result,
  });
};

let getAllOrder = async (req, res) => {
  let result = await orderService.getAllOrder();

  res.status(200).json({
    message: "all order get success",
    result,
  });
};

module.exports = { addOrder, getAllOrder };
