const { adminService } = require("../services");

let getUser = async (req, res) => {
  try {
    let result = await adminService.getAllAdmin();
    console.log(result);
    res.status(200).json({
      message: "admin get success",
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

let register = async (req, res) => {
  try {
    console.log(req.body);
    let { path } = req.file;

    let body = req.body;

    let newBody = {
      ...body,
      profile: path,
    };

    let duplicate = await adminService.findAdminByEmail(body.email);

    if (duplicate) {
      throw new Error("admin already regsiterd");
    }

    let admin = await adminService.register(newBody);

    console.log(admin, "admin result");

    res.status(201).json({
      message: "admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let deleteAdmin = async (req, res) => {
  try {
    console.log(req.params);

    let { id } = req.params;

    let result = await adminService.findByIdAndDelete(id);
    console.log(result);

    res.status(200).json({
      message: "admin deleted success",
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let updateAdmin = async (req, res) => {
  let body = req.body;
  let { id } = req.params;

  let newBody = {
    id,
    ...body,
  };

  let result = await adminService.findByIdAndUpdate(id, body);
  console.log(result);

  res.status(200).json({
    message: "admin updated success",
    newBody,
  });
};

module.exports = { getUser, register, deleteAdmin, updateAdmin };













//****************************************Use Cloudinary *****************************************//
//****************************************Use Cloudinary *****************************************//


// const uploadImage = require("../middleware/cloudnary");
// const { adminService } = require("../services");

// let getUser = async (req, res) => {
//   try {
//     let result = await adminService.getAllAdmin();
//     console.log(result);
//     res.status(200).json({
//       message: "admin get success",
//       result,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

// let register = async (req, res) => {
//   try {
//     // console.log(req.body);
//     let { path } = req.file;
//     console.log("🚀 ~ register ~ path:", path)

//     let cloudpath =await uploadImage(path)
//     console.log("🚀 ~ register ~ cloudpath:", cloudpath)

//     let body = req.body;

//     let newBody = {
//       ...body,
//       profile: cloudpath.url,
//     };

//     // let duplicate = await adminService.findAdminByEmail(body.email);

//     // if (duplicate) {
//     //   throw new Error("admin already regsiterd");
//     // }

//     let admin = await adminService.register(newBody);

//     console.log(admin, "admin result");

//     res.status(201).json({
//       message: "admin created successfully",
//       admin,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// let deleteAdmin = async (req, res) => {
//   try {
//     console.log(req.params);

//     let { id } = req.params;

//     let result = await adminService.findByIdAndDelete(id);
//     console.log(result);

//     res.status(200).json({
//       message: "admin deleted success",
//       result,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// let updateAdmin = async (req, res) => {
//   let body = req.body;
//   let { id } = req.params;

//   let newBody = {
//     id,
//     ...body,
//   };

//   let result = await adminService.findByIdAndUpdate(id, body);
//   console.log(result);

//   res.status(200).json({
//     message: "admin updated success",
//     newBody,
//   });
// };

// module.exports = { getUser, register, deleteAdmin, updateAdmin };

