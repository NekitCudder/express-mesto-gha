const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(UnauthorizedError)
      .send({ message: 'Ошибка авторизации.' });
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return res
      .status(UnauthorizedError)
      .send({ message: 'Ошибка авторизации.' });
  }
  req.user = payload;
  next();
};
