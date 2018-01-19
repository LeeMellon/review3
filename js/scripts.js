
var removeThisVar = 16;

function halCheck(usersNumber){
  for (range = 0; range <= usersNumber; range ++) {
    if (range % 3 === 0){
      var userOutput = "I'm Sorry Dave, I can't do that."
      console.log(userOutput);
    } else if (((range.toString()).includes("1")) === true){
      var userOutput = "BOOP";
      console.log(userOutput);
    } else if (((range.toString()).includes("0")) === true){
      var userOutput = "BEEP";
    } else {
      var userOutput = range;
      console.log(userOutput);

    }
  }

};

$(function(){



halCheck(removeThisVar);
});
