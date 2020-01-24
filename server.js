const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect ("mongodb+srv://jotandj:Temporal22@cluster0-6gthp.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true } )
    .then( db => console.log("Conexión a BD correcta") )
    .catch( err => console.log("Error al conectar a BD: " + err) );

app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use ('/api', routes);


// app.get("/", (req, res) => {
//     res.send("www.twitch.tv/waide")
// });

// app.get("/hola", (req, res) =>
//     res.send("www.twitch.tv/waide www.twitch.tv/waide")
// );

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));
