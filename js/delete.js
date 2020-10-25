const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');


var title;


window.onload = function (){
    var buttonElement = document.getElementById("button");

    if (buttonElement){
        buttonElement.addEventListener('click',getRev);
    }

}

function getRev()
{

    title = document.getElementById('title').value;
    dataBr.get(title).then((body) => {

        var revNum;
        revNum = (body._rev).toString();

    });
setTimeout(() => { deleteDoc(revNum) },2000);
}


function deleteDoc(val)
{
    dataBr.destroy(title,val.toString()).then((body) => {
        window.alert("Delete Done");
    });
}
window.history.replaceState({}, document.title, "/" + "couchdb_reminderapp/delete.html");
