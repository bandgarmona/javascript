


var myName="Monali";   //variable declaration & initialization

var myName="Monali Bandgar";  //Re-Declaration

myName="Monali Vasant Bandgar";   // update
console.log(`${myName}`);

let collegeName="SMS";

collegeName="SMS Sangola";  //re-declaration

console.log(`${collegeName}`);

const PI=3.14;
// PI=3.1442;  //update not allowed
console.log(`${PI}`);

//scope ==accessibility
let age=25;
if (age==25) {
    var city="Pune";
   // console.log(`City :${city}`);
}
console.log(`City :${city}`);

function show(){
    var country="India";
}
