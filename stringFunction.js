
function stringHandsOn(){
    console.log("1.Print the String as it on Console");
    var givenString="   Hey you are doing good, keep it up   ";
    console.log("string:",givenString);

    console.log("--------------------------------------------------");


     console.log("2.Calculate Length of the String");
    var givenStringLength=givenString.length;
    console.log("Length of String:",givenStringLength);

    console.log("------------------------------------------------------");
    
    console.log("3.Remove the leading and trailing extra spaces and log string on consolewith its length");
    var trimmedGivenString=givenString.trim();
    console.log("After Trimmed String:",trimmedGivenString,trimmedGivenString.length);

    var length=trimmedGivenString.length;
    console.log("After trimmed string length is:",length);
    console.log("-----------------------------------------------------------");
    console.log("4.print the total number extra spaces count that is removed in step 3");
     console.log("Trimmed total Spaces:",givenStringLength-length);

     console.log("-----------------------------------------------------");

     console.log("5.print the First and Last Character after trim ");
    var charAtZeroIndex=trimmedGivenString.charAt(0);
    console.log("First character of string:",charAtZeroIndex);

    var charAtLastIndex=trimmedGivenString.charAt(trimmedGivenString.length-1);
    console.log("Last character of String:",charAtLastIndex);

    console.log("---------------------------------------------------------------");
     
    console.log("6.print the Count of total words available in the string after step 3");
    var resultSplit=trimmedGivenString.split(" ");
    console.log("Total Number of Words:",resultSplit.length);

    console.log("-------------------------------------------------------------");

    console.log("7.Print the index of word Good from the given String");

    var text=trimmedGivenString.indexOf("good");
    console.log("index of word good is:",text);

    console.log("--------------------------------------------------------");

    console.log("8.Print the substring starting from index 22, using substring() and slice()");
    var subStringResult=trimmedGivenString.substring(22);
    console.log("substring is:",subStringResult);

    var sliceResult=trimmedGivenString.slice(22);
    console.log("slice is:",sliceResult);

    console.log("----------------------------------------------------------------");

    console.log("9.Check , is String ends with word up after step 3");
    var stringEndsWith=trimmedGivenString.endsWith("up");
    console.log("string ends with up:",stringEndsWith);

    console.log("--------------------------------------------------------------------");

    console.log("10.Check, is String Starts With Word Hey After trimming");
    var stringStartsWith=trimmedGivenString.startsWith("Hey");
    console.log("string starts with Hey:",stringStartsWith);




    

}
stringHandsOn();




