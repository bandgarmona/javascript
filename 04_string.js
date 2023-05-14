




var greet="Good Morning";
var greetLength=greet.length;
console.log("Total Number of character in given string is:",greetLength);

var charAtZeroIndex=greet.charAt(0);
console.log("character at zero Index:",charAtZeroIndex);

var charAtLastIndex=greet.charAt(greet.length-1);
console.log("character at last index:",charAtLastIndex);

var indexOfM=greet.indexOf("M");
console.log("Index of M is:",indexOfM);

var replaceValue=greet.replace("Morning","Afternoon");
console.log("After replace:", replaceValue);

var firstName="   Monali  ";
var trimmedFirstName=firstName.trim();
console.log("After Trim FirstName is:",trimmedFirstName,trimmedFirstName.length);

var lastName="   Bandgar   ";
var lastNameLength=lastName.length;
console.log("Before trim length is:",lastNameLength);

var fullName="Monali Bandgar";
var fullLength=fullName.length;
console.log("Total Number of character in given string is:",fullLength);

var greet="Good Morning";
var includeResult=greet.includes("ing");
console.log("Is ing string available inside:",includeResult);

var searchResult=greet.search("Mor");
console.log("search result:",searchResult);

var sliceResult=greet.slice(4,6);
console.log("slice result:",sliceResult);

var subStringResult=greet.substring(4,6);
console.log("substring result is:",subStringResult);

var greet="Good Morning mate, How are you";
var resultSplit=greet.split(" ");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);

var resultSplit=greet.split(",");
console.log(resultSplit);
console.log("Total number of parts:",resultSplit.length);

var resultSplit=greet.split(" ");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);

var resultSplit=greet.split("");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);



