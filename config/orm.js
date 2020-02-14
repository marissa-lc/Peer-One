const connection = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        const command = "SELECT * FROM ??";
        connection.query(command, { table }, function(err, result) {
            if (err) {
                console.error(err);
                return;
            }
            // Pass the query result to the specified callback function
            cb(result);
        });
    }
};

module.exports = orm;
