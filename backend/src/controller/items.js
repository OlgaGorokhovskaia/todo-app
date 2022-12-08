const { getDbClient } = require('../db/client');
const { uuid } = require('uuidv4');

const getItems = async(req, res) => {
    const { id: listId } = req.params;
    const dbClient = await getDbClient();

    const itemsCollection = dbClient.db("todo").collection("items");
    const result = await itemsCollection.find({ listId, deleted: { $ne: true }  });
    
    res.send(result.toString());

    dbClient.close();
};

const addNewItem = async (req, res) => {
    const { id: listId } = req.params;
    const { name } = req.body;
    const dbClient = await getDbClient();
    const itemsCollection = dbClient.db("todo").collection("items");
    const result = await itemsCollection.insertOne({ id: uuid(), listId, name, completed: false });
    res.send(result.toString());

    dbClient.close();
};

const updateItemById = async (req, res) => {
    const dbClient = await getDbClient();
    const { id: listId } = req.params;
    const { id, ...data } = req.body;

    const itemsCollection = dbClient.db("todo").collection("items");
    const result = await itemsCollection.findOneAndUpdate({ id, listId, deleted: { $ne: true }  } , data);
    res.send(result.toString());

    dbClient.close();
};

const getItemById = async (req, res) => {
    const dbClient = await getDbClient();
    const { id: listId } = req.params;
    const { id } = req.query;

    const itemsCollection = dbClient.db("todo").collection("items");
    
    const result = await itemsCollection.findOne({ id, listId: {$eq: listId }, deleted: { $ne: true } });
    res.send(result.toString());

    dbClient.close();
};

const deleteItemById = async (req, res) => {
    const dbClient = await getDbClient();
    const { id: listId } = req.params;
    const { id } = req.body;

    const itemsCollection = dbClient.db("todo").collection("items");
    const result = await itemsCollection.findOneAndUpdate({ id, listId: {$eq: listId }, deleted: { $ne: true } }, { deleted: true });

    res.send(result.toString());

    dbClient.close();
};


module.exports = {
    getItems,
    addNewItem,
    updateItemById,
    getItemById,
    deleteItemById,
}