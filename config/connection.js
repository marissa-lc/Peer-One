const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "luke",
    password: "bootcamp",
    database: "peer_up_db"
});

conn.connect(function(err) {
    if (err) {
        console.error("Error connecting");
        return;
    }
    console.log("Connected to database.");
});

module.exports = conn;