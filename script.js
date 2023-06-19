const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const set = document.querySelector('.set')
const sound_on = document.querySelector('.sound-on')
const sound_off = document.querySelector('.sound-off')
let timeTimerOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

function resetControls(){
    stop.classList.add('none')
    set.classList.remove('none')
    play.classList.remove('none')
    pause.classList.add('none')
}

function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTime(){
    updateDisplay(0, 0)
    clearTimeout(timeTimerOut)
}

function countdown(){
    timeTimerOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateDisplay(minutes, 0)

        if(minutes <= 0){

            resetControls()
            return
         }

        if(seconds <= 0){
            seconds = 60

            --minutes
            //  minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
            //  updateDisplay(String(minutes - 1), seconds)
        }

        updateDisplay(minutes, String(seconds - 1))
        

        countdown()
    
}, 1000)
}

play.addEventListener('click', () => {
    play.classList.add('none')
    pause.classList.remove('none')
    stop.classList.remove('none')
    set.classList.add('none')
    countdown()
})

pause.addEventListener('click', () => {
    pause.classList.add('none')
    play.classList.remove('none')
    clearTimeout(timeTimerOut)
})

stop.addEventListener('click', () => {
    stop.classList.add('none')
    set.classList.remove('none')
    play.classList.remove('none')
    pause.classList.add('none')
    resetControls()
    clearTimeout(timeTimerOut)
    resetTime()
    
})

set.addEventListener('click', () =>  {
    set.classList.add('none')
    stop.classList.remove('none')
    minutes = prompt('Digite o tempo desejado') || 0
    minutesDisplay.textContent = minutes
    updateDisplay(minutes, 0)
   
})

sound_on.addEventListener('click', () => {
    sound_on.classList.add('none')
    sound_off.classList.remove('none')
})

sound_off.addEventListener('click', () => {
    sound_off.classList.add('none')
    sound_on.classList.remove('none')
})

countdown()