define('js/app',[
    'jquery',
    'handlebars',
    'couchr',
    'underscore',
	'director',
    'text!templates/fast_add.html',
    'text!templates/README.md',
    'pouchdb'

],
function($, handlebars, couch,  _, director, fast_add_html,  readme, Pouch){
    var exports = {};
    var templates = {};
    var router;



    var authors = [
     {name: 'Dale Harvey', commits: 253},
     {name: 'Mikeal Rogers', commits: 42},
     {name: 'Johannes J. Schmidt', commits: 13},
     {name: 'Randall Leeds', commits: 9}
   ];
   Pouch('idb://authors', function(err, db) {
     // Opened a new database
     db.allDocs({include_docs: true}, function(err, results) {
       // Saved the documents into the database
       console.log('docs: ', results)
     });
   });

    templates['fast_add.html'] = handlebars.compile(fast_add_html);

    function compileTemplate(domId, templateName) {
        var source   = $("#" + domId).html();
        templates[templateName] = handlebars.compile(source);
    }

	function scan() {
		$('.content').html(templates['my.html']({}));
	}

    function fast_add() {
        $('.content').html(templates['fast_add.html']({}));
        //var editor = new EpicEditor().load();


    }


    exports.init = function () {
		compileTemplate('my-template', 'my.html');
        router = director.Router({
			'/scan' : scan,
            '/add' : fast_add
		});
		router.init('/add');
    };

    exports.ui = function () {
		
    };

    return exports;
});



