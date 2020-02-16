const Query = require("../config/query");

const word = {
  findAll: function (cb) {
    const query = new Query();
    query.select("word")
      .from("descriptors")
      .go(result => {
        cb(result);
      });
  }
};

module.exports = word;