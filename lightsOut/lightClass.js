export function Light(id, isActive) {
  // used to access buttons from array
  this.id = id
  // state of button
  this.isActive = isActive
  this.toggleState = function() {
    this.isActive = !this.isActive
  }
  // modifies global variable 'activeLightCount', to track total active buttons
  this.changeVal = function(integer) {
    return this.isActive ? integer += 1 : integer -=1
  }
}