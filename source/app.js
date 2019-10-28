'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conection with database
mongoose.connect('mongodb+srv://lies:lies@cluster0-my2zo.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

//Carregar rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;