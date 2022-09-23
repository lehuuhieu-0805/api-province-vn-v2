const express = require('express');
const router = express.Router();

const addressController = require('../controllers/address.controller');

router.get('/', (req, res) => {
  addressController.find(req, res);
});

// router.post('/', (req, res) => {
//   addressController.create(req, res);
// });

module.exports = router;