//import Nano from "nano";
//import * as nano  from 'nano'
//import Nano from "nano";
const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');
window.alert("HERE")


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
//var idNum = 0;

window.onload = function (){
    window.alert("Step 1 Done!")
    var buttonElement = document.getElementById("button");
    window.alert("Step 2 Done!")

    if (buttonElement){
        window.alert("Step 3 Done!")
        buttonElement.addEventListener('click',insert);
        window.alert("Step 4 Done!")
    }

}

module.exports=function insert()
{
    window.alert("Step 5 Done!")//idNum++
    var title ="aaa111222333" //document.getElementById('title');
    var reminder = "zzz111222333" //document.getElementById('reminder');
    window.alert("Step 6 Done!")
    dataBr.insert({ Title: title, Reminder: reminder },"ttt").then((body) => {
        console.log(body);
        window.alert("Step 7 Done!")
        //return idNum;

    });}
window.alert("Step 8 Done!")



//document.getElementById("button").addEventListener("click",insert())