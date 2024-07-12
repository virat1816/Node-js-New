let express = require("express");
const { userController } = require("../controllers");
const upload = require("../middleware/multer");
let route = express.Router();

route.get("/get", (req, res) => {
  res.status(200).json({
    message: "user get succeews",
  });
});

route.post("/register", userController.register);

module.exports = route;