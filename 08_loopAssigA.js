
console.log("1.Count the total number vowels including samll and vowel --> string:'I am very good IT Developer.'");

var word="I am very good IT Developer";
// a e i o u == A E I O U
var count=0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
        console.log("Vowel is:",char);
        count++;
    }
}
console.log("count of total vowels:",count);

console.log("--------------------------------------------------------");

console.log("2.Write a function to get the sum of cube of numbers from 1 to 5.");
 

var sum=0;
for (let index = 1; index <=5; index++) {
    cube=index*index*index;
    sum=sum+cube;
    console.log(`cube of ${index}:${cube}`);
    
}
console.log(`Sum of cube of numbers 1 to 5:${sum}`);

console.log("--------------------------------------------------------");

console.log("3.Odd position character from given string");


function oddPositionedChars(string){
    var str="";
   for (let index = 0; index <= string.length; index++) {
    var char = string.charAt(index);

    if (index%2!==0 && char!=" " ) {
        str=str+char;

    }
   }
   console.log(`String: ${string}`);
console.log( ` Odd position character of string are: ${str}`);}
oddPositionedChars("Hard work always pays back");
console.log("--------------------------------------------------------");
oddPositionedChars("Soon I will be Angular IT champ");