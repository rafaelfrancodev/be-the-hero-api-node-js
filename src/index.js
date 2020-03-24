// receive library express
const express = require('express');
const routes = require('./routes/routes');

// init application
const app = express();

// before all requests, express convert json in object in bode request
app.use(express.json());
app.use(routes);

// listen application in port 3333
app.listen(3333);