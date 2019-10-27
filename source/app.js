'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


const route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  });
});

const create = router.post('/', (req, res, next) => {
  res.status(201).send('success created!');
});

const update = router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({ 
    id: id,
    item: req.body,
    message: 'Updated success!'
  });
});

const del = router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  req.status(204).send('Deleted success');
});

// const edit = router.patch('/', (re))

app.use('/', route);
app.use('/products', create);
app.use('/products', update);
app.use('/products', del);

module.exports = app;