const express = require('express');
const {
    getItems,
    addNewItem,
    updateItemById,
    getItemById,
    deleteItemById,
 } = require('../controller/items');

const itemsRouter = express.Router();

itemsRouter
    .get('/', getItems)
    .get('/:id', getItemById);

itemsRouter
    .put('/', updateItemById)
    .post('/', addNewItem)
    .delete('/:id', deleteItemById);

module.exports = { 
    itemsRouter
};