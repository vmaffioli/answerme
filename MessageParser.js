
import analyzeInput from './core/brain.js';
import ActionProvider from './ActionProvider.js';

// MessageParser starter code
const actionProvider = new ActionProvider()

async function MessageParse(message, memorizedAnswers) {
  const msg = message.replace("?", "").toLowerCase();

   return actionProvider.sendAnswer(analyzeInput.reply(msg, memorizedAnswers), memorizedAnswers)

};



export default MessageParse;
