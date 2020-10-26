const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');

var numReminders = 0;

dataBr.list({include_docs: true}).then((body) => {
    body.rows.forEach((doc) => {
        //if(body.Title) {
        var para = document.createElement("p");
        var node = document.createTextNode(JSON.stringify(doc.doc));
        para.appendChild(node);

        var element = document.getElementById("remindersList");

        element.appendChild(para);
    });
});

dataBr.view('allDocs', 'allDocs', {reduce: true}).then((body) => {

    body.rows.forEach((doc) => {

        numReminders += doc.value
        var para = document.createElement("p");
        var node = document.createTextNode("You have " + numReminders + " reminders saved");
        para.appendChild(node);

        var element = document.getElementById("remindersCount");

        element.appendChild(para);
    });
});