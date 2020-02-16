const Query = require("../config/query");

const animal = {
  findAll: function (cb) {
    const query = new Query();
    query.select("animal_name")
      .from("animals")
      .go(result => {
        cb(result);
      });
  }
};

module.exports = animal;