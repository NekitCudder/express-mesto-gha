const router = require('express').Router();
const { getUsers, getUsersById, createUsers } = require('../models/user');

router.get('/users', getUsers);
router.get('/users/:userId', getUsersById);
router.post('/users', createUsers);
