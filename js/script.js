function getMoveName(argMoveId){    
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
     return 'papier';
  } else if(argMoveId == 3){
     return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
   return 'nieznany ruch';
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


// Computer move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
  computerMove = 'papier';
}

else if(randomNumber == 3){
  computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + argComputerMove);


// Player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

console.log('zwraca ' + playerInput)

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
  playerMove = 'papier';
}

else if(playerInput == '3'){
  playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + argPlayerMove);


// Checking the result
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
   printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
   printMessage('Remis!')
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
   printMessage('Ty przegrywasz')
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
   printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
   printMessage('Remis!')
} else if (computerMove == 'papier' && playerMove == 'kamień') {
   printMessage('Ty przegrywasz')
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
   printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
   printMessage('Remis!')
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
   printMessage('Ty przegrywasz')
}
*/

printMessage(displayResult(argComputerMove, argPlayerMove));