define('people_utils', ['underscore'], function(_) {

    var exports ={};


    function trim(str) {
        return str.replace(/^\s+|\s+$/g, "");
    }

    exports.convertToPreexistingContactMap = function(couchResults) {
        var contactMap = {};
        if (!couchResults.rows) return contactMap;
        _.each(couchResults.rows, function(row) {
            contactMap[row.key[2]] = true;
        });
        return contactMap;
    }



    exports.isPreexisting = function(contact, preexistingContactMap) {
        if (contact.importInfo && contact.importInfo.source_id) {
            if (preexistingContactMap[contact.importInfo.source_id]) return true;
        }
        return false;
    }


    exports.makeSlug = function(fullName) {
        return fullName.replace(/\W/g, '.').toLowerCase();
    }


    exports.cleanUpFullName = function(fullName) {

        // Lastname, firstname
        if (fullName.indexOf(',')) {
            var pieces = fullName.split(",", 2);
            fullName = trim(pieces[1]) + " " + trim(pieces[0]);

        }

        // email addresses
        if (fullName.indexOf('@')) {
            fullName = fullName.split("@", 1)[0];
        }

        // split, capitialize
        var names = fullName.split(/[\W_]/);
        var newNames = [];
        _.each(names, function(name) {
           if (!name || name == '') return;
           name = trim(name);
           var newName = name[0].toUpperCase() + name.substr(1);
           newNames.push(newName);

        });

        fullName = newNames.join(" ");
        return fullName;

    }
    return exports;

});