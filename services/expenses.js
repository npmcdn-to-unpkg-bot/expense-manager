var sqlite3 = require('sqlite3').verbose();
var Promise = require('bluebird');

var ExpenseService = function () {

    var db = new sqlite3.Database('expenses.sql');

    this.insertRecord = function (data, cb) {
        db.serialize(function () {
            var stmt = db.prepare('INSERT INTO expenses(expense, description, expense_time) VALUES(?, ?, ?)');

            stmt.run(
                data.expense,
                data.description,
                data.expense_time
            );

            stmt.finalize();

            cb('Record inserted!!!');
        });
    };

    this.updateRecord = function (data, cb) {
        db.run("UPDATE expenses SET expense = ?, description = ?, expense_time = ? WHERE id = ?", [data.expense, data.description, data.expense_time, data.id], function (err, data) {
            if (err) {
                console.log(err);
            }

            cb('Information updated successfully!');
        });
    };

    this.fetchAllRecords = function (cb) {
        db.all('SELECT id, expense, description, datetime(expense_time, "localtime") as expense_time FROM expenses', function (err, rows) {
            if (err) {
                console.log(err);
            }

            cb(rows);
        });
    };

    this.fetchRecord = function (id, cb) {
        db.each('SELECT id, expense, description, datetime(expense_time, "localtime") as expense_time FROM expenses WHERE id = ?', [id], function (err, row) {
            if (err) {
                console.log(err);
            }

            if (row.lengh === 0) {
                cb('No results found!');
            }

            cb(row);
        });
    };
};

module.exports = new ExpenseService();