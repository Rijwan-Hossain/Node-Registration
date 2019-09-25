const express = require('express'); 
const utils = require('./utils'); 

const app = express(); 

app.get('/', (req, res) => { 
    res.json({ 
        Available_routes: utils.arr 
    }) 
}) 

app.listen('8080', () => { 
    console.log('App is on fire'); 
}) 