const User = require('../models/user');
const InternalServerError = require('../errors/InternalServerError');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => {
      next(new InternalServerError('Ошибка сервера.'));
    });
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params._id)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        next(new NotFoundError('Запрашиваемый пользователь не найден.'));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else {
        next(new InternalServerError('Ошибка сервера.'));
      }
    });
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else {
        next(new InternalServerError('Ошибка сервера.'));
      }
    });
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        next(new NotFoundError('Запрашиваемый пользователь не найден.'));
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else {
        next(new InternalServerError('Ошибка сервера.'));
      }
    });
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        next(new NotFoundError('Запрашиваемый пользователь не найден.'));
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else {
        next(new InternalServerError('Ошибка сервера.'));
      }
    });
};
