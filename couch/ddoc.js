var ddoc = {
  views: {},
  lists: {},
  shows: {},
  updates: {}
}

module.exports = ddoc;

ddoc.rewrites = [
    {from:"/", to:'index.html'}
  , {from:"/api", to:'../../'}
  , {from:"/api/*", to:'../../*'}
  , {from:"/*", to:'*'}
];

ddoc.views.people = {
    map : function(doc) {
        if (doc.type && doc.type == 'person' && !doc.tombstone) {
            var result = {
                pic : doc.picture,
                name : doc.fullName
            }
            if (doc._attachments) {
                result.pic = doc._attachments;
            }
            if (!result.pic || result.pic == '') {
                result.pic = 'http://placehold.it/90x90';
            }

            emit(doc.slug, result);


        }
    },
    reduce: '_count'
}


ddoc.views.peopleByImport = {
    map : function(doc) {
        if (doc.type && doc.type == 'person' && doc.importInfo) {
            emit([doc.importInfo.source, doc.importInfo.date, doc.importInfo.source_id], null);
        }
    },
    reduce : '_count'
}





