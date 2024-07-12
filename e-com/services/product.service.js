const { productSchema } = require("../models");

let add = (body) => {
  return productSchema.create(body);
};

module.exports = { add };
