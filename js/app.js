define('js/app',[
    'jquery',
    'handlebars',
    'couchr',
    'underscore'

],
function($, handlebars, couch,  _){
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
		$('.message').text('Welcome');
    };

    return exports;
});



