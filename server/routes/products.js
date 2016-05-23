var models = require('./../models');
var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res) {
    models.products.findAll({
        include: [models.categories]
    }).then(function(products){
        res.send({
            products: products.map(function(product) {
                return product.dataValues;
            }),
        });
    });
});

// index - get all products active
router.get('/active', function(req, res) {
    models.products.findAll({
        where: {
            active: 1,
        }
    }).then(function(products){
        res.send({
            products: products.map(function(product) {
                return product.dataValues;
            }),
        });
    });
});

// store
router.post('/', function(req, res) {
    models.products.create({
        name: req.body.name,
        categoryId: req.body.categoryId,
        value: req.body.value,
        active: req.body.active
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
    models.products.find({
        where: {id: req.params.id},
        include: [models.categories]
    }).then(function(product) {
        res.send({
            product: product.dataValues
        });
    });
});

// update
router.put('/:id', function(req, res) {
    models.products.update({
        name: req.body.name,
        categoryId: req.body.categoryId,
        value: req.body.value,
        active: req.body.active
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
    models.products.destroy({
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
