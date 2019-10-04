const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoUrl = 'mongodb+srv://omnistack:omnistack@omnistack-bym4a.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE
// req.query = acessar query params (para filtros)
// req.params = acessar routes params (para edição e delete)
// req.body = acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);



app.listen(4000);