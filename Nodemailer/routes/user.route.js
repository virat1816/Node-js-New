const express = require('express');
const { register } = require('../controllers/user.controller');
const upload = require('../middleware/multer');
const route = express.Router();

route.get('/get', (req, res) => {
  res.status(200).json({
    message: 'User get successful',
  });
});

route.post('/register', register);

module.exports = route;
