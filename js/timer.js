'use strict'

import { createResultWindow } from './result.js'

let timer = null;

function getGameTimeRemaining(gameTimeMinutes){
    let endtime = addMinutes(new Date(), gameTimeMinutes);
    return endtime;
}

function getTimeRemaining(endtime){
    let remainTime = Date.parse(endtime) - Date.parse(new Date());  
    let seconds = Math.floor( (remainTime/1000) % 60 );  
    let minutes = Math.floor( (remainTime/1000/60) % 60 );
    return {  
     'total': remainTime, 
     'minutes': minutes,  
     'seconds': seconds  
    };  
}

function showRemainTime(milliseconds) {
    let time = getTimeRemaining(milliseconds);
    showTimer(time);
    if (time.total == 0){
        resetTimer();
        alert("game over");
        let gameWindow = document.getElementsByClassName("game-window")[0];
        gameWindow.style.display = "none";

        let mainMenu = document.getElementsByClassName("main-menu")[0];
        let resultWindow = createResultWindow(3);
        mainMenu.append(resultWindow);
    }
}

export function initTimer(minutes){
    let gameTimeMillisec = getGameTimeRemaining(minutes);
    showRemainTime(gameTimeMillisec);
    timer = setInterval(showRemainTime, 1000, gameTimeMillisec);
}

function addMinutes(date, minutes) {
    let milliseconds = castMinutesToMilliseconds(minutes);
    return new Date(date.getTime() + milliseconds);
}

function castMinutesToMilliseconds(minutes){
    const millisecInMinute = 60000;
    return minutes * millisecInMinute;
}

function showTimer(time){
    let minutesElement = document.getElementsByClassName("time-minutes")[0];
    let secondsElement = document.getElementsByClassName("time-seconds")[0];

    minutesElement.textContent = time.minutes;
    secondsElement.textContent = time.seconds;
}

export function resetTimer(){
    clearInterval(timer);
}