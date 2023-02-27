const express = require('express');
const port = 8000;
const db = require('./config/mongoose'); 
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); 

// To use the express router
app.use('/', require('./routes/index'));
app.use(express.static('assets')); //for assets

// Set up view Engine
app.set('view engine', 'ejs');
app.set('views', './views')




// To run the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting a server: ${err}`);
    }
    console.log(`Server started successfully on Port: ${port}`);
});