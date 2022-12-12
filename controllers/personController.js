const Person = require("../models/person");

exports.getPeople = (req, res, next) => {
    Person.find()
    .then(response => {
        res.status(200).json({
            message: "Get Success",
            response: response
        });
    });
}
exports.getPerson = (req, res, next) => {
    const id = req.params.id;
    Person.findById(id)
    .then(response => {
        res.status(200).json({
            message: "Get Success",
            response: response
        });
    });
}
exports.createPerson = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const newPerson = new Person({
        firstName: firstName,
        lastName: lastName
    });
    newPerson.save()
    .then(response => {
        res.status(200).json({
            message: "Post Success",
            response: response
        });
    })
    .catch(response => {
        res.status(500).json({
            message: "Error creating person",
            response: response
        })
    });
}
exports.updatePerson = (req, res, next) => {
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    Person.findById(id)
    .then(person => {
        person.firstName = firstName;
        person.lastName = lastName;
        person.save()
        .then(response => {
            res.status(200).json({
                message: "Put Success",
                response: response
            });
        })
        .catch(response => {
            res.status(500).json({
                message: "Error updating person",
                response: response
            })
        });
    });
}
exports.deletePerson = (req, res, next) => {
    const id = req.params.id;
    Person.findByIdAndDelete(id)
    .then(response => {
        res.status(200).json({
            message: "Delete Success",
            response: response
        });
    })
    .catch(response => {
        res.status(500).json({
            message: "Error deleting person",
            response: response
        })
    });
}