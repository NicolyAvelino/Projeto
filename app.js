// Fazendo a importação do Express
const express = require("express");
const mustache = require("mustache-express");
const router = require('./routes/index.js');

// Configurações básicas do aplicativo
const app = express();
app.use('/', router); // Foi passado 1 rota pois criamos apenas 1

app.use(express.json());

app.engine('mst', mustache(__dirname + '/views/partials', '.mst')); // config o motor, extensão utilizada
app.set('view engine', 'mst'); // setar motor visual

app.set('views', __dirname + '/views'); // pega o diretorio absoluto do projeto e aumenta para pasta views concatenada

module.exports = app; // Exportamos o app, pois vamos importa-la no servidor