'use strict'

import { getQuestions } from './questionRetriever.js';

function start(){
    let questions = getQuestions();
    showQuestion(questions[0]);
}

function showQuestion(question){
    let questionElement = document.getElementsByClassName("question")[0];
    let questionNumber = document.createElement("p");
    questionNumber.classList.add("question-number");
    questionNumber.textContent = `Вопрос №${question.number}`;
    
    let questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.textContent = question.expression;

    questionElement.append(questionNumber);
    questionElement.append(questionText);
}

start();