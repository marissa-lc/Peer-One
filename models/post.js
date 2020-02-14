const orm = require("../config/orm");

const post = {
  findAll: function (cb) {
    const fields = [ "username", "subject", "body" ];
    const params = [
      "posts",
      "users",
      "users.ID",
      "user_id",
      "skills",
      "skills.ID",
      "skill_id"
    ];
    orm.joinThree(fields, params, function (result) {
      cb(result);
    });
  }
};

module.exports = post;