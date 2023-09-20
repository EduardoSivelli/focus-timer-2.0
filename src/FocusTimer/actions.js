import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import * as color from "./colors.js"

export function playPause(){
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPressAudio.play()

  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function add() {
  timer.addMinutes()
  sounds.buttonPressAudio.play()
  console.log("add function")
}

export function remove() {
  timer.removeMinutes()
  sounds.buttonPressAudio.play()
  console.log("remove function")
}

export function toggleMusicFlorest(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  color.florestColor()
  if(state.isMute){
    sounds.florestAudio.play()
    
    return
  }
  sounds.florestAudio.pause()
  
  console.log("music-toggle-flores function")
}

export function toggleMusicRain(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  
  if(state.isMute){
    sounds.rainAudio.play()
    return
  }
  sounds.rainAudio.pause()
  console.log("music-toggle-chuv function")
}

export function toggleMusicCoffeeShop(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  
  if(state.isMute){
    sounds.coffeeShopAudio.play()
    return
  }
  sounds.coffeeShopAudio.pause()
  console.log("music-toggle-cafe function")
}

export function toggleMusicFire(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  
  if(state.isMute){
    sounds.fireAudio.play()
    return
  }
  sounds.fireAudio.pause()
  console.log("music-toggle-fog function")
}