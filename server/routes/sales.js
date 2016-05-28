var models = require('./../models');
var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res) {
    models.sales.findAll({
        include: [models.clients]
    }).then(function(sales){
        res.send({
            sales: sales.map(function(sale) {
                return sale.dataValues;
            }),
        });
    });
});

// store
router.post('/', function(req, res) {
    models.sales.create({
        clientId: req.body.clientId,
        date: models.sequelize.fn('NOW'),
        status: 'o',
        totalValue: req.body.totalValue,
    }).then(function(sale) {
        req.body.cart.forEach(function(item) {
            models.saleItems.create({
                saleId: sale.dataValues.id,
                productId: item.productId,
                quantity: item.quantity,
                unitaryValue: item.unitaryValue,
            });
        });

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
    models.sales.find({
        where: {id: req.params.id},
        include: [models.clients, models.saleItems]
    }).then(function(sale) {
        res.send({
            sale: sale.dataValues
        });
    });
});

// update
router.put('/:id', function(req, res) {
    models.sales.update({
        status: req.body.status,
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
    models.sales.destroy({
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
