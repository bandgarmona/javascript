
console.log("1.Find the Greatest number amongst two number");
var greaterNumber =function(num1,num2){
    console.log("Two numbers are:",num1,num2);

var result=num1>=num2 ? `${num1} is greater`  :  `${num2} is greater`;
console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("----------------------------------------------------------");

console.log("2.Check Even or Odd numbers: 29,44,0,101");

var result=isEvenOrOddNum=function(num){ 
    var result=num%2==0 ? true:false;
     return result;
}
 var result = isEvenOrOddNum(29);
var res=(result==true) ? "29 is Even"  : "29 is odd";
    console.log(`${res}`);

    var result = isEvenOrOddNum(44);
    var res=(result==true) ? "44 is Even"  : "44 is odd";
        console.log(`${res}`);
    
        var result = isEvenOrOddNum(0);
    var res=(result==true) ? "0 is Even"  : "0 is odd";
        console.log(`${res}`);

        var result = isEvenOrOddNum(101);
    var res=(result==true) ? "101 is Even"  : "101 is odd";
        console.log(`${res}`);

console.log("----------------------------------------------------------------------");

console.log("3.Which word has even or odd length: 'JavaScript','Developer','Google'");
 var wordLength=function(word){
    var len=word.length;
    console.log(`Length of word ${word}:`,len);
    var result=len%2==0 ? "Even" : "Odd";
    return result;

 }
 console.log("Word:Javascript");
 var retunValue=wordLength("JavaCsript");
 console.log(`JavaScript has ${retunValue} Word`);

 console.log("******************************");

     console.log("Word:Developer");
var retunValue=wordLength("Developer");
 console.log(`Developer has ${retunValue}Word`);

 console.log("*********************************");
    
 console.log("Word:Google");
var retunValue=wordLength("Google");
 console.log(`Google has ${retunValue} Word`);
    