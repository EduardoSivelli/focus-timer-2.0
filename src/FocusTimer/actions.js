import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function playPause(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function add() {
  el.btnplus[0].addEventListener('click', function(){
    minutes = minutes + 5
    timer.updateDisplay(minutes,0)
})
  console.log("add function")
}

export function remove() {
  console.log("remove function")
}

export function toggleMusic(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  
  console.log("music-toggle function")
}