const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/*
* Metodos HTTP
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 * 
 * Query Parms: Parametros nomeados enviados na rota após "?" (Filtros, paginacão)
 * Route Parms: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */



