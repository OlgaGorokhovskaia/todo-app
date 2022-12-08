const { getDbClient } = require('../db/client');
const { uuid } = require('uuidv4');

const getLists = async(req, res) => {
    const dbClient = await getDbClient();

    const listsCollection = dbClient.db("todo").collection("lists");
    const result = await listsCollection.find({ deleted: { $ne: true } });
    
    res.send(result.toString());

    dbClient.close();
};

const addNewList = async (req, res) => {
    const dbClient = await getDbClient();
    const { name } = req.body;
    const listsCollection = dbClient.db("todo").collection("lists");
    const result = await listsCollection.insertOne({ id: uuid(), name, items: [] });
    res.send(result.toString());

    res.status(200).json(result);

    dbClient.close();
    return;
};

const getListById = async (req, res) => {
    const dbClient = await getDbClient();
    const { id } = req.params;

    const listsCollection = dbClient.db("todo").collection("lists");
    
    const result = await listsCollection.findOne({ id, deleted: { $ne: true } });
    res.send(result.toString());

    dbClient.close();
};

const deleteListById = async (req, res) => {
    const dbClient = await getDbClient();
    const { id } = req.params;

    const listsCollection = dbClient.db("todo").collection("lists");

    const result = await listsCollection.findOneAndUpdate({ id, deleted: { $ne: true } }, { deleted: true });

    res.send(result.toString());

    dbClient.close();
};


module.exports = {
    getLists,
    addNewList,
    getListById,
    deleteListById,
}