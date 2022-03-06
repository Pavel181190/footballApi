const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const url = 'mongodb+srv://store_user:B5lraitdQtC6ty0R@cluster0.5xvf9.mongodb.net/store_db?retryWrites=true&w=majority';

const port = 5090;
mongoose.connect(url)
.then(results =>{
        console.log(results);
        app.listen(port, function(){
                console.log(`server run on port ${port}`);
        })
})
.catch(err=>{
        console.log(err);    
})