define('import_google', ['underscore'], function(_){

    var exports = {};

    exports.parseGoogleContact = function(entry) {
          var contact = {};

          var google_id = entry.getId().$t;
          var parts = google_id.split('/');
          var relative_id = parts[parts.length -1 ];


          contact._id = "com.eckoit.person.google:" + relative_id;

          contact.importInfo = {
              source   : 'google',
              source_id: google_id,
              relative_id : relative_id,
              date : new Date().getTime()
          };


          var name = 0;

          if (entry.gd$name && entry.gd$name.gd$givenName && entry.gd$name.gd$givenName.$t) {
              contact.firstName = entry.gd$name.gd$givenName.$t;
          }

          if (entry.gd$name && entry.gd$name.gd$fullName && entry.gd$name.gd$fullName.$t) {
              name = entry.gd$name.gd$fullName.$t;
          } else if (entry.getTitle() && entry.getTitle().getText()) {
              name = entry.getTitle().getText();
          } else if (entry.getEmailAddresses()) {
              name = entry.getEmailAddresses()[0].getAddress();
          } else {
              // This should never actually be reached, since users are currently
              // required to have either a name or an email address
              name = 'Untitled Contact';
          }
          contact.fullName = importSupport.cleanUpFullName(name);

          if (contact.fullName) {
              contact.slug = importSupport.makeSlug(contact.fullName);
          }

          _.each( entry.getEmailAddresses(), function(address ){
              contact.email = address.address;
          });

          if (entry.link) {
              _.each(entry.link, function(link) {
                    if (link.type && link['gd$etag'] && link.type == 'image/*') {
                        var feedLink = entry.getLink('http://schemas.google.com/contacts/2008/rel#photo', 'image/*');
                        contact.image = feedLink.getHref();
                    }
              });
          }

          return contact;
    }
    return exports;

});