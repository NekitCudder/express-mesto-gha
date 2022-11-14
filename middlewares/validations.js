const { celebrate, Joi } = require('celebrate');

module.exports.urlRegExp = /(http:\/\/|https:\/\/)(www)*[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+#*/;

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(this.urlRegExp),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.userInfoValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.avatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(this.urlRegExp),
  }),
});

module.exports.idValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
});

module.exports.cardValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(this.urlRegExp),
  }),
});
