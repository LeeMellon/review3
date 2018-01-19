
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
    halOutputArray.push(halOutput);
    console.log(halOutputArray);
  }
}

$(function() {



  // function textType(){
  // var displayText="This is what I wat to type across the screen"
  // var eachLetter = displayText.split("");
  // for(i = 0; i < displayText.length; i ++){
  //   // (document.getElementById("daveSays").innerHTML = eachLetter[i]).show();
  //   ("#daveSays").innerHTML(eachLetter);



  //borrowed this effect from w3schools. left above to demonstrate that I got it pretty close. and to try and
  //see if i can make my approach work later.

  var typeIndex = 0; //Not sure why this needs to be outside of the function.
  function typeWriter() {
    var txt = 'Good morining HAL. I need you to run a check on a pod for me';
    var speed = 50;

    if (typeIndex < txt.length) {
      document.getElementById("daveSays").innerHTML += txt.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, speed);
    }
  }


  var halIndex = 0; //Not sure why this needs to be outside of the function.
  function halSays() {
    var speed = 9;
    if (halIndex < halOutputArray.length) {
      document.getElementById("halOutput").innerHTML += (("<li>" + halOutputArray[halIndex] + "</li>"));
      halIndex++;
      setTimeout(halSays, speed);
    }
  }


  halCheck(30);
  typeWriter();
  halSays(halOutputArray);
});
