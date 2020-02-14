const orm = require("../config/orm");

const skill = {
  findAll: function (cb) {
    orm.selectAll("skills", function (result) {
      cb(result);
    });
  }
};

module.exports = skill;