const defaultAnswers = require('./../default/defaultAnswers.json');



exports.sendAnswer = (answersList, memorizedAnswers) => {
  const message = []
  let receivedCode_all = false


  if (answersList[0] === "%%all%%") {//temporario so para  retorno do 'que o bot consegue responder'
    answersList = []

    for (let i = 0; i < memorizedAnswers.length; i++) {
      const questionDesc = memorizedAnswers[i].desc
      if (i === 0) {
        //answersList.push(messages.all)
        if (memorizedAnswers[0].id === "sys") {
          answersList.push(memorizedAnswers[0].answers[2])
        } else {
          answersList.push(defaultAnswers[0].answers[2])
        }

      } else if ((i > 0) || (questionDesc.length > 0)) {
        if (questionDesc != "%%all%%") {
          answersList.push(questionDesc)
        }
      }
    }
    receivedCode_all = true //arrumar
  }

  for (let i = 0; i < answersList.length; i++) { //separa as respostas
    const answer = answersList[i]
    let delayValue = 1000 //  tempo inicial do delay

    if (receivedCode_all) { // seta fixo para retornar oq sabe responder
      if (i > 0) {
        delayValue = delayValue + (i * 333) //tempo acumulado do delay para %%all%%
      }
    } else {
      if (i > 0) {
        delayValue = delayValue + (i * 3000) //tempo acumulado do delay
      }
    }

    message.push(answer) //monta o message 

  }
  return message // retorna para o messageParser
}



