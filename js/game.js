'use strict'

export class Game{
    constructor(questions) {
        this.questions = questions;

        if (this.questions != null && this.questions.length > 0){
            const firtsQuestionIndex = 0;
            this.currentQuestion = this.questions[firtsQuestionIndex];
            this.numbers = [this.currentQuestion.number];
        }
    }

    start(){
        this.#showQuestion(this.currentQuestion);
    }

    changeQuestion(){
        if (this.questions.length !== this.numbers.length){
            let newQuestionNumber = this.currentQuestion.number;
            let question = null;
            while (this.numbers.includes(newQuestionNumber)) {
                const newQuestionIndex = Math.floor(Math.random() * this.questions.length);
                question = this.questions[newQuestionIndex];
                newQuestionNumber = question.number;
            }

            this.currentQuestion = question;
            this.numbers.push(this.currentQuestion.number);
            
            this.#showQuestion(this.currentQuestion);
        }
        else {
            showInfoAboutEndQuestions();
        }
    }

    #showQuestion(question){
        let questionNumber = document.getElementsByClassName("question-number")[0];
        questionNumber.textContent = `Вопрос №${this.numbers.length}`;
        
        let questionText = document.getElementsByClassName("question-text")[0];
        questionText.textContent = question.expression;
    }
}

function showInfoAboutEndQuestions(){
    alert("Вопросы закончились!");
}