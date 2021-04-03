import MessageParser from './MessageParser.js';
import defaultAnswers from './Core/defaultAnswers.js';

export default function simpleAnswerBot(userInput, memorizedAnswersFromUser){

    if((memorizedAnswersFromUser === undefined)) {
        return MessageParser(userInput,defaultAnswers);
    } else if(memorizedAnswersFromUser.length === 0) {
        return MessageParser(userInput,defaultAnswers);
    } else {
        return MessageParser(userInput,memorizedAnswersFromUser);
    }

};


