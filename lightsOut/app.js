// Imports 
import { Button } from './lightClass.js'
import { clickedPlusAdjacent, levels } from './utils.js'

// Access all clickable buttons in the GUI
const squares = document.querySelectorAll('.button')
// Array to store and access button objects
const buttons = []
for (let i = 1; i < 26; i++){
  buttons.push(new Button(i, false))
}
// tracks active button count
let tally = 0

// Sets up gameboard on start
levels.one.forEach(id => {
  buttons[id - 1].toggleState()
  squares[id - 1].classList.toggle('active')
  tally += 1
})


// Adds on-click feature to each button
squares.forEach(elem => {
  //const clickedId = parseInt(elem.id)
  
  elem.addEventListener('click', function(elem) {
    const clickedId = parseInt(elem.currentTarget.id)
    // identifies the clicked and adjacent squares to toggle
    const idsToToggle = clickedPlusAdjacent(clickedId)
    // toggles UI and state of button object
    idsToToggle.forEach(id => {
      const buttonToToggle = buttons[id - 1]
      const squareToToggle = squares[id - 1]

      buttonToToggle.toggleState()
      squareToToggle.classList.toggle('active')
      tally = buttonToToggle.updateTally(tally)
    })
    
    if (tally === 0) console.log('You WIN')
  })

})
