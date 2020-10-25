const nano = require('nano')('http://adam:1234@localhost:5984/')
const dataBr = nano.use('reminders-app');

dataBr.list({include_docs: true}).then((body,Title, Reminder) => {
    window.alert(Title)
    body.rows.forEach((body) => {

        var para = document.createElement("p");
        var node = document.createTextNode(JSON.stringify(Title,Reminder));
        para.appendChild(node);

        var element = document.getElementById("remindersList");

        element.appendChild(para);
    });
});
//function(doc){
  //  emit(doc._id,{rev:doc._rev});
//}
/*  dataBr.head('adam').then((body) => {
      console.log(body);
  });*/

dataBr.get('rabbit').then((body) => {
    console.log(body);
});