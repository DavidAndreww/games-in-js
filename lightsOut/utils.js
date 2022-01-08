export function clickedPlusAdjacent(clickedId) {
  const idsToToggle = [clickedId]
  // values of id's that don't require left check
  const idsNotRequiringRightCheck = [1,6,11,16,21]
  // check below
  clickedId > 6 ? idsToToggle.push(clickedId - 5) : null
  // check above
  clickedId < 21 ? idsToToggle.push(clickedId + 5) : null
  // check right
  clickedId % 5 != 0 ? idsToToggle.push(clickedId + 1) : null
    // check left
  idsNotRequiringRightCheck.includes(clickedId) ? null : idsToToggle.push(clickedId - 1)
  
  return idsToToggle
}

export const levels = {
  one: {
    lights:[11, 13, 15],
    attempts: 6
  },
  two: []
}