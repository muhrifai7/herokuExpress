const requestTransaction = require("../models").requestTransaction;

exports.index = (req, res) => {
  requestTransaction.findAll().then((users) => res.send(users));
  res.sendStatus(200);
};

exports.show = (req, res) => {
  requestTransaction
    .findOne({ where: { id: req.params.id } })
    .then((response) => {
      if (!response) {
        return res.status(404).send({
          message: `Transaction with id ${req.params.id} is not found!`,
        });
      }
      return res.status(200).send(response);
    })
    .catch((err) => res.status(400).send(err));
};

exports.post = (req, res) => {
  requestTransaction.create(req.body).then((city) => {
    res
      .send({
        message: "success",
        city,
      })
      .catch((err) => res.status(400).send(err));
  });
};

exports.update = (req, res) => {
  requestTransaction
    .findOne({ where: { id: req.params.id } })
    .then((city) => {
      if (!city) {
        return res.status(404).send({
          message: `city with id ${req.params.id} is not found!`,
        });
      }
      return city
        .update(req.body)
        .then((city) => res.status(200).send(city))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(400).send(err));
};

exports.delete = (req, res) => {
  requestTransaction
    .findOne({ where: { id: req.params.id } })
    .then((city) => {
      if (!city) {
        return res.status(404).send({
          message: `city with id ${req.params.id} is not found!`,
        });
      }
      city
        .destroy()
        .then(() =>
          res.status(204).send({
            message: "City deleted!",
          })
        )
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
