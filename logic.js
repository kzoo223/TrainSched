$(document).ready(function(){
//Initialize firebase
  var config = {
      apiKey: "AIzaSyBnxbQ0O6E5ikupPOv2anc41McH1h_mEqs",
      authDomain: "timesheet-3f585.firebaseapp.com",
      databaseURL: "https://timesheet-3f585.firebaseio.com",
      storageBucket: "timesheet-3f585.appspot.com",
      messagingSenderId: "425706911868"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

//onclick for submit
  $("#submit").on("click", function() {

    //variables
    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#trainDestination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#trainFrequency").val().trim();
    
    database.ref().push({
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrain,
        frequency: frequency
    });

    return false;
});

  //on change to db
  database.ref().on("child_added", function(snapshot){

    var item = snapshot.val()

    console.log(snapshot.val());


    var name = item.name
    var destination = item.destination
    var first = item.firstTrain
    var frequency = item.frequency
    

    var row = $("<tr>")
      var nameTd = $("<td>")
        nameTd.text(name)

      var destinationTd = $("<td>")
        destinationTd.text(destination)

      var frequencyTd = $("<td>")
        frequencyTd.text(frequency)



    row.append(nameTd, destinationTd, frequencyTd)
    $("#trainTable").append(row);
  })


  

})
