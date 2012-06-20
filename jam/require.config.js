var jam = {
    "packages": [
        {
            "name": "whenever",
            "location": "jam/whenever",
            "main": "whenever.js"
        },
        {
            "name": "couchr",
            "location": "jam/couchr",
            "main": "couchr.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "handlebars",
            "location": "jam/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "jquery.js"
        }
    ],
    "version": "0.1.0"
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages});
}
else {
    var require = {packages: jam.packages};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
};