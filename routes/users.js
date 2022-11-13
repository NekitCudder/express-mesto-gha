const userRouter = require('express').Router();
const {
  getUsers, getUserById, updateUser, updateAvatar, currentUser,
} = require('../controllers/users');
const { idValidation, userInfoValidation, avatarValidation } = require('../middlewares/validations');

userRouter.get('/', getUsers);
userRouter.get('/:_id', idValidation, getUserById);
userRouter.get('/me', currentUser);
userRouter.patch('/me', userInfoValidation, updateUser);
userRouter.patch('/me/avatar', avatarValidation, updateAvatar);

module.exports = userRouter;
