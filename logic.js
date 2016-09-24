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

})  

})
