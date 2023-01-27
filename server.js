const app = require('./app'); // Importando o app
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});// importa o dotenv e configura ele para ler arquivo variables.env

// conexão com banco de dados
// mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (error) => {
//     console.error("ERROR: " + error.message);
// });
// mongoose.set('strictQuery', false);

app.set('port', process.env.PORT || 7777); // conexão webserver
const server = app.listen(app.get('port'), () => {
    console.log("Servidor Rodando na porta: " + server.address().port);
}); 