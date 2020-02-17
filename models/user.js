const Query = require("../config/query");

const user = {
    findAll: function (cb) {
        const query = new Query();
        query.select(["ID", "username", "email"])
        .from("users")
        .go(result => {
            cb(result);
        });
    },
    findByUsername: function (username, cb) {
        const query = new Query();
        query.select(["ID", "username", "email"])
        .from("users")
        .whereEqual("username", username.trim())
        .go(result => {
            cb(result);
        });
    },
    findById: function (userId, cb) {
        const query = new Query();
        query.select(["ID", "username", "email"])
        .from("users")
        .whereEqual("ID", userId.trim())
        .go(result => {
            cb(result);
        });
    }
};

module.exports = user;
