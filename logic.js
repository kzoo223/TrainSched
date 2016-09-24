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


    var converted = moment(firstTrain, "hh:mm").subtract("1, years");
    var currTime = moment();
    var timeDiff = currTime.diff(moment(converted), "minutes");
    var remainder = timeDiff % frequency;
    var timeTillTrain = frequency - remainder;
    var nextTrain = moment().add(timeTillTrain, "minutes").format("hh:mm a");
    
   
   
    database.ref().push({
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrain,
        frequency: frequency,
        nextArrival: nextTrain,
        minutesAway: timeTillTrain
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
    var next = item.nextArrival
    var minutesTil = item.minutesAway
    

    var row = $("<tr>")
      var nameTd = $("<td>")
        nameTd.text(name)

      var destinationTd = $("<td>")
        destinationTd.text(destination)

      var frequencyTd = $("<td>")
        frequencyTd.text(frequency)

      var nextArrivalTd = $("<td>")
        nextArrivalTd.text(next)

      var minutesAwayTd = $("<td>")
        minutesAwayTd.text(minutesTil)



    row.append(nameTd, destinationTd, frequencyTd, nextArrivalTd, minutesAwayTd)
    $("#trainTable").append(row);
  })


  

})
