const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Métodos HTTP:
// GET: Buscar/listar uma informação no back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// Tipos de parâmetros:
// Query params: Parâmetros nomeados enviados na rota após ? (?name=teste - Filtros, paginação)
// Route params: Parâmetros utilizados para identificar resursos (/:id, /5 - ids)
// Request body: Corpo da requisição, utilizado para criar ou alterar recursos

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);


module.exports = routes;