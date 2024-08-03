let express = require("express");
const { adminController } = require("../controllers");
const validate = require("../middleware/validate");
const { adminValidation } = require("../validations");
const { upload } = require("../middleware/multer");

let route = express.Router();

route.post(
  "/register",
  // validate(adminValidation.admin),
  upload.single("profile"),
  adminController.register
);
route.get("/get", adminController.getUser);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put(
  "/update/:id",
  validate(adminValidation.admin),
  adminController.updateAdmin
);

module.exports = route;
