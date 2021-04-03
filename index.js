const parse = require('./core/MessageParser.js');
const defaultSameWords = require("./default/sameWords.json");
const defaultAnswers = require('./default/defaultAnswers.json');


exports.get = function (userInput, memorizedAnswersFromUser, sameWords) {
    let result;


    if (sameWords === undefined) {
        sameWords = defaultSameWords
    } else {
        if (Array.isArray(sameWords)) {
            if(sameWords[0] ==="sys"){
                if (sameWords.length === 2) {
                    sameWords = defaultSameWords
                } 
            } else {
                sameWords = defaultSameWords
            }
        } else {
            sameWords = defaultSameWords
        }
    }
    let sum = []

    if ((memorizedAnswersFromUser === undefined) || (memorizedAnswersFromUser.length === 0)) {
        result = parse.message(userInput, defaultAnswers, sameWords);
    } else {
        if (memorizedAnswersFromUser[0].id === 'sys') {
            let sysbuild = {"id":"sys", "answers": []}
            for(let i=0;i<=memorizedAnswersFromUser.length;i++){
                if(memorizedAnswersFromUser[0].answers[i] === ""){
                    sysbuild.answers[i] = defaultAnswers[0].answers[i]
                } else {
                    sysbuild.answers[i] = memorizedAnswersFromUser[0].answers[i]
                }
            }
            sum.push(sysbuild)
            sum.push(defaultAnswers[1])
            for(let i=1;i<memorizedAnswersFromUser.length;i++){
                sum.push(memorizedAnswersFromUser[i])
            }
            result = parse.message(userInput, sum, sameWords); // sum is answers from user + default answers
        } else {
            result = parse.message(userInput, defaultAnswers, sameWords);
        }
    }

    return result

};


