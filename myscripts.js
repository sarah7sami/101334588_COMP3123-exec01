// 1. Write a JavaScript program to capitalize the first letter of each word of a given string in javascript
function toTitleCase(str) {
    str = str.toLowerCase();
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // first char of word is capitalized and rest of string is just attached as it was.
    }
    var result = words.join(" ");
    console.log("EX1: " + str + " => " + result);
}

var testPhrase = "the sky is pretty today";
toTitleCase(testPhrase);

// 2. Write a JavaScript program to find the largest of three given integers.


