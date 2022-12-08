const express = require('express');
const { getDbClient } = require('../db/client');

const homeRouter = express.Router();

homeRouter
    .get('/', async (req, res) => {
        const dbClient = await getDbClient();

        const collection = dbClient.db("todo").collection("lists");
        
        const elements = await collection.count();
        res.send(elements.toString());


        dbClient.close();
    });


module.exports = { 
    homeRouter
};