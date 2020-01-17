const mongoose = require('mongoose');

const Cliente = mongoose.model ('Cliente', 
    new mongoose.Schema({ nombre: String,  apellidos: String })
);

const Articulo = mongoose.model ('Articulo', 
    { nombre: String,  precio: Number }
);

module.exports = {
    Cliente: Cliente,
    Articulo: Articulo
}

// module.exports = {
//     cliente,
//     Articulo
// }


