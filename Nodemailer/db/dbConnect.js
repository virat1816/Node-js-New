let mongoose = require("mongoose");

let dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("database conncted success");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = dbConnect;
