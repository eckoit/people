define('db', ['./couchdb_impl', './mock_impl'], function(couch, mock){

    var exports = {};
    var db = couch;

    exports.setDB = function(name) {
        if (name === 'mock') db = mock;
    }

    exports.peopleByImport = function(importName, options, cb) {
        db.peopleByImport(importName, options, cb);
    }

    return exports;
})