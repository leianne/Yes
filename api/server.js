const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.send("Its Here")
})

module.exports = server;