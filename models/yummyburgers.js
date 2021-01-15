// Import burgers
let burgers = require('../config/burgers.js');

let burger = {
    all: function(cb) {
        burgers.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        burgers.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        burgers.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
