const { adminSchema } = require("../models");

let register = (body) => {
  //   console.log(body, "from sertvice");

  return adminSchema.create(body);
};

let getAllAdmin = () => {
  return adminSchema.find();
};

let findAdminByEmail = (email) => {
  return adminSchema.findOne({ email });
};

let findByIdAndDelete = (id) => {
  return adminSchema.findByIdAndDelete(id);
};

let findByIdAndUpdate = (id, body) => {
  return adminSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  register,
  getAllAdmin,
  findAdminByEmail,
  findByIdAndDelete,
  findByIdAndUpdate,
};
