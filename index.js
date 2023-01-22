const express = require('express');
const port = 8000;
const app = express();

// To run the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting a server: ${err}`);
    }
    console.log(`Server started successfully on Port: ${port}`);
});