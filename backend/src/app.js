const express = require('express');
const { homeRouter } = require('./router/home');
const { listsRouter } = require('./router/lists');
const { config } = require("dotenv");

config();

const app = express();
const port = process.env.PORT;

app
    .use('/', homeRouter)
    .use('/lists', listsRouter)
    .listen(port, async () => {
        console.log(`Example app listening on port ${port}!`);
    });
