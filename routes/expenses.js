var express = require('express');
var router = express.Router();
var expenseService = require('../services/expenses');

/* Get list of expenses */
router.get('/', function (req, res) {
    expenseService.fetchAllRecords(function (result) {
        res.send(result);
    });
});

/* Fetch a record by id */
router.get('/:id', function (req, res) {

    var id = req.params.id;

    expenseService.fetchRecord(id, function (result) {
        res.send(result);
    });
});

/* Insert a new record */
router.post('/', function (req, res) {
    var data = req.body;

    expenseService.insertRecord(data, function (result) {
        res.send(result);
    });
});

/* Update record */
router.put('/', function (req, res) {
    // TODO: This is not working
    
    // res.send('PUT request');
    // var id = req.params.id;
    // var data = Object.assign(req.body, {
    //     id: id
    // });

    // console.log(data);

    // expenseService.updateRecord(data, function () {

    // });
});

module.exports = router;