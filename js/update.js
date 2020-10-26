
const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');


var title;
var revNum;
window.onload = function (){
    var buttonElement = document.getElementById("button");
if (buttonElement){
    buttonElement.addEventListener('click',getRevNum);
}

}

function getRevNum()
{
    console.log("Step 3")
    title = document.getElementById('title').value;
    console.log()
    dataBr.get(title.toLowerCase()).then((body) => {
        console.log("Step 4")

        revNum = (body._rev).toString();

    });
    setTimeout( insertDoc(revNum) ,2000);
}

function insertDoc(revisionN)
{
    var revNo = revisionN;

    var reminder = document.getElementById('reminder').value;
    dataBr.insert({ _id: title.toLowerCase(), _rev: revNo,Title: title, Reminder: reminder }).then((body) => {
            console.log("Success");

        }
    );

}
window.history.replaceState({}, document.title, "/" + "couchdb_reminderapp/update.html");
