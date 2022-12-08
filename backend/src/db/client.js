const { MongoClient } = require('mongodb');

async function getDbClient() { 
    try {
        const mongoClient = new MongoClient(process.env.DB_URI);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
};

module.exports = {
    getDbClient
}