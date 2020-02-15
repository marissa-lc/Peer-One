const orm = require("../config/orm");

const word = {
  findAll: function (cb) {
    orm.selectAll("descriptors", function (result) {
      cb(result);
    });
  }
};

module.exports = word;