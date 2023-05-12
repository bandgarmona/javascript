
function stringHandsOn(){
    var givenString="   Hey you are doing good, keep it up   ";
    console.log("string:",givenString);

    var givenStringLength=givenString.length;
    console.log("Length of String:",givenStringLength);

    var trimmedGivenString=givenString.trim();
    console.log("After Trimmed String:",trimmedGivenString);

    var length=trimmedGivenString.length;
    console.log("After trimmed string length is:",length);

   
    var charAtZeroIndex=trimmedGivenString.charAt(0);
    console.log("First character of string:",charAtZeroIndex);

    var charAtLastIndex=trimmedGivenString.charAt(trimmedGivenString.length-1);
    console.log("Last character of String:",charAtLastIndex);
    

    

}
stringHandsOn();





