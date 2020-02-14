const orm = require("../config/orm");

const post = {
  findAll: function (cb) {
    orm.selectAll("posts", function (result) {
      cb(result);
    });
  }
};

module.exports = post;