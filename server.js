const express = require('express'); 
const bodyParser = require('body-parser'); 
const utils = require('./utils'); 
const UserRouter = require('./routes/userRouter')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/internAssignment', {  useNewUrlParser: true }, () => { 
   console.log('DB connected'); 
}); 

const app = express(); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.get('/', (req, res) => { 
    res.json({ 
        Available_routes: utils.arr 
    }) 
}) 

app.use('/', UserRouter); 


app.listen('8080', () => { 
    console.log('App is on fire'); 
}) 

