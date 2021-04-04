# get-answer
A package to allow simple javascript bots answer questions.

---

## Readme

get-answer was born from my <a href="https://viniciusmaffioli.herokuapp.com"> WebProfile Interview ChatBot</a>

The main objective of this package is receive a question as a String, compare with  memorized answer and return the answer as String.

---

## Usage:
Install the NPM package:
```
npm install get-answer
```
---
#### Custom answer:
You'll need a .json file to save your custom answer:
This .json must start with an object { id:"sys", "answer": [] } and his "answer" can receive three Strings to customize default system answer:
(to maintain default values just keep the a empty list in "answer")
```javascript
{
    "id": "sys", //Prefix used to allow the scripts read this file
    "answer": [
    // 1° 'Answer not found' message 
        "answer not found", 
    // 2° 'In doubt between 2 or more items' message followed by an output list
        "to many answer, check recognized questions:",
    // 3° 'Known questions message' followed by an output list
        "my answer:"
    ]
}
```
 
#### IMPORTANT:
- This .json file need to start with the object { id:"sys", "answer": [] }

- If the .json imported don't starts with the object { id:"sys", "answer": [] }, the scripts will use a default json with default answer


---
 
#### Custom Words Replacements:
To help the script better distinguish the words entered by the user, you may replace words with the same meaning using a second .json file, containing a list with this three items below:

```javascript
[ 
    "sys", //Prefix used to allow the scripts read this file
    [ ], // List containing words to be replaced
    [ ] // List containing words to replace
]
```
- #### .json structure:
```javascript

[ 
    [
    "id": "sys", 
    "answer": []
    ],
    []
        "id": "", // a unique string reference for the answer
        "desc": "", // a string to describes the answer's question
        "keys": [  // keys useds to compare input and memorized items
            [
                "your" // you can add any keys on each keys lists
            ], 
            [
                "name" // you can add any keys on each keys lists
            ]
        ],
        "questions": [ //presets used for compare when draw events between answer happens
            "questionPreset001", //use how many questions presets you want
            "questionPreset002"
        ],
        "answer": [ // will be our return, answer to be printed one by one.
            "answer001",  //split answer msg or return a list with one position
            "answer002"
        ]
    ]
]
```
#### IMPORTANT:
- This .json file need to be a list with three items. Example: [ "sys", [], [] ]

- The items on the first list will be replaced by the items on second list, be sure to keep the positions align. Example:  [ "sys", ["lightblue", "lightgray"], ["blue", "gray"] ] 
 ~input: ["lightblue", "lightgray"]
~output: ["blue", "gray"]

---
### Code Examples:

- #### ES6 Modules
 
 
``` javascript
import getanswer from 'get-answer';
import answer from 'answerjson'; 
import words from 'words.json';  //optional

console.log(getanswer.get("Question here", answer, words);
//Returns an array of strings min:1/max:any
```

- #### Vanilla
```javascript
const getanswer = require('get-answer');
const answer = "answer.json";
const words = "words.json";  //optional

console.log(getanswer.get("Question here", answer, words); 
//Returns an array of strings min:1/max:any
```

---

.
.
.
.
New updates coming soon!
