export function Light(id, isActive) {
  // used to access buttons from array
  this.id = id
  // state of button
  this.isActive = isActive
  this.toggleState = function() {
    this.isActive = !this.isActive
  }
  // modifies global variable 'tally', to track total active buttons
  this.updateTally = function(tally) {
    return this.isActive ? tally += 1 : tally -=1
  }
}