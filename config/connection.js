// require
var mysql = require("mysql");

// connect
var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ldybg11!",
    database: "burgers_db"
});

//make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM.
module.exports = connection;