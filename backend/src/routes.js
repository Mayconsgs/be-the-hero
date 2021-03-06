const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota é o caminho completo
 * 
 * Recurso é a parte que queremos acessar: /users
 */

/**
 * Metodos HTTP:
 * 
 * GET: Busca uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros para identificar recursos
  * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //Exporta uma variável