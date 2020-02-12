const conn = require("./connection.js");

const orm = {
    selectAll: async function(table) {
        const command = "SELECT * FROM ??";
        let result;
        try {
            result = await conn.query(command, { table });
            return result;
        } catch (err) {
            console.error("Error trying to SELECT");
            return;
        }
    }
};

module.exports = orm;
