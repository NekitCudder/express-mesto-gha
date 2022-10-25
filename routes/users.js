const userRouter = require('express').Router();
const {
  getUsers, getUsersById, createUsers, updateUsers, updateAvatar,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/:userId', getUsersById);
userRouter.post('/users', createUsers);
userRouter.patch('/users/me', updateUsers);
userRouter.patch('/users/me/avatar', updateAvatar);

module.exports = userRouter;
