var models = require('./../models');
var express = require('express');
var router = express.Router();

// index
router.get('/', function(req, res) {
    // models.sales.findAll({
    //     include: [models.clients]
    // }).then(function(sales){
    //     res.send({
    //         sales: sales.map(function(sale) {
    //             return sale.dataValues;
    //         }),
    //     });
    // });
});

// store
router.post('/', function(req, res) {
    // models.sales.create({
    //     name: req.body.name,
    //     categoryId: req.body.categoryId,
    //     value: req.body.value,
    //     active: req.body.active
    // }).then(function() {
    //     res.send({
    //         status: 'OK'
    //     });
    // }).catch(function(errors) {
    //     console.log(errors);
    //
    //     res.status(400).send({
    //         status: 'ERROR',
    //     });
    // });
});

// show
router.get('/:id', function(req, res) {
    // models.sales.find({
    //     where: {id: req.params.id},
    //     include: [models.saleItems]
    // }).then(function(sale) {
    //     res.send({
    //         sale: sale.dataValues
    //     });
    // });
});

// update
router.put('/:id', function(req, res) {
    // models.sales.update({
    //     clientId: req.body.clientId,
    //     date: req.body.date,
    //     status: req.body.status,
    //     totalValue: req.body.totalValue
    // }, {
    //     where: {
    //         id: req.params.id
    //     }
    // }).then(function() {
    //     res.send({
    //         status: 'OK'
    //     });
    // }).catch(function(errors) {
    //     console.log(errors);
    //
    //     res.status(400).send({
    //         status: 'ERROR',
    //     });
    // });
});

// destroy
router.delete('/:id/destroy', function(req, res) {
    // models.sales.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // }).then(function() {
    //     res.send({
    //         status: 'OK'
    //     });
    // }).catch(function(errors) {
    //     console.log(errors);
    //
    //     res.status(400).send({
    //         status: 'ERROR',
    //     });
    // });
});

module.exports = router;
