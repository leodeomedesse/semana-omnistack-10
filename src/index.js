const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

//atlas ->mongoose.connect('mongodb+srv://semana10:semana10@cluster0-jhoew.mongodb.net/omnistack?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost:27017/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);