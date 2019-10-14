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


let diceSixSideValues = [25,25,1,4,7,8];
let randomBull = [];
function rollBull(bullResult){
    for(let i = 0; i < bullResult.length; i++){
        randomBull = bullResult[Math.floor(Math.random() * bullResult.length )];
    }
    //console.log( randomBull  );
    if( randomBull == 25 ) {
        document.getElementById("playerOne15-one").classList.add("green-bg");
        document.getElementById("shot-message").innerHTML = randomBull + " Hit!";
    }
    else {
        document.getElementById("shot-message").innerHTML = randomBull + " Missed!";
    }
}
rollBull(diceSixSideValues);
    
    
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