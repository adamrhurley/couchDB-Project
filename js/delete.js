const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');


var title;
var revNum;
var reminder;

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

        revNum = (body._rev);
        deleteDoc(revNum);
    });

}


function deleteDoc(revisionN)
{
    var revNo = revisionN
    dataBr.destroy(title,revNo).then((body) => {
        window.alert("Deleted Succesfully");
    });
}
// window.history.replaceState({}, document.title, "/" + "couchdb_reminderapp/delete.html");
