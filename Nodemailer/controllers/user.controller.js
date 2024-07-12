const { userService } = require("../services");
const sendEmail = require("../services/email.service");

let register = async (req, res) => {
  let body = req.body;

  let result = await userService.register(body);

  // if (result) {
  //   let ress = await sendEmail(
  //     result.email,
  //     "Test mail",
  //     `Hello ${result.firstName}`
  //   );
  //   console.log(ress, "email");
  // }

  let name = result.email;

  res.render("index", { name });

  // res.status(201).json({
  //   message: "user creatred success",
  //   result,
  // });
};

module.exports = { register };
