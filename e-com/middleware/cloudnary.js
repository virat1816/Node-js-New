const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'drmiuxnk3',
    api_key: '859694933362237',
    api_secret: '8C8825FeV_0qV01b0K6HQHD9anM'
});


let uploadImage = (path) => {
    return cloudinary.uploader.upload(path,
        { public_id: Date.now() },
        function (error, result) { return result });
}

module.exports = uploadImage