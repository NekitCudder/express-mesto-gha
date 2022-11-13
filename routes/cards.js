const cardRouter = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const { idValidation, cardValidation } = require('../middlewares/validations');

cardRouter.get('/', getCards);
cardRouter.post('/', cardValidation, createCard);
cardRouter.delete('/:_id', idValidation, deleteCard);
cardRouter.put('/:_id/likes', idValidation, likeCard);
cardRouter.delete('/:_id/likes', idValidation, dislikeCard);

module.exports = cardRouter;
