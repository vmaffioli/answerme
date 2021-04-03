# simple-answer-bot
A package to allow simple javascript bots answers questions.

---

## Readme

Simple-answer-bot was born from my <a href="https://viniciusmaffioli.herokuapp.com"> WebProfile Interview ChatBot</a>

The main objective of this package is receive a question as a String, compare with  memorized answers and return the answer as String.

---

## Usage:
Install the NPM package:
```
npm install simple-answer-bot
```
---
#### Custom Answers:
You'll need a .json file to save your custom answers:
This .json must start with an object { id:"sys", "answers": [] } and his "answers" can receive three Strings to customize default system answers:
(to maintain default values just keep the a empty list in "answers")
```javascript
{
    "id": "sys", //Prefix used to allow the scripts read this file
    "answers": [
    // 1° 'Answer not found' message 
        "answer not found", 
    // 2° 'In doubt between 2 or more items' message followed by an output list
        "to many answers, check recognized questions:",
    // 3° 'Known questions message' followed by an output list
        "my answers:"
    ]
}
```
 
#### IMPORTANT:
- This .json file need to start with the object { id:"sys", "answers": [] }

- If the .json imported don't starts with the object { id:"sys", "answers": [] }, the scripts will use a default json with default answers


---
 
#### Custom Words Replacements:
To help the script better distinguish the words entered by the user, you may replace words with the same meaning using a second .json file, containg a list with this three itens below:

```javascript
[ 
    "sys", //Prefix used to allow the scripts read this file
    [ ], // List containing words to be replaced
    [ ] // List containg words to replace
]
```
- #### .json structure:
```javascript

[ 
    [
    "id": "sys", 
    "answers": []
    ],
    []
        "id": "", // a unique string reference for the answer
        "desc": "", // a string to describes the answer's question
        "keys": [  // keys useds to compare input and memorized itens
            [
                "your" // you can add any keys on each keys lists
            ], 
            [
                "name" // you can add any keys on each keys lists
            ]
        ],
        "questions": [ //presets used for compare when draw events between answers happens
            "questionPreset001", //use how many questions presets you want
            "questionPreset002"
        ],
        "answers": [ // will be our return, answers to be printed one by one.
            "answer001",  //split answer msg or return a list with one position
            "answer002"
        ]
    ]
]
```
#### IMPORTANT:
- This .json file need to be a list with three itens. Example: [ "sys", [], [] ]

- The items on the first list will be replaced by the itens on second list, be sure to keep the positions align. Example: [ "sys", ["lightblue", "lightgray"], ["blue", "gray"] ]
 ~input: ["lightblue", "lightgray"]
~output: ["blue", "gray"]

---
### Code Examples:

- #### ES6 Modules
 
 
``` javascript
import simpleAnswer from 'simple-answer-bot';
import answers from 'answersjson'; 
import words from 'words.json';  //optional

console.log(simpleAnswer.get("Question here", answers, words);
//Returns an array of strings min:1/max:any
```

- #### Vanilla
```javascript
const simpleAnswer = require('simple-answer-bot');
const answers = "answers.json";
const words = "words.json";  //optional

console.log(simpleAnswer.get("Question here", answers, words); 
//Returns an array of strings min:1/max:any
```

---

.
.
.
.
New updates coming soon!
