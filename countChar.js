



function countChar(string){
    console.log("String is-->",string);
let ch ='a';
let count=0;
for(let i=0;i<string.length;i++){
    if(string.charAt(i)==ch){
        count++;
    }
}
console.log(`Total count of 'a' in String is: ${count}`);
}
countChar("I AM Learning JavaScript,The Language of internet")
console.log("------------------------------------------------");
countChar("My favourite movie is LAggAn");
