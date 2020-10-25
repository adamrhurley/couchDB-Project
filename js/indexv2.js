//import Nano from "nano";
//import * as nano  from 'nano'
//import Nano from "nano";
const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');


/*var express = require('express')
    , db    = require('nano')('http://adam:1234@localhost:5984/my_couch')
    , app     = express();
*/
/*app.get("/", function(request,response) {
    db.get("foo", function (error, body, headers) {
        if(error) { return response.send(error.message, error['status-code']); }
        response.send(body, 200);
    });
});

app.listen(3333);
console.log("server is running. check expressjs.org for more cool tricks");
*/
/*nano.db.get('reminders-app').then((body) => {
    console.log(body);
})*/
/*const alice = nano.db.use('alice');

//const alice = nano.use('alice');
alice.insert({ happy: true }, 'rabbit').then((body) => {
    console.log(body);
});*/



window.onload = function (){
    var buttonElement = document.getElementById("button");


    if (buttonElement){
        buttonElement.addEventListener('click',insert);
    }

}

function insert()
{
    var title = document.getElementById('title').toISOString();
    var reminder = document.getElementById('reminder').toISOString();
window.alert(title);
    dataBr.insert({ Title: title, Reminder: reminder },title.toLowerCase).then((body) => {
        console.log(body);
    }
    );
}




//document.getElementById("button").addEventListener("click",insert())