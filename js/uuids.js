var nano = require('nano')('http://adam:1234@localhost:5984');
nano.request({db: "_uuids"}, function(_,_,uuids){ console.log(uuids); });