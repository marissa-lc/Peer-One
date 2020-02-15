const orm = require("../config/orm");

const animal = {
  findAll: function (cb) {
    orm.selectAll("animals", function (result) {
      cb(result);
    });
  }
};

module.exports = animal;