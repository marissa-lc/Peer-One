const Query = require("../config/query");

const skill = {
  findAll: function (cb) {
    const query = new Query();
    query.select("subject")
      .from("skills")
      .go(result => {
        cb(result);
      });
  }
};

module.exports = skill;