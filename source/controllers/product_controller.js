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

exports.getBySlug = (req, res, next) => {
  Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags').then(data => {
    res.status(200).send(data);
  }).catch(e => {
    res.status(400).send(e);
  });
}

exports.getByTag = (req, res, next) => {
  Product.find({ tags: req.params.tag, active: true }, 'title description price slug tags').then(data => {
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
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      price: req.body.price
    }
  }).then(data => {
    res.status(200).send('Product success update!');
  }).catch(e => {
    res.status(400).send({
      message: 'Update failed',
      error: e
    });
  });
};


//best practice -> id in body and not in uri
exports.delete = (req, res, next) => {
  Product.findOneAndRemove(req.body.id, {

  }).then(data => {
    res.status(204).send('Product success remove.');
  }).catch(e => {
    res.status(400).send({
      message: 'Product not remove',
      error: e
    });
  });
  

  // const id = req.params.id;
  // res.status(204).send('Deleted success!');
};