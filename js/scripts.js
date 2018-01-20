function halCheck(usersNumber) {
  halOutputArray = [];
  for (range = 0; range <= usersNumber; range++) {
    if (range % 3 === 0) {
      var halOutput = "I'm Sorry Dave, I can't do that."
    } else if (((range.toString()).includes("1")) === true) {
      var halOutput = "BOOP!";
    } else if (((range.toString()).includes("0")) === true) {
      var halOutput = "BEEP!";
    } else {
      var halOutput = range;
    }
    // clearDave();
    halOutputArray.push(halOutput);
  }
  halNumbers(halOutputArray);
}

function clearHal(){
  document.getElementById("halBox").innerHTML = "";
}

function clearDave(){
  document.getElementById("daveSays").innerHTML = "";
}

function playAgain(){
  clearDave();
  var typeIndex = 0; //Not sure why this needs to be outside of the function.
  function typeReWriter() {
    var txt = "HAL, you sound a little weird. I'm going to run another diagnotic on you.";
    var speed = 50;

    if (typeIndex < txt.length) {
      document.getElementById("daveSays").innerHTML += txt.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, speed);
      setTimeout(playAgain, 9000);
      }
    }
}

var halIndex = 0; //Not sure why this needs to be outside of the function.
function halNumbers() {
  var speed = 900;
  if (halIndex < halOutputArray.length) {
    document.getElementById("halOutput").innerHTML += "<li>" + halOutputArray[halIndex] + "</li>";
    halIndex++;
    setTimeout(halNumbers, speed);
  }

}


$(function() {

$("#numberButton").click(function(event) {
  event.preventDefault();
  var usersNumber = parseInt($("#userNumber").val());
  halCheck(usersNumber);
  // clearDave();
})

var typeIndex = 0; //Not sure why this needs to be outside of the function.
function typeWriter() {
  var txt = "Good morining HAL. I need to run a diagnotic check on you. Once you're ready I'll input the test number. ";
  var speed = 50;

  if (typeIndex < txt.length) {
    document.getElementById("daveSays").innerHTML += txt.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, speed);
    $("#userNumber").delay(6500).fadeIn("swing");
    $("#numberButton").delay(7500).fadeIn("swing");
    }
  }
  setTimeout(typeWriter, 900);
})






      // function textType(){
      // var displayText="This is what I wat to type across the screen"
      // var eachLetter = displayText.split("");
      // for(i = 0; i < displayText.length; i ++){
      //   // (document.getElementById("daveSays").innerHTML = eachLetter[i]).show();
      //   ("#daveSays").innerHTML(eachLetter);
      //borrowed this effect from w3schools. left above to demonstrate that I got it pretty close. and to try and
      //see if i can make my approach work later.
