const connection = require("./connection.js");

const orm = {
    selectAll: function (table, cb) {
        const command = "SELECT * FROM ??";
        connection.query(command, [table], function (err, result) {
            if (err) {
                console.error(err);
                return;
            }
            // Pass the query result to the specified callback function
            cb(result);
        });
    },
    joinThree: function (fields, params, cb) {
        const command = "select " + fieldsToList(fields) +
            "from ?? " +
            "inner join ?? on ?? = ?? " +
            "inner join ?? on ?? = ??";
        params.unshift(...fields);
        const q = connection.query(command, params, function (err, result) {
            console.log(q.sql);
            if (err) {
                console.log(err.message);
                return;
            }
            cb(result);
        });
    }
};

module.exports = orm;

function fieldsToList(fieldArray) {
    if (fieldArray.length === 0) {
        throw("fieldArray must contain at least one element");
    }   
    let string = "";
    for (let i = 1; i < fieldArray.length; i++) {
        string += "??, ";
    }
    return string + "?? ";
}