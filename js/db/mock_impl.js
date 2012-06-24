define('mock_impl', [], function(){
    var exports = {};

    exports.peopleByImport = function(importName, options, cb) {
        if (options.err) return cb('error');
        cb(null, {
           rows : [
           ]
        });
    };
    return exports;
});