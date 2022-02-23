'use strict'

export function getQuestions(){
    return new Promise((resolve) => {
        let url = new URL("https://localhost:44349/Question");
        fetch(url, {
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
    });
}