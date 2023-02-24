//test to see if the script runs
console.log("main-script.js is running...");

//note: the first script that loads is "start-script.js"
//that one loads as soon as the page loads

//multidimensional array to represent the squares and their content
let squareMatrix = [];

//factory function to fill the squares
//n will eventually become either x or o
//i and j are just positions like in a C++ matrix
const squareFactory = (xo, i, j) => {
    return {xo, i, j};
};

//filling up squareMatrix with initial values
//to make the array multidimensional
for (let i=0; i<=2; i++) {
    let arr = [];
    for(let j=0; j<=2; j++) {
        const newSquare = squareFactory("n", i, j);
        arr.push(newSquare);
    }
    squareMatrix.push(arr);
}

//function to evaluate if someone won
//there are only 8 possible cases
let currentRound = 1;
let winner = "";
function checkWinner(currentPlayer) {
    console.log("currentPlayer: " + currentPlayer);
    console.log(squareMatrix[0][0].xo);
    /*
    if ((squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[0][1].xo == currentPlayer) && (squareMatrix[0][1].xo == currentPlayer)) {
        console.log("test win");
    }
    */
    if (
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[0][1].xo == currentPlayer) && (squareMatrix[0][2].xo == currentPlayer)
        ||
        (squareMatrix[1][0].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[1][2].xo == currentPlayer)
        ||
        (squareMatrix[2][0].xo == currentPlayer) && (squareMatrix[2][1].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[1][0].xo == currentPlayer) && (squareMatrix[2][0].xo == currentPlayer)
        ||
        (squareMatrix[0][1].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][1].xo == currentPlayer)
        ||
        (squareMatrix[0][2].xo == currentPlayer) && (squareMatrix[1][2].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][0].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][2].xo == currentPlayer)
        ||
        (squareMatrix[0][2].xo == currentPlayer) && (squareMatrix[1][1].xo == currentPlayer) && (squareMatrix[2][0].xo == currentPlayer)
    ) {
        console.log(`test win: ${currentPlayer} won!`);
        winner = currentPlayer;
        for (let i=0; i< xoContainerElemChildren.length; i++) {
            xoContainerElemChildren[i].removeEventListener("pointerdown", addXO);
        }
    }
}

//function to add x or 0
const addXO = function(e) {
    console.log("addXO");
    console.log("e.target.innerHTML: " + e.target.innerHTML);
    console.log("round " + currentRound);
    let currentXo = "";
    if (currentRound %2 == 0) {
        currentXo = "o";
    }
    else {
        currentXo = "x";
    }
    let i = e.target.id[e.target.id.length-2];
    let j = e.target.id[e.target.id.length-1];
    let elem = document.getElementById(e.target.id);
    squareMatrix[i][j].xo = currentXo;
    elem.innerHTML = squareMatrix[i][j].xo;
    console.log(squareMatrix[i][j].xo);
    checkWinner(squareMatrix[i][j].xo);
    e.target.removeEventListener("pointerdown", addXO);
    currentRound++;
}

//adding event listeners to the squares
let xoContainerElem = document.getElementById("xo-container");
let xoContainerElemChildren = xoContainerElem.children;
for (let i=0; i< xoContainerElemChildren.length; i++) {
    xoContainerElemChildren[i].addEventListener("pointerdown", addXO);
}

