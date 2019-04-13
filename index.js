const express = require('express');
const server = require('./api/server');
require('dotenv').config();

const port = 3000

server.listen(port, () => {
    console.log("Hey, It\'s working")
})