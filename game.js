 var buttonColours = ["red","blue","green","yellow"];

 var gamePattern = []

function nextSequence (){
   var randomNumber = Math.floor(Math.random() * 3) + 1;

   return randomNumber;
} 

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour)