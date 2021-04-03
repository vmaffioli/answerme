# simple-answer-bot
A package to allow simple javascript bots answers questions.

---

## Readme

Simple-answer-bot was born from my <a href="https://viniciusmaffioli.herokuapp.com"> WebProfile Interview ChatBot</a>

The main objective of this package is receive a question as String, compare with the bot memorized answers and return the answer as String.

I build this script using ES6 Modules, so its is necessary to runs on a .mjs or add type='module' in your package.json

---

### Usage

```
npm install simple-answer-bot
```

##### In code:

``` javascript
import answer from 'simple-answer-bot';

const question = "Your question as a String"
const myAnswers = "Your custom answers js object"

const return = answer(question, myAnswers); // <- Returns an array of strings
```

##### Example:

``` javascript
import answer from 'simple-answer-bot';
import customAnswers from './customAnswers.js';

const return = answer("o que você sabe responder?", customAnswers); 
```

### Custom Answer Object

To storage your answers you must create an object in a .js file (by now lets call it customAnswers.js)


##### Custom Answer Object Preset
 
##### In code:
```javascript

const customAnswers = [
    { // the first pos of this array must have an id named "sys" to load configs
        "id": "sys", 
        "answers": [  // here you can set default system answers
            "resposta não encontrada", //pos[0] not found msg
            "estou em duvida entre:", //pos[1] returns more than one answer msg
            "minhas respostas:" //pos[2] msg before  bot list every answers him knows when asked
        ]

    },
    {
        "id": "", // a unique string reference for the answer
        "desc": "", // a string to describes the answer's question
        "keys": [  // keys useds to compare input and memorized itens
            [
                "",
                "",
                ""
            ], //use how many keys you needs
            [
                "",
                "",
                ""
            ]
        ],
        "questions": [ //presets useds for compare on draw events between answers
            "questionPreset001", //use how many questions presets you want
            "questionPreset002"

        ],
        "answers": [ // will be our return, answers to be printed one by one.
            "answer001",  //use how many answers you want
            "answer002"
        ]
    }
    
export default customAnswers;


```

##### In code:

```javascript
const defaultAnswers = [
    { 
        "id": "sys",
        "answers": [ 
            "nao conheço essa resposta =(",
            "estou em duvida entre:",
            "eu sei responder as seguintes perguntas:"
        ]

    },
    {
        "id": "minhaIdade",
        "desc": "Sobre minha idade",
        "keys": [
            [
                "quantos",
                "voce",
                "qual",
                "tem",
            ],
            [
                "anos",
                "idade"
            ]
        ],
        "questions": [
            "quantos anos voce tem?",
            "qual sua idade?"
        ],
        "answers": [
            "Minha idade é XX."
        ]
    },
```

