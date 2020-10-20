var express = require('express')
    , nano    = require('nano')('http://adam:1234@localhost:5984')
    , app     = express()
    , db_name = "test"
    , db      = nano.use(db_name);

app.get("/", function(request,response) {
    db.attachment.get("new", "logo.png").stream(response);
});

app.listen(3333);