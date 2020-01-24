const controller = require('./controllers')
const express = require('express');

const router = express.Router();


// ----------- API REST CRUD

// Read all
router.get('/clientes', controller.listarClientes);

// Read
router.get('/clientes/:id', controller.readCliente);

// Delete
router.delete('/clientes/:id', controller.deleteCliente);

// Update
router.put('/clientes/:id', controller.updateCliente);

// Create
router.post('/clientes', controller.createCliente);

module.exports = router;