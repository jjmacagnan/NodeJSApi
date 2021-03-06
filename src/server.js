const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-ja5kt.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(require('./routes'));

app.listen(3333);