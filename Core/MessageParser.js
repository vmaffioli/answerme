const analyzeInput = require('./brain.js');
const actionProvider = require('./actionProvider.js');

exports.message = function(msg, memorizedAnswers, sameWords) {

  return actionProvider.sendAnswer(analyzeInput.reply(msg, memorizedAnswers, sameWords), memorizedAnswers)

};



