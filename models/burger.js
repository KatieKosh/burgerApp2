var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        console.log('Hello')
        orm.selectAll("burgers", function(res) {

            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;


// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });