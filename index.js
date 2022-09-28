const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyparser = require('body-parser');
const { urlencoded } = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.static('assets'));
app.use(bodyparser.json());
app.use(express.urlencoded());


app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log('server is running');
})