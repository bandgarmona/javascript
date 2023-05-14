


console.log("1.Write a Function Expression to get Square of the number Ex-->5,6,25,100");
var square=function(){
    var a=5*5;
    console.log("Square of number 5 is:",a);

    var b=6*6;
    console.log("Square of number 6 is:",b)
    var c=25*25;
    console.log("Square of number 25 is:",c)
    var d=100*100;
    console.log("Square of number 100 is:",d)
}
square();

    

console.log("-----------------------------------------------------------");

console.log("2.Check and log type of function (Hint-->typeOf variableName)");
console.log("Type of variable is:",typeof square);
    
console.log("----------------------------------------------------------------");


console.log("3.Write a FE to get the Area of rectangle plot[length=499 and width=917] ");
var rectangle=function(length,width){
    var result=length*width;
    return `Area of Rectangle is:${result}`;
}
var result=rectangle(499,917);
console.log(result);

console.log("-----------------------------------------------------------------");

console.log("4.Write a FE with two args and should swap the passed values and log on console before and after swap value");
console.log("A.Invoke or Call the function with Values Virat and Anushka");
var swapValues=function swapValue(arg1,arg2){
    console.log("Before Swap:","arg1:",arg1,"arg2:",arg2);
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After Swap::","arg1:",arg1,"arg2:",arg2);
};
swapValues("Virat","Anushka");
console.log("********************************************");
console.log("B.Invoke or Call the function with Values 1000 and 2000");
swapValues(1000,2000);


console.log("-----------------------------------------------------------------");
console.log("5.Write a FE which can perform the below steps for string 'JS the most Popular language of Internet'");

var stringHandsOn=function(){
    var string="JS the most popular Language of Internet";
    console.log("A.Find the total character available in the string");

    var stringLength=string.length;
     console.log("Total Character in string:",stringLength);

     console.log("************************************************");

    console.log("B.Find the chracter at index 6");
    var charAtSixIndex=string.charAt(6);
    console.log("character at index 6:",charAtSixIndex);

    console.log("**************************************************");

    console.log("C.Find the Character at index 11");
    var charAtElevenIndex=string.charAt(11);
    console.log("character at index 11:",charAtElevenIndex);

    console.log("************************************************");

    console.log("D.Find the last Character from the given String");
    var charAtLastIndex=string.charAt(string.length-1);
    console.log("Last character is:",charAtLastIndex);

    console.log("**************************************************");

    console.log("E.Find the very first character from the Given string");
    var charAtZeroIndex=string.charAt(0);
    console.log("character at first is:",charAtZeroIndex);

    console.log("************************************************");

    console.log("F.Find the total number words of the given string and the calculate the square of it and log it");
    var resultSplit=string.split(" ");
     console.log("Total number of words:",resultSplit.length);

     var z=7*7;
     console.log("Square of 7 is:",z);





}
stringHandsOn();