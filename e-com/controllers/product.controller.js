const { productService } = require("../services");

let addProduct = async (req, res) => {
  let body = req.body;

  let result = await productService.add(body);
  res.status(201).json({
    message: "product added success",
    result,
  });
};

module.exports = { addProduct };
