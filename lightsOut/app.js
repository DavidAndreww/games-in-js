// Imports 
import { Light } from './lightClass.js'
import { clickedPlusAdjacent, levels, alertMessage } from './utils.js'

// Access all clickable light in the GUI
const squares = document.querySelectorAll('.light')
// element to display win/loss message
const h2Elem = document.querySelector('h2')
// body element - disable clicks while level loads
const body = document.querySelector('body')

// Array to store and access button objects
const lights = []
for (let i = 1; i < 26; i++){
  lights.push(new Light(i, false))
}
// tracks active light count
let tally
// tracks clicks
let clickCount
// current level
let level = 1
let winAlert = alertMessage('win')(3000)(h2Elem)
let lossAlert = alertMessage('loss')(3000)(h2Elem)

// Sets up gameboard on start
function startGame(level) {
  body.style.pointerEvents = 'auto'
  tally = 0
  clickCount = 0
  levels[`${ level }`].lights.forEach(id => {
    lights[id - 1].toggleState()
    squares[id - 1].classList.toggle('active')
    tally += 1
  })
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
      tally = lightToToggle.updateTally(tally)
    })
    clickCount++
    if (tally === 0) {
      body.style.pointerEvents = 'none'
      winAlert(`You Win!<br>Get ready for level ${level + 1}`)
      level++
      setTimeout(() => startGame(level), 3000)
      return
    } else if (clickCount === levels[`${ level }`].minAttempts) {
      lossAlert('Sorry, you lost. Try again?')
      body.style.pointerEvents = 'none'
      setTimeout(() => {
        for (let i = 1; i < 26; i++){
          lights[i - 1].isActive = false
          squares[i - 1].classList.remove('active')
        }
        startGame(level)
      }, 3000)
    }
  })

})
