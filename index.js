const parse = require('./MessageParser.js');
const defaultAnswers = require('./Core/defaultAnswers.json');

exports.simpleAnswerBot = function(userInput, memorizedAnswersFromUser){
    let result;
    
    if((memorizedAnswersFromUser === undefined)) {
        result = parse.MessageParser(userInput,defaultAnswers);
    } else if(memorizedAnswersFromUser.length === 0) {
        result = parse.MessageParser(userInput,defaultAnswers);
    } else {
        result = parse.MessageParser(userInput,memorizedAnswersFromUser);
    }

    return result

};


console.log(this.simpleAnswerBot("onde vc mora?"))