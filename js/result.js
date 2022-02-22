'use strict'

export function createResultWindow(trueAnswersAmount){
    let resultWindow = createResultWindowBlock();

    let infoElement = createInfo();
    let resultElement = createResult(trueAnswersAmount);
    let retryButton = createRetryButton();
    let statisticsButton = createStatisticsButton();

    initResultWindow(resultWindow, infoElement, resultElement, retryButton, statisticsButton);
    return resultWindow;
}

function createResultWindowBlock(){
    const resultWindowClass = "result-window";
    let resultWindow = document.createElement("div");
    resultWindow.classList.add(resultWindowClass);

    return resultWindow;
}

function createInfo(){
    const infoClass = "result-info";
    const infoText = "Время истекло.";
    return createParagraphElement(infoClass, infoText);
}

function createResult(trueAnswersAmount){
    const resultClass = "result-text";
    const resultText = `Вы дали ${trueAnswersAmount} правильных ответа.`;
    return createParagraphElement(resultClass, resultText);
}

function createRetryButton(){
    const retryButtonClass = "result-retry";
    const retryButtonText = "Начать заново";
    return createButton(retryButtonClass, retryButtonText);
}

function createStatisticsButton(){
    const statisticsButtonClass = "result-statistics";
    const statisticsButtonText = "Посмотреть результаты";
    return createButton(statisticsButtonClass, statisticsButtonText);
}

function createButton(className, text){
    const buttonClass = "result-button";
    let button = document.createElement("button");
    button.classList.add(className);
    button.classList.add(buttonClass);
    button.textContent = text;

    return button;
}

function createParagraphElement(className, text){
    let paragraphElement = document.createElement("p");
    paragraphElement.classList.add(className);
    paragraphElement.textContent = text;

    return paragraphElement;
}

function initResultWindow(resultWindow, ...childrensElements){
    resultWindow.append(...childrensElements);
}