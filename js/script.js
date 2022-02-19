'use strict'

import { getQuestions } from './questionRetriever.js';
import { Game } from './game.js'

let trueAnswerAmount = 0;
let questions = getQuestions();
let game = null;

function start(){
    reset();

    game = new Game(questions)
    game.start();
}

function initListeners(){
    initStartGame();

    let answerElement = document.getElementById("answer");
    answerElement.addEventListener("keydown", processAnswer);
    answerElement.addEventListener("keydown", changeQuestion);
    answerElement.addEventListener("keydown", resetFieldAfterAsnwer);
}

function reset(){
    resetAnswerField();
    resetCurrentResult();
}

function resetFieldAfterAsnwer(event){
    if (event.key !== 'Enter')
        return;

    resetAnswerField();
}
    
function resetAnswerField(){
    let answerElement = document.getElementById("answer");
    answerElement.hidden = false;
    answerElement.value = " ";
}

function resetCurrentResult(){
    let resultElement = document.getElementsByClassName("current-result")[0];
    resultElement.hidden = false;
    
    let resultValueElement = document.getElementsByClassName("true-answer-amount")[0];
    resultValueElement.hidden = false;
    resultValueElement.textContent = 0;
}

function changeQuestion(event){
    if (event.key !== 'Enter')
        return;

    game.changeQuestion();
}

function initStartGame(){
    let startButtonElement = document.getElementById("nav-start");
    startButtonElement.addEventListener("click", start);
}

function processAnswer(event){
    if (event.key !== 'Enter')
        return;

    let inputElement = event.target;
    let userAnswer = inputElement.value
    if (checkResult(Number(userAnswer), game.currentQuestion.result)){
        let resultElement = document.getElementsByClassName("true-answer-amount")[0];
        trueAnswerAmount++;
        resultElement.textContent = trueAnswerAmount;
    }
}

function checkResult(userAnswer, trueAnswer){
    return userAnswer === trueAnswer;
}

initListeners();