const Query = require("../config/query");

const user = {
    findAll: function (cb) {
        const query = new Query();
        query.select(["username", "email"])
        .from("users")
        .go(result => {
            cb(result);
        });
    }
};

module.exports = user;
