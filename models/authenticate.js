const Query = require("../config/query");

const authenticate = {
 loggn: function (email, password, cb) {
  query = new Query();

  query.select("ID")
   .from("users")
   .whereEqual("email", email.trim())
   .andWhereEqual("password", password.trim())
   .go(function (result) {
    cb(result);
   });
 }
};

module.exports = authenticate;
