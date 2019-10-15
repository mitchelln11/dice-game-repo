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

    let playerTurn = true;
    let turnCounter = 1;
    let turnLimit = 3;
    let bullClick = document.getElementById("rollBullseye");
    //console.log( bullClick + "Clicks");

    // function rollsCount(rollNumber) {
    //     for ( rolls=0; rolls < rollNumber.length; rolls++ ) {
    //         turnCounter++
    //         if ( turnCounter <= ) {
    //             console.log("Hello");
    //         }
    //     }
    // }



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

// function rollDie ( i ) {
//    return  Math.floor(Math.random() * i.length + 1 );
// }
// rollDie();
//document.getElementById("rollNineSeventeen").onclick = rollNineteenSeventeen();

function rollNineteenSeventeen(){
    let randomNineteenSeventeen;
    
    for(let i = 0; i < diceElevenSideValues.length; i++){
        randomNineteenSeventeen = diceElevenSideValues[Math.floor(Math.random() * diceElevenSideValues.length )];
    }
    //Nineteen Hit
    if( (randomNineteenSeventeen == 19) ) {
        let nineteenFirstHitCheckPlayer1 = document.getElementById("playerOne19-one").classList.contains("green-bg");
        let nineteenSecondHitCheckPlayer1 = document.getElementById("playerOne19-two").classList.contains("green-bg");
        //let nineteenThirdHitCheck = document.getElementById("playerOne19-three").classList.contains("green-bg");
        let nineteenFirstHitCheckPlayer2 = document.getElementById("playerTwo19-one").classList.contains("green-bg");
        let nineteenSecondHitCheckPlayer2 = document.getElementById("playerTwo19-two").classList.contains("green-bg");
        if(playerTurn == true) {
            if( (nineteenFirstHitCheckPlayer1 == true) && (nineteenSecondHitCheckPlayer1 == true)  ) {
                document.getElementById("playerOne19-three").classList.add("green-bg");
            }
            else if ( nineteenFirstHitCheckPlayer1 == true ) {
                document.getElementById("playerOne19-two").classList.add("green-bg");
            }
            else if ( nineteenFirstHitCheckPlayer1 == false ) {
                document.getElementById("playerOne19-one").classList.add("green-bg");
            }
        } 
        //Player 2 Hits
        else if ( (nineteenFirstHitCheckPlayer2 == true) && (nineteenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo19-three").classList.add("green-bg");
        }
        else if ( nineteenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo19-two").classList.add("green-bg");
        }
        else if ( nineteenFirstHitCheckPlayer2 == false ) {
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
//rollNineteenSeventeen(diceElevenSideValues);

//IMPLEMENT PLAYER 2 AND LIMIT DART THROWS