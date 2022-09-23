const addressModel = require('../models/address.model');

const create = (req, res) => {
  console.log(req.body);
  addressModel.create(req.body)
    .then((result) => {
      res.status(201).json(result);
    }).catch(error => res.status(500).json({ error }));
};

const find = (req, res) => {
  const name = req.query.name || '';
  addressModel.find({ name: { $regex: '.*' + name + ".*", $options: 'i' } }, { __v: 0, _id: 0 })
    .then((result) => {
      res.status(200).json(result);
    }).catch(error => res.status(500).json({ error }));
};

module.exports = { create, find };