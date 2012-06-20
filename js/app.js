define('js/app',[
    'jquery',
    'handlebars',
    'couchr',
    'underscore',
	'director'

],
function($, handlebars, couch,  _, director){
    var exports = {};
    var templates = {};
    var router;

    function compileTemplate(domId, templateName) {
        var source   = $("#" + domId).html();
        templates[templateName] = handlebars.compile(source);
    }

	function scan() {
		$('.content').html(templates['my.html']({}));
	}


    exports.init = function () {
		compileTemplate('my-template', 'my.html');
        router = director.Router({
			'/scan' : scan
		});
		router.init('/scan');
    };

    exports.ui = function () {
		
    };

    return exports;
});



