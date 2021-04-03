
const analyzeInput = require('./core/brain.js');
const actionProvider = require('./ActionProvider.js');

// MessageParser starter code

exports.MessageParser = function(message, memorizedAnswers) {
  const msg = message.replace("?", "").toLowerCase();

  return actionProvider.sendAnswer(analyzeInput.reply(msg, memorizedAnswers), memorizedAnswers)

};



