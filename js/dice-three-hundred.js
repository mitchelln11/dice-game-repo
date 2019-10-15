//Get and post player one name
// function playerOne(playerOneName) {
//     document.getElementById("player-one").innerHTML = playerOneName;
// }
// let firstPlayer = playerOne ( prompt("Please Enter Name of Player One") );

//Get and post player two name
// function playerTwo(playerTwoName) {
//     document.getElementById("player-two").innerHTML = playerTwoName;
// }
// let secondPlayer = playerTwo ( prompt("Please Enter Name of Player Two") );

let playerTurn = false;

//------SHOOTING FOR BULLSEYE------
// let diceSixSideValues = [25,25,1,4,7,8];
// let randomBull = [];
// function rollBull(bullResult){
//     for(let i = 0; i < bullResult.length; i++){
//         randomBull = bullResult[Math.floor(Math.random() * bullResult.length )];
//     }
//     if( randomBull == 25 ) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne25-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo25-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomBull + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomBull + " Missed!";
//     }
// }
// rollBull(diceSixSideValues);

//------SHOOTING FOR 20------
// let diceSevenSideValues = [20,20,1,5,18,5,12];
// let randomTwenties = [];
// function rollTwenty(twentyResult){
//     for(let i = 0; i < twentyResult.length; i++){
//         randomTwenties = twentyResult[Math.floor(Math.random() * twentyResult.length )];
//     }
//     if( (randomTwenties == 20) ) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne20-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo20-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
//     }
//     else if (randomTwenties == 18) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne18-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo18-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Missed!";
//     }
// }
// rollTwenty(diceSevenSideValues);

//------SHOOTING FOR 18------
// let diceEightSideValues = [18,4,1,20,13,18,6,5];
// let randomEighteen = [];
// function rollEighteen(eighteenResult){
//     for(let i = 0; i < eighteenResult.length; i++){
//         randomEighteen = eighteenResult[Math.floor(Math.random() * eighteenResult.length )];
//     }
//     if( (randomEighteen == 18) ) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne18-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo18-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
//     }
//     else if (randomEighteen == 20) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne20-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo20-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomEighteen + " Missed!";
//     }
// }
// rollEighteen(diceEightSideValues);

//------SHOOTING FOR 16------
// let diceNineSideValues = [16,8,11,7,16,19,3,8,16];
// let randomSixteen = [];
// function rollSixteen(sixteenResult){
//     for(let i = 0; i < sixteenResult.length; i++){
//         randomSixteen = sixteenResult[Math.floor(Math.random() * sixteenResult.length )];
//     }
//     if( (randomSixteen == 16) ) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne16-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo16-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomSixteen + " Hit!";
//     }
//     else if (randomSixteen == 19) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne19-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo19-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomSixteen + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomSixteen + " Missed!";
//     }
// }
// rollSixteen(diceNineSideValues);

//------SHOOTING FOR 15------
// let diceTenSideValues = [15,10,2,6,17,15,15,17,10,2];
// let randomFifteen = [];
// function rollFifteen(fifteenResult){
//     for(let i = 0; i < fifteenResult.length; i++){
//         randomFifteen = fifteenResult[Math.floor(Math.random() * fifteenResult.length )];
//     }
//     if( (randomFifteen == 15) ) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne15-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo15-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomFifteen + " Hit!";
//     }
//     else if (randomFifteen == 17) {
//         if(playerTurn == true) {
//             document.getElementById("playerOne17-one").classList.add("green-bg");
//         }
//         else {
//             document.getElementById("playerTwo17-one").classList.add("green-bg");
//         }
//         document.getElementById("shot-message").innerHTML = randomFifteen + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomFifteen + " Missed!";
//     }
// }
// rollFifteen(diceTenSideValues);

//------SHOOTING FOR 17 or 19------
let diceElevenSideValues = [19,3,7,19,17,17,7,3,19,17,25];
let randomNineteenSeventeen = [];
function rollNineteenSeventeen(NineteenSeventeenResult){
    for(let i = 0; i < NineteenSeventeenResult.length; i++){
        randomNineteenSeventeen = NineteenSeventeenResult[Math.floor(Math.random() * NineteenSeventeenResult.length )];
    }
    if( (randomNineteenSeventeen == 19) ) {
        if(playerTurn == true) {
            document.getElementById("playerOne19-one").classList.add("green-bg");
        } 
        else {
            document.getElementById("playerTwo19-one").classList.add("green-bg");
        } 
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Hit!";
    }
    else if (randomNineteenSeventeen == 17) {
        if(playerTurn == true) {
            document.getElementById("playerOne17-one").classList.add("green-bg");
        }
        else {
            document.getElementById("playerTwo17-one").classList.add("green-bg");
        }
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Hit!";
    }
    else if (randomNineteenSeventeen == 25) {
        if(playerTurn == true) {
            document.getElementById("playerOne25-one").classList.add("green-bg");
        }
        else {
            document.getElementById("playerTwo25-one").classList.add("green-bg");
        }
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Bullseye!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Missed!";
    }
}
rollNineteenSeventeen(diceElevenSideValues);

//IMPLEMENT PLAYER 2 AND LIMIT DART THROWS