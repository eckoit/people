define('js/app',[
    'jquery',
    'underscore',
    'pouchdb',
    'handlebars',    
	  'director',
	  'EpicEditor',
    'text!templates/intro.html'
],
function( $,  _, Pouch, handlebars, director, EpicEditor, intro_html){
    var exports = {};
    var templates = {};
    var router;
    
    templates['intro.html'] = handlebars.compile(intro_html);


	  function scan() {
	  }

    function intro() {
        $('.content').html(templates['intro.html']({}));
        //var editor = new EpicEditor().load();
    }

	

    exports.init = function () {
        router = director.Router({
          '/intro' : intro,
          '/edit/:id' : intro,
				'/edit/:id/publish' : intro,
          '/edit/:id/trailhead' : intro,
          '/edit/:id/chapter/:chapter' : intro,
          '/play/:id' : intro,
          '/play/:id/chapter/:chapter' : intro,
				'/map' : intro,
			});
		router.init('/intro');
    };

    exports.ui = function () {
		
    };

    return exports;
});




