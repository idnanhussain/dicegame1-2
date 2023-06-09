// //define player names//

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");


// //score and Attemptselements//

const newGameBtn = document.getElementById("newGameButton");


const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

// // add roll buttons//

const rollButton1 = document.getElementById("rollButton1");
const rollButton2 = document.getElementById("rollButton2");



//update value of score//

let scoreValue = null;


 // const secondRandonNum = Math.floor(Math.random() * 6) + 1
    const diceImage = document.getElementById("diceImageOne");
    const diceImage2 = document.getElementById("diceImagetwo");


 
// GENERATE RANDOM NUMBER BETWEEN 1 AND 6// // add listening events button 1 and 2//

rollButton1.addEventListener("click", (e) => {
    console.log("button has been clicked");
    const firstRandonNum = Math.floor(Math.random() * 6) + 1
    console.log(firstRandonNum)
    diceImage.src = `images/dice${firstRandonNum}.png`
    score1.textContent = parseInt(score1.textContent) + firstRandonNum;
    scoreValue = score1.textContent;
    console.log (scoreValue)

    if (scoreValue >= 20) {
        alert(" Player 1 wins!");
    } else {
        switchPlayers();
       
      }
    


})

    rollButton2.addEventListener("click", (e) => {
        console.log("button has been clicked");
        const secondRandonNum = Math.floor(Math.random() * 6) + 1
        console.log(secondRandonNum)
        diceImage2.src = `images/dice${secondRandonNum}.png`
        score2.textContent = parseInt(score2.textContent) + secondRandonNum;

        scoreValue = score2.textContent;
        console.log (scoreValue)
    
        if (scoreValue >= 20) {
            alert(" Player 2 wins!");
        } else {
            switchPlayers();
            
          }

          
    })
    

       //New Game Button//

newGameBtn.addEventListener("click", () => {
    console.log("newGameBtn");
    location.reload();

            


});

        function switchPlayers() {
            // currentPlayer = currentPlayer === 1 ? 2 : 1;
            rollButton1.classList.toggle("active");
            rollButton2.classList.toggle("active");
            console.log(switchPlayers)
        
          }


 


      
       
    
   





    






    
