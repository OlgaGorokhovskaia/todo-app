const express = require('express');
const { getLists, addNewList, getListById, deleteListById } = require('../controller/lists');
const { itemsRouter } = require('./items');

const listsRouter = express.Router();

listsRouter
    .get('/', getLists)
    .get('/:id', getListById)
    .use('/:id/items', itemsRouter);

listsRouter
    .post('/', addNewList)
    .delete('/:id', deleteListById);

module.exports = { 
    listsRouter
};