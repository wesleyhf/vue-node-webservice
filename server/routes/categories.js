var models = require('./../models');
var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res) {
    models.categories.findAll().then(function(categories){
        res.send({
            categories: categories.map(function(category) {
                return category.dataValues;
            }),
        });
    });
});

// store
router.post('/', function(req, res) {
    models.categories.create({
        title: req.body.title
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
    models.categories.findById(req.params.id).then(function(category) {
        res.send({
            category: category.dataValues
        });
    });
});

// update
router.put('/:id', function(req, res) {
    models.categories.update({
        title: req.body.title
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
    models.categories.destroy({
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
