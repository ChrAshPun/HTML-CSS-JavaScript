var currentFocusedBlock = "" // current selected Sudoku block
var prevFocusedBlock = "" // last block that was updated by numpad
var prevBlockValue = ""
let win = false
var allSelectableBlocks = Array.prototype.slice.call(document.querySelectorAll('.block'))
let activePuzzle = 1
const allPuzzles = Array.prototype.slice.call(document.querySelectorAll('.full-board'))
const eraseButton = document.getElementById("Erase-button")
const undoButton = document.getElementById("Undo-button")

// make bold blocks unselectable
var allSudokuBlocks = Array.prototype.slice.call(document.querySelectorAll('.block'))

for (let i = 0; i < allSudokuBlocks.length; i++) {
  if (allSudokuBlocks[i].childNodes[1].classList.contains("bold")) {
    allSudokuBlocks[i].classList.add("unselectable-block")
    allSudokuBlocks[i].classList.remove("block")
  }
}

// get only selectable blocks
var selectableBlocks = Array.prototype.slice.call(document.querySelectorAll('.block'))

// method to clear Sudoku board
function clearBoard() {
  for (let i = 0; i < selectableBlocks.length; i++) {
    selectableBlocks[i].childNodes[1].innerText = ""
  }
}

// EventListener to declare currentFocusedBlock
selectableBlocks.forEach(element => {
  element.addEventListener('click', event => {
    currentFocusedBlock = event.currentTarget.childNodes[1]
  })
});

// Numpad buttons
function inputNumber(x) {
  prevBlockValue = currentFocusedBlock.innerText
  currentFocusedBlock.innerText = x // input number to selected block
  prevFocusedBlock = currentFocusedBlock // save updated block for Undo Button
  console.log("prevFocusedBlock is: " + prevFocusedBlock)
}

// Erase button
eraseButton.addEventListener("click", event => { // Erase value on selected block
  prevFocusedBlock = currentFocusedBlock
  prevBlockValue = currentFocusedBlock.innerText
  currentFocusedBlock.innerText = "" // erase value from current selected block
})

// Undo button
undoButton.addEventListener("click", event => { // Undo last input or last erase
  prevFocusedBlock.innerText = prevBlockValue
})



function checkForWin() {
  
  // initialize entire Sudoku array
  let sudokuBoard = []
  
  sudokuBoard = Array.prototype.slice.call(document.getElementById("puzzle-1").querySelectorAll("p"))
  
  sudokuBoard = sudokuBoard.map(x => parseInt(x.innerText))
  
  console.log(sudokuBoard)

    // if the Sudoku board is not full return false
  if (sudokuBoard.includes(NaN)) {
   return false
  }
  
  // if the Sudoku board is full check for a win scenario
  else if (!(sudokuBoard.includes(NaN))) {
    
    // initialize all arrays
    let subgrid1 = []
    let subgrid2 = []
    let subgrid3 = []
    let subgrid4 = []
    let subgrid5 = []
    let subgrid6 = []
    let subgrid7 = []
    let subgrid8 = []
    let subgrid9 = []
    
    let row1 = []
    let row2 = []
    let row3 = []
    let row4 = []
    let row5 = []
    let row6 = []
    let row7 = []
    let row8 = []
    let row9 = []
    
    let column1 = []
    let column2 = []
    let column3 = []
    let column4 = []
    let column5 = []
    let column6 = []
    let column7 = []
    let column8 = []
    let column9 = []
    
    // push all subgrids
    for (let i = 0; i < 81; i++) {
      
      if (i >= 0 && i < 9) {
        subgrid1.push(sudokuBoard[i])
      }
      else if (i > 8 && i < 18) {
        subgrid2.push(sudokuBoard[i])
      }
      else if (i > 17 && i < 27) {
        subgrid3.push(sudokuBoard[i])
      }
      else if (i > 26 && i < 36) {
        subgrid4.push(sudokuBoard[i])
      }
      else if (i > 35 && i < 45) {
        subgrid5.push(sudokuBoard[i])
      }
      else if (i > 44 && i < 54) {
        subgrid6.push(sudokuBoard[i])
      }
      else if (i > 53 && i < 63) {
        subgrid7.push(sudokuBoard[i])
      }
      else if (i > 62 && i < 72) {
        subgrid8.push(sudokuBoard[i])
      }
      else if (i > 71 && i < 81) {
        subgrid9.push(sudokuBoard[i])
      }
    }

    // push all rows
    for (let i = 0; i < 81; i++) {

      if ([0, 1, 2, 9, 10, 11, 18, 19, 20].indexOf(i) !== -1) {
        row1.push(sudokuBoard[i])
      }
      else if ([3, 4, 5, 12, 13, 14, 21, 22, 23].indexOf(i) !== -1) {
        row2.push(sudokuBoard[i])
      }
      else if ([6, 7, 8, 15, 16, 17, 24, 25, 26].indexOf(i) !== -1) {
        row3.push(sudokuBoard[i])
      }
      else if ([27, 28, 29, 36, 37, 38, 45, 46, 47].indexOf(i) !== -1) {
        row4.push(sudokuBoard[i])
      }
      else if ([30, 31, 32, 39, 40, 41, 48, 49, 50].indexOf(i) !== -1) {
        row5.push(sudokuBoard[i])
      }
      else if ([33, 34, 35, 42, 43, 44, 51, 52, 53].indexOf(i) !== -1) {
        row6.push(sudokuBoard[i])
      }
      else if ([54, 55, 56, 63, 64, 65, 72, 73, 74].indexOf(i) !== -1) {
        row7.push(sudokuBoard[i])
      }
      else if ([57, 58, 59, 66, 67, 68, 75, 76, 77].indexOf(i) !== -1) {
        row8.push(sudokuBoard[i])
      }
      else if ([60, 61, 62, 69, 70, 71, 78, 79, 80].indexOf(i) !== -1) {
        row9.push(sudokuBoard[i])
      }
    }

    // push all columns
    for (let i = 0; i < 81; i++) {

      if ([0, 3, 6, 27, 30, 33, 54, 57, 60].indexOf(i) !== -1) {
        column1.push(sudokuBoard[i])
      }
      else if ([1, 4, 7, 28, 31, 34, 55, 58, 61].indexOf(i) !== -1) {
        column2.push(sudokuBoard[i])
      }
      else if ([2, 5, 8, 29, 32, 35, 56, 59, 62].indexOf(i) !== -1) {
        column3.push(sudokuBoard[i])
      }
      else if ([9, 12, 15, 36, 39, 42, 63, 66, 69].indexOf(i) !== -1) {
        column4.push(sudokuBoard[i])
      }
      else if ([10, 13, 16, 37, 40, 43, 64, 67, 70].indexOf(i) !== -1) {
        column5.push(sudokuBoard[i])
      }
      else if ([11, 14, 17, 38, 41, 44, 65, 68, 71].indexOf(i) !== -1) {
        column6.push(sudokuBoard[i])
      }
      else if ([18, 21, 24, 45, 48, 51, 72, 75, 78].indexOf(i) !== -1) {
        column7.push(sudokuBoard[i])
      }
      else if ([19, 22, 25, 46, 49, 52, 73, 76, 79].indexOf(i) !== -1) {
        column8.push(sudokuBoard[i])
      }
      else if ([20, 23, 26, 47, 50, 53, 74, 77, 80].indexOf(i) !== -1) {
        column9.push(sudokuBoard[i])
      }
    }

    // check for duplicates for every subgrid, row and column
    let checkForDuplicates = (arr) => new Set(arr).size === 9;

    const allArrays = [
      subgrid1,
      subgrid2,
      subgrid3,
      subgrid4,
      subgrid5,
      subgrid6,
      subgrid7,
      subgrid8,
      subgrid9,
      row1,
      row2,
      row3,
      row4,
      row5,
      row6,
      row7,
      row8,
      row9,
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7,
      column8,
      column9
    ]

    return allArrays.every(checkForDuplicates);
  }
}






// testing using mutation observer
let puzzleOne = document.getElementById("puzzle-1")

const observer = new MutationObserver(function () {
  win = checkForWin()
  // if puzzled is solved
  if (win) {
    document.getElementById("Solved").innerText = "Solved"
  } else {
  document.getElementById("Solved").innerText = ""
  }
});

observer.observe(puzzleOne, { subtree: true, childList: true });
