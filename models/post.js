const Query = require("../config/query");

const post = {
  findAll: function (cb) {
    const query = new Query();
    query.select(["username", "subject", "body"])
      .from("posts")
      .innerJoin("users", "users.ID", "user_id")
      .innerJoin("skills", "skills.ID", "skill_id")
      .go(result => {
        cb(result);
      });
  }
};

module.exports = post;