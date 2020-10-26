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
    title = document.getElementById('title').value;
    dataBr.get(title).then((body) => {

        revNum = (body._rev).toString()
        insertDoc(revNum)
    });
}

function insertDoc(revisionN)
{
    var revNo = revisionN
    var reminder = prompt("New Reminder");

    dataBr.insert({ _id: title, _rev: revNo, Title: title, Reminder: reminder }).then((body) => {
            window.alert("Reminder Created Successfully")
        }
    );

}
// window.history.replaceState({}, document.title, "/" + "couchdb_reminderapp/update.html");