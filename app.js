const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use('/', userRouter);
app.use('/', cardRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '6357ac070476937d9f9f271f',
  };
  next();
});

app.listen(PORT);
