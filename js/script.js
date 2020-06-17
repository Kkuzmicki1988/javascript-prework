{
function playGame(playerInput){
clearMessages()

function getMoveName(argMoveId){    
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
     return 'papier';
  } else if(argMoveId == 3){
     return 'nożyce';
  }
}

function displayResult(argComputerMove, argPlayerMove){

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
   return 'Ty wygrywasz!';
} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
   return 'Remis!';
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
   return 'Ty przegrywasz';
}

if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
   return 'Ty wygrywasz!';
} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
   return 'Remis!';
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
   return 'Ty przegrywasz';
}
if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
   return 'Ty wygrywasz!';
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
   return 'Remis!';
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
   return 'Ty przegrywasz';
 } 
}

const randomNumber =
 Math.floor(Math.random() * 3 + 1);
 argComputerMove =  getMoveName(randomNumber);
 argPlayerMove =  getMoveName(playerInput);

printMessage('Mój ruch to: ' + argComputerMove);
printMessage('Twój ruch to: ' + argPlayerMove);
printMessage(displayResult(argComputerMove, argPlayerMove));

}

document.getElementById('playRock').addEventListener('click', function(){
  playGame(1);
}); 
 document.getElementById('playPaper').addEventListener('click', function(){
  playGame(2);
});
 document.getElementById('playScissors').addEventListener('click', function(){
  playGame(3);
});

}
