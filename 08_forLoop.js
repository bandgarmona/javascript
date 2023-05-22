
// table of 5
// for (let index = 5; index <= 50; index=index+5) {     //index=index+1
//   console.log(index);    
// }


// //WAP to get 100 to 80 in reverse order by decrementing
// for(let index=100;index>=80;index--){ console.log(index);
//}


// // //table to get reverse of 19
// for (index=190;index>=19;index=index-19){
//    console.log(index);
// }

// // WAP to get the table of 8
// for (let index=8;index<=80;index=index+8){
//   console.log(index);
// }

//JavaScript-->J a v a S c r i p t
var str = "JavaScript";
var reverseString="";

for(let index=0;index<str.length;index++){
 var char = str.charAt(index);
 reverseString=reverseString.concat(char);

}
console.log(reverseString);


console.log("----------------------------------");
//WAP to reverse the string -->JavaScript-->tpircSavaJ
//JavaScript-->
// initialization=9
// condition = index>=0
//update expression= index--
var str="JavaScript";
var reverseString="";
for (let index = 9; index >=0; index--) {  
  var char=str.charAt(index);
  reverseString=reverseString.concat(char);
}
console.log(reverseString);


function reverseWord(word){
  var reverseString="";
  var wordLength=word.length-1;
for (let index = wordLength; index >=0; index--) {  
  var char=word.charAt(index);
  reverseString=reverseString.concat(char);
}
console.log(reverseString);
}
reverseWord("javascript");
reverseWord("Google Chrome");
reverseWord("Developer");

//var string ="Hello how are you doing";
//output - DoinG YoU ArE HoW HellO
