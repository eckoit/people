define('js/app',[
    'jquery',
    'handlebars',
    'couchr',
    'JSONStream',
    'underscore'

],
function($, handlebars, couch, JSONStream, _){
    var exports = {};

    var templates = {};

    function compileTemplate(domId, templateName) {
        var source   = $("#" + domId).html();
        templates[templateName] = handlebars.compile(source);
    }

    exports.init = function () {
        compileTemplate('my-template', 'my.html');
    };


    exports.ui = function () {

    };

    return exports;
});



