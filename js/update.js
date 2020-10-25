const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');


var title;

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
    dataBr.get(title.toLowerCase()).then((body) => {
        console.log("Step 4")
        var revNum;
        revNum = (body._rev).toString();
        //console.log(revNum);
        insert(revNum);
    });

}

function insert(revisionN)
{
    var revNo = revisionN;

    var reminder = document.getElementById('reminder').value;
    dataBr.insert({ _id: title.toLowerCase(), _rev: revNo, Reminder: reminder }).then((body) => {
            console.log("Success");
        }
    );

}
window.history.replaceState({}, document.title, "/" + "couchdb_reminderapp/update.html");