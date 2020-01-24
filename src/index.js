const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websockt');


const app = express();
const server = http.Server(app);
setupWebsocket(server);

//atlas ->mongoose.connect('mongodb+srv://semana10:semana10@cluster0-jhoew.mongodb.net/omnistack?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost:27017/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);