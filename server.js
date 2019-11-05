const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('*', (req,res) =>{
    res.json("This is the default zone")
})

module.exports = server;
