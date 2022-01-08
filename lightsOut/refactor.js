// Imports 
import { Light } from './lightClass.js'
import { clickedPlusAdjacent, levels } from './utils.js'

// Access all clickable buttons in the GUI
const squares = document.querySelectorAll('.button')
// Array to store and access button objects
const lights = []
for (let i = 1; i < 26; i++){
  lights.push(new Light(i, false))
}
// tracks active light count
let tally = 0
// tracks clicks
let clickCount = 0

// Sets up gameboard on start
levels.one.lights.forEach(id => {
  lights[id - 1].toggleState()
  squares[id - 1].classList.toggle('active')
  tally += 1
})


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
      console.log('You Win!!')
      return
    } else if (clickCount === levels.one.attempts) {
      console.log('Max attempts reach, you Lose!')
    }
  })

})
