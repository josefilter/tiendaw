const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect ("mongodb://localhost:27017/tiendaw", { useNewUrlParser: true } )
    .then( db => console.log("Conexión a BD correcta") )
    .catch( err => console.log("Error al conectar a BD: " + err) );

app.use ('/api', routes);
app.use (express.json());

// app.get("/", (req, res) => {
//     res.send("www.twitch.tv/waide")
// });

// app.get("/hola", (req, res) =>
//     res.send("www.twitch.tv/waide www.twitch.tv/waide")
// );

app.listen(3000, () => console.log("Servidor iniciado..."));