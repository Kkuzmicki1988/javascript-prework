{
const playGame = function(playerInput){
   clearMessages()

   const getMoveName = function(argMoveId){    
      if(argMoveId == 1){
         return 'kamień';
      } else if(argMoveId == 2){
         return 'papier';
      } else if(argMoveId == 3){
         return 'nożyce';
      }
}
   const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove =  getMoveName(randomNumber),
      argPlayerMove =  getMoveName(playerInput);
    
   const displayResult = function(argComputerMove, argPlayerMove){
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier' ||
         argComputerMove == 'papier' && argPlayerMove == 'nożyce' ||
         argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
         return 'Ty wygrywasz!';
      } else if (argComputerMove === argPlayerMove) {
         return 'Remis!';
      } else {
         return 'Ty przegrywasz';
      }
}
  
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
