//Get and post player one name
// function playerOne(playerOneName) {
//     document.getElementById("player-one").innerHTML = playerOneName;
// }
// let firstPlayer = playerOne ( prompt("Please Enter Name of Player One") );

// //Get and post player two name
// function playerTwo(playerTwoName) {
//     document.getElementById("player-two").innerHTML = playerTwoName;
// }
// let secondPlayer = playerTwo ( prompt("Please Enter Name of Player Two") );

let playerTurn = true;//Keep open so hits work
 
//-------------ROLL DIE---------------------------------------------
function rollDie(n){
    return Math.floor(Math.random() * n);
}

//-------------TRACK AND LIMIT BUTTON CLICKS---------------------------------------------
function trackClicks() {
    let turnCounter = 0;
    let buttonCollect = [].slice.call(document.getElementsByClassName("btn-success"));//Create array of buttons
    buttonCollect.forEach(function (btnClick, index){
        btnClick.addEventListener("click", function(){
            turnCounter++;
            if (turnCounter == 3) {
                playerTurn = !playerTurn;
                turnCounter = 0;//reset counter to 0
                currentPlayer();
            }
            console.log(playerTurn);
        });
    });
}
trackClicks();

//-------------LIMIT DIE ROLLS---------------------------------------------
// function limiter () {
//     let turnLimit = 3;
//     for ( i=0; i < turnLimit; i++ ) {
//         if (turnCounter <= turnLimit) {
//             playerTurn = true;
//         }
//         else {
//             playerTurn = false;
//         }
//     }
// }

//-------------FRONT-END CURRENT PLAYER INDICATOR---------------------------------------------
function currentPlayer () {
    if (playerTurn == false) {
        document.getElementById("player-one-scoreboard").classList.remove("green-bg");
        document.getElementById("player-two-scoreboard").classList.add("green-bg");
    }
    else if (playerTurn == true) {
        document.getElementById("player-two-scoreboard").classList.remove("green-bg");
        document.getElementById("player-one-scoreboard").classList.add("green-bg");
    }
}
currentPlayer();

//-------------BULLSEYE HITS AND POINTS---------------------------------------------
function rollBull(){
    let diceSixSideValues = [25,25,1,4,7,8];
    let randomBull;
    for(let i = 0; i < diceSixSideValues.length; i++){
        randomBull = diceSixSideValues[rollDie(diceSixSideValues.length )];
    }
    if( randomBull == 25 ) {
        hitBullseye();
        document.getElementById("shot-message").innerHTML = " Hit!" + randomBull;
    }
    else {
        document.getElementById("shot-message").innerHTML = randomBull + " Missed!";
    }
}

//-------------TWENTIES HITS AND POINTS---------------------------------------------
function rollTwenty(){
    let diceSevenSideValues = [20,20,1,5,18,5,12];
    let randomTwenties;
    for(let i = 0; i < diceSevenSideValues.length; i++){
        randomTwenties = diceSevenSideValues[rollDie(diceSevenSideValues.length )];
    }
    if( (randomTwenties == 20) ) {
        hitTwenty();
        document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
    }
    else if (randomTwenties == 18) {
        hitEighteen();
        document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomTwenties + " Missed!";
    }
}

//-------------EIGHTEEN HITS AND POINTS---------------------------------------------
function rollEighteen(){
    let diceEightSideValues = [18,4,1,20,13,18,6,5];
    let randomEighteen;
    for(let i = 0; i < diceEightSideValues.length; i++){
        randomEighteen = diceEightSideValues[rollDie(diceEightSideValues.length )];
    }
    if( (randomEighteen == 18) ) {
        hitEighteen();
        document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
    }
    else if (randomEighteen == 20) {
        hitTwenty();
        document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomEighteen + " Missed!";
    }
}



//-------------SIXTEEN HITS AND POINTS---------------------------------------------
function rollSixteen(){
    let diceNineSideValues = [16,8,11,7,16,19,3,8,16];
    let randomSixteen;
    for(let i = 0; i < diceNineSideValues.length; i++){
        randomSixteen = diceNineSideValues[rollDie(diceNineSideValues.length )];
    }
    if( (randomSixteen == 16) ) {
        hitSixteen();
        document.getElementById("shot-message").innerHTML = randomSixteen + " Hit!";
    }
    else if (randomSixteen == 19) {
        hitNineteen();
        document.getElementById("shot-message").innerHTML = randomSixteen + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomSixteen + " Missed!";
    }
}

//-------------FIFTEEN HITS AND POINTS---------------------------------------------
function rollFifteen(){
    let diceTenSideValues = [15,10,2,6,17,15,15,17,10,2];
    let randomFifteen;
    for(let i = 0; i < diceTenSideValues.length; i++){
        randomFifteen = diceTenSideValues[rollDie(diceTenSideValues.length )];
    }
    if( (randomFifteen == 15) ) {
        hitFifteen();
        document.getElementById("shot-message").innerHTML = randomFifteen + " Hit!";
    }
    else if (randomFifteen == 17) {
        hitSeventeen();
        document.getElementById("shot-message").innerHTML = randomFifteen + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomFifteen + " Missed!";
    }
}

//-------------NINETEEN AND SEVENTEEN HITS AND POINTS---------------------------------------------
function rollNineteenSeventeen(){
    let diceElevenSideValues = [19,3,7,19,17,17,7,3,19,17,25];
    let randomNineteenSeventeen;
    for(let i = 0; i < diceElevenSideValues.length; i++){
        randomNineteenSeventeen = diceElevenSideValues[rollDie(diceElevenSideValues.length)];
    }
    //Nineteen Hit
    if( (randomNineteenSeventeen == 19) ) {
        hitNineteen();
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Hit!";
    }
    else if (randomNineteenSeventeen == 17) {
        hitSeventeen();
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Hit!";
    }
    else if (randomNineteenSeventeen == 25) {
        hitBullseye();
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomNineteenSeventeen + " Missed!";
    }
}

//LIMIT DART THROWS

//-------------------------BULLSEYE HIT, RE-USE WHEN NEEDED----------------------
function hitBullseye() {
    let seventeenFirstHitCheckPlayer1 = document.getElementById("playerOne25-one").classList.contains("green-bg");
    let seventeenSecondHitCheckPlayer1 = document.getElementById("playerOne25-two").classList.contains("green-bg");
    let seventeenFirstHitCheckPlayer2 = document.getElementById("playerTwo25-one").classList.contains("green-bg");
    let seventeenSecondHitCheckPlayer2 = document.getElementById("playerTwo25-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (seventeenFirstHitCheckPlayer1 == true) && (seventeenSecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne25-three").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne25-two").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne25-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (seventeenFirstHitCheckPlayer2 == true) && (seventeenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo25-three").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo25-two").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo25-one").classList.add("green-bg");
        }
    }
    
}

//-------------------------TWENTY HIT, RE-USE WHEN NEEDED----------------------
function hitTwenty() {
    let twentyFirstHitCheckPlayer1 = document.getElementById("playerOne20-one").classList.contains("green-bg");
    let twentySecondHitCheckPlayer1 = document.getElementById("playerOne20-two").classList.contains("green-bg");
    let twentyFirstHitCheckPlayer2 = document.getElementById("playerTwo20-one").classList.contains("green-bg");
    let twentySecondHitCheckPlayer2 = document.getElementById("playerTwo20-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (twentyFirstHitCheckPlayer1 == true) && (twentySecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne20-three").classList.add("green-bg");
        }
        else if ( twentyFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne20-two").classList.add("green-bg");
        }
        else if ( twentyFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne20-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (twentyFirstHitCheckPlayer2 == true) && (twentySecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo20-three").classList.add("green-bg");
        }
        else if ( twentyFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo20-two").classList.add("green-bg");
        }
        else if ( twentyFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo20-one").classList.add("green-bg");
        }
    }
}


//-------------------------NINETEEN HIT, RE-USE WHEN NEEDED----------------------
function hitNineteen() {
    let nineteenFirstHitCheckPlayer1 = document.getElementById("playerOne19-one").classList.contains("green-bg");
    let nineteenSecondHitCheckPlayer1 = document.getElementById("playerOne19-two").classList.contains("green-bg");
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
    else {
        //Player 2 Hits
        if ( (nineteenFirstHitCheckPlayer2 == true) && (nineteenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo19-three").classList.add("green-bg");
        }
        else if ( nineteenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo19-two").classList.add("green-bg");
        }
        else if ( nineteenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo19-one").classList.add("green-bg");
        }
    }
}

//-------------------------EIGHTEEN HIT, RE-USE WHEN NEEDED----------------------
function hitEighteen() {
    let eighteenFirstHitCheckPlayer1 = document.getElementById("playerOne18-one").classList.contains("green-bg");
    let eighteenSecondHitCheckPlayer1 = document.getElementById("playerOne18-two").classList.contains("green-bg");
    let eighteenFirstHitCheckPlayer2 = document.getElementById("playerTwo18-one").classList.contains("green-bg");
    let eighteenSecondHitCheckPlayer2 = document.getElementById("playerTwo18-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (eighteenFirstHitCheckPlayer1 == true) && (eighteenSecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne18-three").classList.add("green-bg");
        }
        else if ( eighteenFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne18-two").classList.add("green-bg");
        }
        else if ( eighteenFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne18-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (eighteenFirstHitCheckPlayer2 == true) && (eighteenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo18-three").classList.add("green-bg");
        }
        else if ( eighteenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo18-two").classList.add("green-bg");
        }
        else if ( eighteenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo18-one").classList.add("green-bg");
        }
    }
}

//-------------------------SEVENTEEN HIT, RE-USE WHEN NEEDED----------------------
function hitSeventeen() {
    let seventeenFirstHitCheckPlayer1 = document.getElementById("playerOne17-one").classList.contains("green-bg");
    let seventeenSecondHitCheckPlayer1 = document.getElementById("playerOne17-two").classList.contains("green-bg");
    let seventeenFirstHitCheckPlayer2 = document.getElementById("playerTwo17-one").classList.contains("green-bg");
    let seventeenSecondHitCheckPlayer2 = document.getElementById("playerTwo17-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (seventeenFirstHitCheckPlayer1 == true) && (seventeenSecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne17-three").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne17-two").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne17-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (seventeenFirstHitCheckPlayer2 == true) && (seventeenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo17-three").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo17-two").classList.add("green-bg");
        }
        else if ( seventeenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo17-one").classList.add("green-bg");
        }
    }
}

//-------------------------SIXTEEN HIT, RE-USE WHEN NEEDED----------------------
function hitSixteen() {
    let sixteenFirstHitCheckPlayer1 = document.getElementById("playerOne16-one").classList.contains("green-bg");
    let sixteenSecondHitCheckPlayer1 = document.getElementById("playerOne16-two").classList.contains("green-bg");
    let sixteenFirstHitCheckPlayer2 = document.getElementById("playerTwo16-one").classList.contains("green-bg");
    let sixteenSecondHitCheckPlayer2 = document.getElementById("playerTwo16-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (sixteenFirstHitCheckPlayer1 == true) && (sixteenSecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne16-three").classList.add("green-bg");
        }
        else if ( sixteenFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne16-two").classList.add("green-bg");
        }
        else if ( sixteenFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne16-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (sixteenFirstHitCheckPlayer2 == true) && (sixteenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo16-three").classList.add("green-bg");
        }
        else if ( sixteenteenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo16-two").classList.add("green-bg");
        }
        else if ( sixteenteenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo16-one").classList.add("green-bg");
        }
    }
}

//-------------------------FIFTEEN HIT, RE-USE WHEN NEEDED----------------------
function hitFifteen() {
    let fifteenFirstHitCheckPlayer1 = document.getElementById("playerOne15-one").classList.contains("green-bg");
    let fifteenSecondHitCheckPlayer1 = document.getElementById("playerOne15-two").classList.contains("green-bg");
    let fifteenFirstHitCheckPlayer2 = document.getElementById("playerTwo15-one").classList.contains("green-bg");
    let fifteenSecondHitCheckPlayer2 = document.getElementById("playerTwo15-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (fifteenFirstHitCheckPlayer1 == true) && (fifteenSecondHitCheckPlayer1 == true)  ) {
            document.getElementById("playerOne15-three").classList.add("green-bg");
        }
        else if ( fifteenFirstHitCheckPlayer1 == true ) {
            document.getElementById("playerOne15-two").classList.add("green-bg");
        }
        else if ( fifteenFirstHitCheckPlayer1 == false ) {
            document.getElementById("playerOne15-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (fifteenFirstHitCheckPlayer2 == true) && (fifteenSecondHitCheckPlayer2 == true) ) {
            document.getElementById("playerTwo15-three").classList.add("green-bg");
        }
        else if ( fifteenFirstHitCheckPlayer2 == true ) {
            document.getElementById("playerTwo15-two").classList.add("green-bg");
        }
        else if ( fifteenFirstHitCheckPlayer2 == false ) {
            document.getElementById("playerTwo15-one").classList.add("green-bg");
        }
    }
}