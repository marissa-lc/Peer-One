const orm = require("./orm");

const user = {
    findAll: function(cb) {
        orm.selectAll("users", function(result))
    }
};

module.exports = user;
