'use strict'

exports.post = (req, res, next) => {
  res.status(200).send(req.body);
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