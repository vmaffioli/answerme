# jschatbot-jschatbot-answer-me
A package to allow simple javascript bots answers questions.

---

## Readme

jschatbot-jschatbot-answer-me born from my <a href="https://viniciusmaffioli.herokuapp.com"> WebProfile Interview ChatBot</a>

The main objective of this package is receive a question as a String, compare with  memorized answers and return the answer as String.

Firt the script will search for two memorized keys in user's input, if if he finds more than one a second stage begins. The scripts will compare  words of user input with words of memorized questions and then choose one.

---

## Usage:
Install the NPM package:
```
npm install jschatbot-answer-me
```

#### In code:

```javascript
import answer from "jschatbot-answer-me"
import myAnswers from "myAnswers.json"
import synonyms from "synonyms.json"

console.log(answer.me("your question here"), myAnswers, synonyms)

```

---

#### Custom Answers:
You'll need a .json file to save your custom answers:
This .json must start with an object { id:"sys", "answers": [] } and his "answers" can receive three Strings to customize the default system answers:
(to maintain default values just keep an empty list in "answers")

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
 
#### Synonyms:
To help the script better distinguish the words entered by the user, you may replace words with the same meaning using a second and optional .json file. If you choose to not use this parameter just skip it on answer.me() function, but the script will not  recognize "u" as "you" for example.

```javascript
[ 
    "sys", //Prefix used to allow the scripts read this file
    [ "default word", ["synonym1","synonym2", "synonym3..."],
    [ "default word", ["synonym1","synonym2", "synonym3..."]  ], // List containing words to be replaced
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
            "answer001",  //split answer msg for multiple msgs or return a list with one string
            "answer002"
        ]
    ]
]
```
#### IMPORTANT:
- This .json file need to be a list with three itens. Example: [ "sys", ["", [""] ] ]

- The items on the first list will be replaced by the itens on second list, be sure to keep the positions align. Example: 

```json
[ 
    "sys", // prefix to identify and read this file.
    [
        "gray",  //this will be our default word
        ["lightgray, darkgray" ]  //and here will be the synonyms, who will be replaced
    ],
    [
        "blue", 
        ["lightblue, darkblue" ] 
    ]  
] 
``` 
~output: ["gray", "blue"]

---
### Code Examples:



- #### ES6 Modules
 
 
``` javascript
import answer from "jschatbot-answer-me"
import myAnswers from "myAnswers.json"
import synonyms from "synonyms.json"  //optional

console.log(answer.me("Question here", myAnswers, synonyms);
//Returns an array of strings min:1/max:any
```

- #### Vanilla
```javascript
const answer = require('jschatbot-answer-me');
const myAnswers = "myAnswers.json";
const synonyms = "synonym.json";  //optional

console.log(answer.me("Question here", myAnswers, synonyms); 
//Returns an array of strings min:1/max:any
```
#### IMPORTANT:
- Even if a message containing a single sentence is expected, the return will always bring a list.
---

#### Default Answers:

The script starts with three answers in memory:
 - "Questions I know how to answer" - Just ask what he can answer
 - "Help" - send sys000 help000
 - "About" - send sys000 about000

.
.
Thats it!
This is the first version of this script, if you have founded an issue or have something to say about performance or hints please contact me!
.
.
.
.
New updates coming soon!
