const express = require('express');
const helmet = require('helmet');
const carRouter = require('./router/car-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carRouter)


server.get('*', (req,res) =>{
    res.json("This is the default zone")
})

module.exports = server;
