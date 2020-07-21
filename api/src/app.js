const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 3001;

app.use(cors()); //origin: 'http://meuendereco.com'
app.use(express.json());
app.use(routes);

console.log(`Servidor rodando na porta ${port}`);

module.exports  = app;