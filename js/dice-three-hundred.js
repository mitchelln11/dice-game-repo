//Get and post player one name
let firstPlayer = playerOne ( prompt("Please Enter Name of Player One") );
function playerOne(playerOneName) {
    document.getElementById("player-one").innerHTML = playerOneName;
}

//Get and post player two name
function playerTwo(playerTwoName) {
    document.getElementById("player-two").innerHTML = playerTwoName;
}
let secondPlayer = playerTwo ( prompt("Please Enter Name of Player Two") );


let playerTurn = true;//Keep open so hits work
 
//-------------ROLL DIE---------------------------------------------
function rollDie(n){//n gets replaced in roll functions
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
            declareVictor ();
        });
    });
}
trackClicks();

//-------------FRONT-END CURRENT PLAYER INDICATOR---------------------------------------------
function currentPlayer () {
    if (playerTurn == false) {
        document.getElementById("player-one-scoreboard").classList.remove("activeScoreboard");
        document.getElementById("player-two-scoreboard").classList.add("activeScoreboard");
    }
    else if (playerTurn == true) {
        document.getElementById("player-two-scoreboard").classList.remove("activeScoreboard");
        document.getElementById("player-one-scoreboard").classList.add("activeScoreboard");
    }
}
currentPlayer();

//-------------WRITE TO MESSAGE BOX RE-USE AS NEEDED---------------------------------------------
function writeToMessageBox(x) {
    document.getElementById("shot-message").innerHTML = (x);
}

//-------------GENERATE CELL HIT RE-USE AS NEEDED---------------------------------------------
function genCellHit(cell) {
    document.getElementById(cell).classList.add("green-bg");
}

//-------------BULLSEYE HITS AND POINTS---------------------------------------------

function rollBull(){
    let diceSixSideValues = [25,25,1,4,7,8];
    let randomBull;
    for(let i = 0; i < diceSixSideValues.length; i++){
        randomBull = diceSixSideValues[rollDie(diceSixSideValues.length )];
    }
    if( randomBull == 25 ) {
        hitBullseye();
        writeToMessageBox(randomBull + " Hit!");
    }
    else {
        writeToMessageBox(randomBull + " Missed!");
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
        writeToMessageBox(randomTwenties + " Hit!");
    }
    else if (randomTwenties == 18) {
        hitEighteen();
        writeToMessageBox(randomTwenties + " Hit!");
    }
    else {
        writeToMessageBox(randomTwenties + " Missed!");
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
        writeToMessageBox(randomEighteen + " Hit!");
    }
    else if (randomEighteen == 20) {
        hitTwenty();
        writeToMessageBox(randomEighteen + " Hit!");
    }
    else {
        writeToMessageBox(randomEighteen + " Missed!");
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
        writeToMessageBox(randomSixteen + " Hit!");
    }
    else if (randomSixteen == 19) {
        hitNineteen();
        writeToMessageBox(randomSixteen + " Hit!");
    }
    else {
        writeToMessageBox(randomSixteen + " Missed!");
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
        writeToMessageBox(randomFifteen + " Hit!");
    }
    else if (randomFifteen == 17) {
        hitSeventeen();
        writeToMessageBox(randomFifteen + " Hit!");
    }
    else {
        writeToMessageBox(randomFifteen + " Missed!");
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
        writeToMessageBox(randomNineteenSeventeen + " Hit!");
    }
    else if (randomNineteenSeventeen == 17) {
        hitSeventeen();
        writeToMessageBox(randomNineteenSeventeen + " Hit!");
    }
    else if (randomNineteenSeventeen == 25) {
        hitBullseye();
        writeToMessageBox(randomNineteenSeventeen + " Hit!");
    }
    else {
        writeToMessageBox(randomNineteenSeventeen + " Missed!");
    }
}

//-------------------------BULLSEYE HIT, RE-USE WHEN NEEDED----------------------
function hitBullseye() {
    let bullFirstHitCheckPlayer1 = document.getElementById("playerOne25-one").classList.contains("green-bg");
    let bullSecondHitCheckPlayer1 = document.getElementById("playerOne25-two").classList.contains("green-bg");
    let bullFirstHitCheckPlayer2 = document.getElementById("playerTwo25-one").classList.contains("green-bg");
    let bullSecondHitCheckPlayer2 = document.getElementById("playerTwo25-two").classList.contains("green-bg");
    if(playerTurn == true) {
        if( (bullFirstHitCheckPlayer1 == true) && (bullSecondHitCheckPlayer1 == true)  ) {
            genCellHit("playerOne25-three");
            //document.getElementById().classList.add("green-bg");
        }
        else if ( bullFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne25-two");
            //document.getElementById("playerOne25-two").classList.add("green-bg");
        }
        else if ( bullFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne25-one");
            //document.getElementById("playerOne25-one").classList.add("green-bg");
        }
    }
    else {
        //Player 2 Hits
        if ( (bullFirstHitCheckPlayer2 == true) && (bullSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo25-three");
            //document.getElementById("playerTwo25-three").classList.add("green-bg");
        }
        else if ( bullFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo25-two");
            //document.getElementById("playerTwo25-two").classList.add("green-bg");
        }
        else if ( bullFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo25-one");
            //document.getElementById("playerTwo25-one").classList.add("green-bg");
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
            genCellHit("playerOne20-three");
        }
        else if ( twentyFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne20-two");
        }
        else if ( twentyFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne20-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (twentyFirstHitCheckPlayer2 == true) && (twentySecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo20-three");
        }
        else if ( twentyFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo20-two");
        }
        else if ( twentyFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo20-one");
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
            genCellHit("playerOne19-three");
        }
        else if ( nineteenFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne19-two");
        }
        else if ( nineteenFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne19-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (nineteenFirstHitCheckPlayer2 == true) && (nineteenSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo19-three");
        }
        else if ( nineteenFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo19-two");
        }
        else if ( nineteenFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo19-one");
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
            genCellHit("playerOne18-three");
        }
        else if ( eighteenFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne18-two");
        }
        else if ( eighteenFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne18-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (eighteenFirstHitCheckPlayer2 == true) && (eighteenSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo18-three");
        }
        else if ( eighteenFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo18-two");
        }
        else if ( eighteenFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo18-one");
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
            genCellHit("playerOne17-three");
        }
        else if ( seventeenFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne17-two");
        }
        else if ( seventeenFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne17-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (seventeenFirstHitCheckPlayer2 == true) && (seventeenSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo17-three");
        }
        else if ( seventeenFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo17-two");
        }
        else if ( seventeenFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo17-one");
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
            genCellHit("playerOne16-three");
        }
        else if ( sixteenFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne16-two");
        }
        else if ( sixteenFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne16-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (sixteenFirstHitCheckPlayer2 == true) && (sixteenSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo16-three");
        }
        else if ( sixteenFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo16-two");
        }
        else if ( sixteenFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo16-one");
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
            genCellHit("playerOne15-three");
        }
        else if ( fifteenFirstHitCheckPlayer1 == true ) {
            genCellHit("playerOne15-two");
        }
        else if ( fifteenFirstHitCheckPlayer1 == false ) {
            genCellHit("playerOne15-one");
        }
    }
    else {
        //Player 2 Hits
        if ( (fifteenFirstHitCheckPlayer2 == true) && (fifteenSecondHitCheckPlayer2 == true) ) {
            genCellHit("playerTwo15-three");
        }
        else if ( fifteenFirstHitCheckPlayer2 == true ) {
            genCellHit("playerTwo15-two");
        }
        else if ( fifteenFirstHitCheckPlayer2 == false ) {
            genCellHit("playerTwo15-one");
        }
    }
}

//-------------------------DECLARE VICTOR----------------------
function declareVictor () {
    //Player One
    let bullThirdHitCheckPlayer1 = document.getElementById("playerOne25-three").classList.contains("green-bg");
    let twentyThirdHitCheckPlayer1 = document.getElementById("playerOne20-three").classList.contains("green-bg");
    let nineteenThirdHitCheckPlayer1 = document.getElementById("playerOne19-three").classList.contains("green-bg");
    let eighteenThirdHitCheckPlayer1 = document.getElementById("playerOne18-three").classList.contains("green-bg");
    let seventeenThirdHitCheckPlayer1 = document.getElementById("playerOne17-three").classList.contains("green-bg");
    let sixteenThirdHitCheckPlayer1 = document.getElementById("playerOne16-three").classList.contains("green-bg");
    let fifteenThirdHitCheckPlayer1 = document.getElementById("playerOne15-three").classList.contains("green-bg");
    //Player Two
    let bullThirdHitCheckPlayer2 = document.getElementById("playerTwo25-three").classList.contains("green-bg");
    let twentyThirdHitCheckPlayer2 = document.getElementById("playerTwo20-three").classList.contains("green-bg");
    let nineteenThirdHitCheckPlayer2 = document.getElementById("playerTwo19-three").classList.contains("green-bg");
    let eighteenThirdHitCheckPlayer2 = document.getElementById("playerTwo18-three").classList.contains("green-bg");
    let seventeenThirdHitCheckPlayer2 = document.getElementById("playerTwo17-three").classList.contains("green-bg");
    let sixteenThirdHitCheckPlayer2 = document.getElementById("playerTwo16-three").classList.contains("green-bg");
    let fifteenThirdHitCheckPlayer2 = document.getElementById("playerTwo15-three").classList.contains("green-bg");
    if ( (bullThirdHitCheckPlayer1 == true) && (twentyThirdHitCheckPlayer1 == true) && (nineteenThirdHitCheckPlayer1 == true) && (eighteenThirdHitCheckPlayer1 == true) && (seventeenThirdHitCheckPlayer1 == true) && (sixteenThirdHitCheckPlayer1 == true) && (fifteenThirdHitCheckPlayer1 == true)
    && ( (bullThirdHitCheckPlayer2 == false) || (twentyThirdHitCheckPlayer2 == false) || (nineteenThirdHitCheckPlayer2 == false) || (eighteenThirdHitCheckPlayer2 == false) || (seventeenThirdHitCheckPlayer2 == false) || (sixteenThirdHitCheckPlayer2 == false) || (fifteenThirdHitCheckPlayer2 == false) )) {
        writeToMessageBox( document.getElementById("player-one").innerHTML + " Wins!" );
        disableBtns();
    }
    else if ( (bullThirdHitCheckPlayer2 == true) && (twentyThirdHitCheckPlayer2 == true) && (nineteenThirdHitCheckPlayer2 == true) && (eighteenThirdHitCheckPlayer2 == true) && (seventeenThirdHitCheckPlayer2 == true) && (sixteenThirdHitCheckPlayer2 == true) && (fifteenThirdHitCheckPlayer2 == true)
    && ( (bullThirdHitCheckPlayer1 == false) || (twentyThirdHitCheckPlayer1 == false) || (nineteenThirdHitCheckPlayer1 == false) || (eighteenThirdHitCheckPlayer1 == trfalseue) || (seventeenThirdHitCheckPlayer1 == false) || (sixteenThirdHitCheckPlayer1 == false) || (fifteenThirdHitCheckPlayer1 == false) )) {
        writeToMessageBox( document.getElementById("player-two").innerHTML + " Wins!" );
        disableBtns();
    }
}
declareVictor();