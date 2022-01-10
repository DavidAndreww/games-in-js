// Imports 
import { Light } from './lightClass.js'
import { levelCatalogue } from './gameLevels.js'
import { clickedPlusAdjacent, alertMessage } from './utils.js'

// body element - disable clicks while level refreshes
const body = document.querySelector('body')
// Access all clickable lights in the GUI
const gameSquares = document.querySelectorAll('.light')
const notificationBanner = document.querySelector('h2')
const resetBtn = document.querySelector('#reset-btn')
const hintBtn = document.querySelector('#hint-btn')

// Variables for tracking state of game logic
let [activeLightCount, clickCount, currentLevel, attempts, hintsUsedCount] = [0, 0, 1, 1, 0]

// User notification messages
let winAlert = alertMessage('win')(3000)(notificationBanner)
let lossAlert = alertMessage('loss')(3000)(notificationBanner)
let hintAlert = alertMessage('hint')(3000)(notificationBanner)

// Adding on click functionalities to GUI elements
resetBtn.addEventListener('click', () => {
  clearBoard()
  loadBoard(currentLevel)
})
hintBtn.addEventListener('click', () => showHint(currentLevel))
gameSquares.forEach(square => square.addEventListener('click', (square) => gameflow(square)))

// stores button objects for state tracking
// When accessing Lights & gameSquares, the syntax [id - 1] will always be used, as arrays are 0 based, but ids start at 1
const lightObjects = []
for (let i = 1; i < 26; i++){
  lightObjects.push(new Light(i, false))
}

// Loads board at runtime
loadBoard(currentLevel)

function loadBoard(level) {
  // reset clickCount, activeLightCount & re-enable mouse clicks
  clickCount = 0
  activeLightCount = 0
  mouseAction('enable')
  
  // populates gameboard with starting lights + sets activeLightCount accordingly
  const newBoardStartingCoords = levelCatalogue[`${level}`].startingCoords
  newBoardStartingCoords.forEach(coord => {
    lightObjects[coord - 1].toggleState()
    gameSquares[coord - 1].classList.toggle('active')
    activeLightCount += 1
  })
}

// Controls game logic flow
const gameflow = (square) => {
  const clickedId = parseInt(square.currentTarget.id)
  // identifies the clicked and adjacent squares to toggle
  const idsToToggle = clickedPlusAdjacent(clickedId)
  toggleSquares(idsToToggle)
  clickCount++

  if (checkForWin(activeLightCount)) {
    currentLevel++
    mouseAction('disable')
    winAlert(`You Win!<br>Get ready for level #${currentLevel}`)
    setTimeout(() => {
      startNewLevel()
      loadBoard(currentLevel)
    }, 3000)

  } else if (checkForLoss(clickCount)) {
    mouseAction('disable')
    lossAlert('Sorry, you lost. Try again?')
    setTimeout(() => {
      clearBoard()
      loadBoard(currentLevel)
    }, 3000)
  }
}

const toggleSquares = idsToToggle => {
  // gets index of each appropriate square and light to toggle - toggles them & modifies active light count
  idsToToggle.forEach(id => {
    const lightObj = lightObjects[id - 1]
    const squareToToggle = gameSquares[id - 1]

    lightObj.toggleState()
    squareToToggle.classList.toggle('active')
    activeLightCount = lightObj.changeVal(activeLightCount)
  })
}

// disable/enable mouse events according to display of win & loss alerts
function mouseAction(status) {
  body.style.pointerEvents = status === 'disable' ? "none" : "auto"
}

// only executes when user completes a level
const startNewLevel = () => {
  [attempts, hintsUsedCount ] = [1, 0]
}

// only executes when user loses or manually resets board
const clearBoard = () => {
  attempts++
  // Reset GUI and light objects to default state
  for (let i = 1; i < 26; i++){
    lightObjects[i - 1].isActive = false
    gameSquares[i - 1].classList.remove('active')
  }
}

const showHint = currentLevel => {
  // Only 2 hints allowed
  if (hintsUsedCount === 2) {
    hintAlert('You don\'t have any hints left!')
    return
  }
  // HintId accesses coord values at each index [0, 1]. Only 2 hints available to user
  const hintId = levelCatalogue[`${currentLevel}`].hints[hintsUsedCount]
  gameSquares[hintId - 1].classList.add('hint')

  setTimeout(function() {
    gameSquares[hintId - 1].classList.remove('hint')
  }, 2500)
  hintsUsedCount++
}

// User wins if no lights are active
const checkForWin = activeLightCount => activeLightCount == 0 ? true : false

// User loses if max clicks is reached
const checkForLoss = clickCount => clickCount === levelCatalogue[`${ currentLevel }`].maxAttempts ? true : false
