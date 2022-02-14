'use strict'

export function getQuestions(){
    let question1 = {
        "number" : 1,
        "expression": "2 + 2",
        "result": 4
    };

    let question2 = {
        "number" : 2,
        "expression": "1 + 5",
        "result": 6
    };

    let question3 = {
        "number" : 3,
        "expression": "8 * 3",
        "result": 24
    };

    let question4 = {
        "number" : 4,
        "expression": "6 / 2",
        "result": 3
    };

    let question5 = {
        "number" : 5,
        "expression": "10 - 8",
        "result": 2
    };

    return [question1, question2, question3, question4, question5];
}