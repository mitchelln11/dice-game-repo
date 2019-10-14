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

//------SHOOTING FOR BULLSEYE------
// let diceSixSideValues = [25,25,1,4,7,8];
// let randomBull = [];
// function rollBull(bullResult){
//     for(let i = 0; i < bullResult.length; i++){
//         randomBull = bullResult[Math.floor(Math.random() * bullResult.length )];
//     }
//     //console.log( randomBull  );
//     if( randomBull == 25 ) {
//         document.getElementById("playerOne25-one").classList.add("green-bg");
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
//     //console.log( randomBull  );
//     if( (randomTwenties == 20) ) {
//         document.getElementById("playerOne20-one").classList.add("green-bg");
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
//     }
//     else if (randomTwenties == 18) {
//         document.getElementById("playerOne18-one").classList.add("green-bg");
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Hit!";
//     }
//     else {
//         document.getElementById("shot-message").innerHTML = randomTwenties + " Missed!";
//     }
// }
// rollTwenty(diceSevenSideValues);

//------SHOOTING FOR 18------
let diceEightSideValues = [18,4,1,20,13,18,6,5];
let randomEighteen = [];
function rollEighteen(eighteenResult){
    for(let i = 0; i < eighteenResult.length; i++){
        randomEighteen = eighteenResult[Math.floor(Math.random() * eighteenResult.length )];
    }
    //console.log( randomBull  );
    if( (randomEighteen == 18) ) {
        document.getElementById("playerOne18-one").classList.add("green-bg");
        document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
    }
    else if (randomEighteen == 20) {
        document.getElementById("playerOne20-one").classList.add("green-bg");
        document.getElementById("shot-message").innerHTML = randomEighteen + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomEighteen + " Missed!";
    }
}
rollEighteen(diceEightSideValues);
//WORK YOUR WAY DOWN 18 IS DONE, STILL NEED 17, 16, 15
//IMPLEMENT PLAYER 2 AND LIMIT DART THROWS
    
    
    // console.log(  Math.floor(Math.random(diceSixSideValues) * diceSixSideValues.length )  );
    // let diceSevenSideValues = [];
    // let diceEightSideValues = [];
    // let diceNineSideValues = [];
    // let diceTenSideValues = [];
    // let diceElevenSideValues = [];
    // let bullResult = diceSixSideValues[Math.floor(Math.random() * diceSixSideValues.length)];
    // let test = diceSixSideValues[1];
    // console.log( test );
//     console.log(test);



// let origWord = rollBull("hello");
// console.log(origWord);

// console.log("Hello");