const rps = ['rock', 'paper' , 'scissors']; 
      let tie = 'tied!';
      let playerWin = 'you win!';
      let playerLose = 'you lose!';
      let playerScore = 0;
      let computerScore = 0;
      let turns = 0;
    

    const buttons = document.querySelectorAll('button');
  
    const computer = document.querySelector('#computer');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
         const results = document.querySelector('#results');
          const player = document.querySelector('#player');
          const cScore = document.querySelector('#cScore');
          const pScore = document.querySelector('#pScore');
          const match = document.querySelector('#round');
    // console.log(e.target.name); 
   
 
      const selected = e.target.name;
      const playerSelection = document.createElement('p');
      
     
    const computerPlay = rps[Math.floor(Math.random() * rps.length)];
    const computerSelection = computerPlay;
     let candyPic = document.createElement('img');
     let candyPPic = document.createElement('img');
 function candyComp(computerPlay) { 
          if (computerPlay === 'rock') {
         
          candyPic.setAttribute('src', '71ZEQFAPNfL._SL1500_.jpg');
     //     return candyPic;
     } else if (computerPlay === 'paper') {
       //   let candyPic = document.createElement('img');
          candyPic.setAttribute('src', 'Peppermint_Swirl_Candies_PNG_Clipart.png');
      //    return candyPic;
     } else if (computerPlay === 'scissors') {
       //   let candyPic = document.createElement('img');
          candyPic.setAttribute('src', 'SeekPng.com_licorice-png_2938452.png');
        //  return candyPic;
     }
};

function candyPlayer(selected) { 
     if (selected === 'rock') {
     
     candyPPic.setAttribute('src', '71ZEQFAPNfL._SL1500_.jpg');
  //   return candyPPic;
} else if (selected === 'paper') {
   //  let candyPPic = document.createElement('img');
     candyPPic.setAttribute('src', 'Peppermint_Swirl_Candies_PNG_Clipart.png');
   //  return candyPPic;
} else if (selected === 'scissors') {
   //  let candyPPic = document.createElement('img');
     candyPPic.setAttribute('src', 'SeekPng.com_licorice-png_2938452.png');
   //  return candyPPic;
}
};
    // function playRound(playerSelection, computerSelection) {
         if (turns < 6) {
          if  (computerPlay === selected)  {
               while (results.hasChildNodes()) {
                    results.removeChild(results.firstChild);
               } 
     
            turns++;
            candyPlayer(selected);
            candyComp(computerPlay);
            
            player.appendChild(playerSelection);
           // playerSelection.textContent = 'player selected: ';
            player.appendChild(candyPPic);
             
            const compSelect = document.createElement('p');
             computer.appendChild(compSelect);
             computer.appendChild(candyPic);
            // compSelect.textContent = 'computer selected: ';          
             
             const result = document.createElement('p');
             results.appendChild(result); 
             result.textContent = tie + ' Round: ' + turns;
             
             const compScore = document.createElement('p');
             compScore.textContent = 'Computer Score: ' + computerScore;
             cScore.appendChild(compScore);
             
             const playScore = document.createElement('p');
             playScore.textContent = 'Player Score: ' + playerScore;
             pScore.appendChild(playScore);
               
          } else if (
              (computerPlay === 'paper' && selected === 'scissors') ||
                  (computerPlay === 'rock' && selected === 'paper') ||
              (computerPlay === 'scissors' && selected === 'rock')
              ) {  
               while (results.hasChildNodes()) {
                    results.removeChild(results.firstChild);
               }  
               playerScore++;
                turns++;
                candyPlayer(selected);
            candyComp(computerPlay);
               
               player.appendChild(playerSelection);
            //    playerSelection.textContent = 'player selected: ' + selected;
                player.appendChild(candyPPic);

                const compSelect = document.createElement('p');
               computer.appendChild(compSelect);
               computer.appendChild(candyPic);
          //     compSelect.textContent = 'computer selected: ' + computerSelection;          
              
               const result = document.createElement('p');
               results.appendChild(result); 
               result.textContent = playerWin + ' Round: ' + turns; 

               const compScore = document.createElement('p');
               compScore.textContent = 'Computer Score: ' + computerScore;
               cScore.appendChild(compScore);

               
               const playScore = document.createElement('p');
               playScore.textContent = 'Player Score: ' + playerScore;
               pScore.appendChild(playScore);
               
               
                  
                         
          } else if (
              (computerPlay === 'paper' && selected === 'rock') ||      
          (computerPlay === 'rock' && selected === 'scissors') ||       
        (computerPlay === 'scissors' && selected === 'paper')
        )
         { 
          while (results.hasChildNodes()) {
               results.removeChild(results.firstChild);
          } 
          computerScore++;
           turns++;
           candyPlayer(selected);
            candyComp(computerPlay);
          
           player.appendChild(playerSelection);
         //  playerSelection.textContent = 'player selected: ' + selected;
           player.appendChild(candyPPic);
         
           const compSelect = document.createElement('p');
          computer.appendChild(compSelect);
          computer.appendChild(candyPic);
        //  compSelect.textContent = 'computer selected: ' + computerSelection;          
         
          const result = document.createElement('p');
          results.appendChild(result); 
          result.textContent = playerLose + ' Round: ' + turns; 

          const compScore = document.createElement('p');
          compScore.textContent = 'Computer Score: ' + computerScore;
          cScore.appendChild(compScore);
          
          const playScore = document.createElement('p');
          playScore.textContent = 'Player Score: ' + playerScore;
          pScore.appendChild(playScore);
             
                      // return playerLose;
          }  
     

      

     
 
    } else { 
         while (results.hasChildNodes()) {
              results.removeChild(results.firstChild);
         } const newGameButton = document.createElement('button');
               newGameButton.textContent = 'New Game?'
               const refreshPage = () => {
                    location.reload();
               }
               newGameButton.addEventListener('click', refreshPage)
               results.appendChild(newGameButton);
         const finalResults = document.createElement('p');
         results.appendChild(finalResults);
            if (playerScore > computerScore) {
              
                 finalResults.textContent = 'player score = ' + playerScore + ', computer score = ' + computerScore + ', ' + playerWin; // return 'pick one dummy';
          } else if (playerScore < computerScore) {
              
               finalResults.textContent = 'player score = ' + playerScore + ', computer score = ' + computerScore + ', ' + playerLose;
          } else    {

              

               return finalResults.textContent = 'player score = ' + playerScore + ', computer score = ' + computerScore + ', ' + tie; 
              
          }    
          }
    });
}); 
     

 //const playerSelection = selected;
 //console.log(playerSelection);
 

