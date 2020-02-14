const conn = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        const command = "SELECT * FROM ??";
        conn.query(command, { table }, function(err, result) {
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
