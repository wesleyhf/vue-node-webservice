var models = require('./../models');
var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res) {
    models.clients.findAll().then(function(clients){
        res.send({
            clients: clients.map(function(client) {
                return client.dataValues;
            }),
        });
    });
});

// store
router.post('/', function(req, res) {
    models.clients.create({
        name: req.body.name,
        gender: req.body.gender,
        cpf: req.body.cpf
    }).then(function() {
        res.send({
            status: 'OK'
        });
    }).catch(function(errors) {
        console.log(errors);

        res.status(400).send({
            status: 'ERROR',
        });
    });
});

// show
router.get('/:id', function(req, res) {
    models.clients.findById(req.params.id).then(function(client) {
        res.send({
            client: client.dataValues
        });
    });
});

// update
router.put('/:id', function(req, res) {
    models.clients.update({
        name: req.body.name,
        gender: req.body.gender,
        cpf: req.body.cpf
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({
            status: 'OK'
        });
    }).catch(function(errors) {
        console.log(errors);

        res.status(400).send({
            status: 'ERROR',
        });
    });
});

// destroy
router.delete('/:id/destroy', function(req, res) {
    models.clients.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({
            status: 'OK'
        });
    }).catch(function(errors) {
        console.log(errors);

        res.status(400).send({
            status: 'ERROR',
        });
    });
});

module.exports = router;
