const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()


const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Mongodb connected'))
    .catch((error)=>console.error(error))



app.use(cors());
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'))
app.use('/api/user', require('./routes/users'));
app.use('/api/todo', require('./routes/todos'));

module.exports = app;
