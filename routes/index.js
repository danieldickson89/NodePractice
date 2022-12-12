const PersonController = require("../controllers/personController");

const express = require("express");
const app = express();

app
.get('/people', PersonController.getPeople)
.get('/people/:id', PersonController.getPerson)
.post('/people', PersonController.createPerson)
.put('/people/:id', PersonController.updatePerson)
.delete('/people/:id', PersonController.deletePerson);

module.exports = app;