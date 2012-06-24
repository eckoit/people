define('couchdb_impl', ['couchr'], function(couchr){
    var exports = {};

    exports.peopleByImport = function(importName, options, cb) {
        couchr.get('_view/peopleByImport', {
           reduce: false,
           include_docs : true,
           startkey : [importName],
           endkey : [importName, {}, {}]
        }, cb);
    };
    return exports;
});