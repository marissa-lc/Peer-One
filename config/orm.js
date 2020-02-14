const connection = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        const command = "SELECT * FROM ??";
        connection.query(command, [ table ], function(err, result) {
            if (err) {
                console.error(err);
                return;
            }
            // Pass the query result to the specified callback function
            cb(result);
        });
    },
    joinThree: function(params, cb) {
        const command = "select * " +
            "from ?? " +
            "inner join ?? on ?? = ?? " +
            "inner join ?? on ?? = ??";
        const query = connection.query(command, params, function(err, result) {
            console.log(command);
            console.log(params);
            console.log(query.sql);
            if (err) {
                // console.error(err);
                return;
            }
            cb(result);
        });
    }
};

module.exports = orm;
