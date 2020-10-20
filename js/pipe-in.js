var nano = require('nano')('http://adam:1234@localhost:5984');
var request = require('request');

var db_name = "test";
var db = nano.use(db_name);

// {} for empty body as parameter is required but will be piped in
request.get("http://nodejs.org/logo.png").pipe(
    db.attachment.insert("new", 'logo.png', {}, "image/png")
)