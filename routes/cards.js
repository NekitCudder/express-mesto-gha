const cardRouter = require('express').Router();
const {
  getCards, createCards, deleteCards, likeCard, dislikeCard,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', createCards);
cardRouter.delete('/cards/:cardId', deleteCards);
cardRouter.put('/cards/:cardId/likes', likeCard);
cardRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardRouter;
