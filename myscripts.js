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

// 1. test function toTitleCase
var testPhrase = "the sky is pretty today";
toTitleCase(testPhrase);

// 2. Write a JavaScript program to find the largest of three given integers.
function findLargest(a, b, c) {
    var largest = Math.max(a, b, c);
    console.log("EX2: " + a + ", " + b + ", " + c + " => " + largest);
}

// 2. test function findLargest
findLargest(300, 2, 50);

// 3. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
function moveLastThreeChars(str) {
    var result = str.slice(str.length - 3) + str.slice(0, str.length - 3);
    console.log("EX3: " + str + " => " + result);
}

// 3. test function moveLastThreeChars
moveLastThreeChars("butterfly");

// Write a JavaScript program to find the types of a given angle.
// Types of angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

function findAngleType(angle) {
    var result = "";
    if (angle < 90) {
        result = "Acute angle";
    } else if (angle == 90) {
        result = "Right angle";
    } else if (angle < 180) {
        result = "Obtuse angle";
    } else if (angle == 180) {
        result = "Straight angle";
    } else {
        result = "Invalid angle";
    }
    console.log("EX4: " + angle + " => " + result);
}

// 4. test function findAngleType
findAngleType(45);
findAngleType(90);
findAngleType(135);
findAngleType(180);
findAngleType(200);






