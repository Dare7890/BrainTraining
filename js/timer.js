'use strict'

export function getGameTimeRemaining(gameTimeMinutes){
    let endtime = addMinutes(new Date(), gameTimeMinutes);
    return endtime;
}

export function getTimeRemaining(endtime){
    let remainTime = Date.parse(endtime) - Date.parse(new Date());  
    let seconds = Math.floor( (remainTime/1000) % 60 );  
    let minutes = Math.floor( (remainTime/1000/60) % 60 );
    return {  
     'total': remainTime, 
     'minutes': minutes,  
     'seconds': seconds  
    };  
  }

function addMinutes(date, minutes) {
    let milliseconds = castMinutesToMilliseconds(minutes);
    return new Date(date.getTime() + milliseconds);
}

function castMinutesToMilliseconds(minutes){
    const millisecInMinute = 60000;
    return minutes * millisecInMinute;
}

export function showTimer(time){
    let minutesElement = document.getElementsByClassName("time-minutes")[0];
    let secondsElement = document.getElementsByClassName("time-seconds")[0];

    minutesElement.textContent = time.minutes;
    secondsElement.textContent = time.seconds;
}