const userRouter = require('express').Router();
const {
  getUsers, getUserById, updateUser, updateAvatar, currentUser,
} = require('../controllers/users');
const { idValidation, userInfoValidation, avatarValidation } = require('../middlewares/validations');

userRouter.get('/users', getUsers);
userRouter.get('/users/:_id', idValidation, getUserById);
userRouter.get('/users/me', idValidation, currentUser);
userRouter.patch('/users/me', userInfoValidation, updateUser);
userRouter.patch('/users/me/avatar', avatarValidation, updateAvatar);

module.exports = userRouter;
