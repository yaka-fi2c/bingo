

/*  first of all, the bingo rules:
the first column can get nums between 1-15, second gets 16-30, third gets 31-45, fourth gets 46-60
and fifth gets 61-75.
bingo declared when a row or a coulumn have all the numberד that were fired.*/


//fetch all the elemnts in the document so you can style them and seperate them to components 
//(cols, rows, title etc..)
var bingoRow = document.querySelectorAll('.game-item')
//fetch the rows
var rowOne = document.getElementsByClassName('row-1 match'),
  rowTow = document.getElementsByClassName('row-2 match'),
  rowThree = document.getElementsByClassName('row-3 match'),
  rowFour = document.getElementsByClassName('row-3 match'),
  rowFive = document.getElementsByClassName('row-4 match');
// col on the board to generate random numbers
var bcolBoard = document.querySelectorAll('.bCol'),
  iColBoard = document.querySelectorAll('.iCol'),
  NColBoard = document.querySelectorAll('.nCol'),
  GColBoard = document.querySelectorAll('.gCol'),
  OColBoard = document.querySelectorAll('.oCol');
// fetch  the columns
var bColMatch = document.getElementsByClassName('bCol match'),
  iColMatch = document.getElementsByClassName('iCol match'),
  nColMatch = document.getElementsByClassName('nCol match'),
  gColMatch = document.getElementsByClassName('gCol match'),
  oColMatch = document.getElementsByClassName('Col match');
// create a reuseble function to generate numbers to each column (b,i,n,g,o col's)
function generateBoardNum(i, num, BingoCol) {
  var bColnum = [];
  for (var ii = i; ii <= num; ii++) {
    bColnum.splice(Math.floor(Math.random() * bColnum.length), 0, ii);
  }
  for (var j = 0; j < BingoCol.length; j++) {
    BingoCol[j].innerHTML = bColnum[j];
  };
}
//call the function by the appropriate param's to each col.
generateBoardNum(1, 15, bcolBoard);
generateBoardNum(16, 30, iColBoard);
generateBoardNum(31, 45, NColBoard);
generateBoardNum(46, 60, GColBoard);
generateBoardNum(61, 75, OColBoard);
// fetch all the board *game* elements so you can loop them.
var board = document.querySelectorAll('.bCol, .iCol , .nCol, .gCol , .oCol');
//fetch the button element and create event that listens the click
document.getElementById('btn').addEventListener('click', generate);
// create empty array to push random number between 1-75 to
bingoNums = [];
//loop and push them randomly using splice
for (var i = 1; i <= 75; i++) {
  bingoNums.splice(Math.floor(Math.random() * bingoNums.length), 0, i);
}
//the next function will run when we'll click the button
function generate() {
  //create new div and p that will show the number we drew
  var newDiv = document.createElement('div');
  var newP = document.createElement('p');
  // add the appropriate style 
  newP.classList.add('newP');
  newDiv.classList.add('numDrawn');
  //append p inside the div (for easier css tasking)
  newDiv.appendChild(newP)
  //append the new elements inside the button container
  document.querySelector('.btn-container').appendChild(newDiv);
  // cut the first number from the random number array (inside a variable)
  var num = bingoNums.splice(0, 1);
  // the new element weve created will show the number that was drewned
  newP.innerHTML = num;
  // loop over the board numbers to check if there is a match between the nums and if so, change the class.
  for (var i = 0; i < board.length; i++) {
    if (board[i].innerText == newP.innerText) {
      board[i].classList.add("match");
    }
  }
  // conditional statement that checks wheter the row or col is all matched to the so far drewned numbers.
  // if all 5 match, the bingo title will תהבהב.
  for (var i = 0; i < board.length; i++) {
    if (rowOne.length === 5 || rowTow.length === 5 || rowThree.length === 4 ||
      rowFour.length === 5 || rowFive.length === 5 || bColMatch.length === 5 ||
      iColMatch.length === 5 || nColMatch.length === 4 || gColMatch.length === 5 ||
      nColMatch.length === 5) {
      bingoRow[i].classList.add('blink_me');
    }
  }
};

















