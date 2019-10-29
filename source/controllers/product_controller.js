'use strict'

const mongoose = require('mongoose'); 
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
  Product.find({ active: true }, 'title price slug').then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
}

exports.post = (req, res, next) => {
  let product = new Product(req.body);
  product.save().then(x =>{
    res.status(200).send('Product registred success');
  }).catch(e => {
    res.status(400).send({ message: 'Product registred failed', data: e});
  });
};

exports.put = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body,
    message: 'Updated success!'
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  res.status(204).send('Deleted success!');
};