const Query = require("../config/query");

const post = {
  findAll: function (cb) {
    const query = new Query();
    query.select(
      [
        "posts.ID",
        "username",
        "subject",
        "body"
      ])
      .from("posts")
      .innerJoin("users", "users.ID", "user_id")
      .innerJoin("skills", "skills.ID", "skill_id")
      .whereNull("reply_to_id")
      .go(result => {
        cb(result);
      });
  }
};

module.exports = post;