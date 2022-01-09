// Imports 
import { Light } from './lightClass.js'
import { levels } from './gameLevels.js'
import { clickedPlusAdjacent, alertMessage } from './utils.js'

// Access all clickable lights in the GUI
const squares = document.querySelectorAll('.light')
// element to display win/loss message (diplay = none by default)
const h2Elem = document.querySelector('h2')
// body element - disable clicks while level refreshes
const body = document.querySelector('body')
const resetBtn = document.querySelector('#reset-btn')
const hintBtn = document.querySelector('#hint-btn')

resetBtn.addEventListener('click', function() {
  attempts ++
  console.log(attempts)
  resetBoard()
  startGame(level)
})

hintBtn.addEventListener('click', function() {showHint(level)})

// stores button objects for state tracking
const lights = []
for (let i = 1; i < 26; i++){
  lights.push(new Light(i, false))
}

// Variables for tracking game state
let [activeLightCount, clickCount, level, attempts, hintCount] = [0, 0, 1, 1, 0]

let winAlert = alertMessage('win')(3000)(h2Elem)
let lossAlert = alertMessage('loss')(3000)(h2Elem)
let hintAlert = alertMessage('hint')(3000)(h2Elem)

// Sets up gameboard on start
function startGame(level) {
  activeLightCount = 0
  clickCount = 0
  mouseAction('enable')
  // populates gameboard with starting lights + sets activeLightCount equal to numer of squares which are lit at start
  levels[`${level}`].startingCoords.forEach(coord => {
    lights[coord - 1].toggleState()
    squares[coord - 1].classList.toggle('active')
    activeLightCount += 1
  })
}

function showHint(level) {
  if (hintCount > 1) {
    hintAlert('You don\'t have any hints left!')
    return
  }
  let hintId = levels[`${level}`].hints[hintCount]
  
  squares[hintId - 1].classList.add('hint')

  setTimeout(function() {
    squares[hintId - 1].classList.remove('hint')
  }, 2500)
  hintCount++
}


// disable/enable mouse events while board refreshes
function mouseAction(status){
  body.style.pointerEvents = status === 'disable' ? "none" : "auto"
}

startGame(level)

// Adds on-click feature to each button
squares.forEach(square => {
  
  square.addEventListener('click', function(square) {
    const clickedId = parseInt(square.currentTarget.id)
    // identifies the clicked and adjacent squares to toggle
    const idsToToggle = clickedPlusAdjacent(clickedId)
    // toggles UI and state of button object
    idsToToggle.forEach(id => {
      const lightToToggle = lights[id - 1]
      const squareToToggle = squares[id - 1]

      lightToToggle.toggleState()
      squareToToggle.classList.toggle('active')
      activeLightCount = lightToToggle.changeInt(activeLightCount)
    })
    clickCount++
    // If win....
    if (activeLightCount === 0) {
      mouseAction('disable')
      winAlert(`You Win!<br>Get ready for level ${level + 1}`)
      level++
      setTimeout(() => startGame(level), 3000)
      
      //TODO need new logic for start/reset
      //TODO 'startGame' needs to clear attemps, hintcount, clickcount, and increment level
      //TODO 'resetGame' needs to reset board & clickCount only - persist attempts, hintcount, and level
      return
      // if Loss....
    } else if (clickCount === levels[`${ level }`].maxAttempts) {
      lossAlert('Sorry, you lost. Try again?')
      mouseAction('disable')

      setTimeout(() => {
        resetBoard()
        startGame(level)
      }, 3000)
    }
  })
})

function resetBoard() {
  for (let i = 1; i < 26; i++){
    lights[i - 1].isActive = false
    squares[i - 1].classList.remove('active')
  }
}
