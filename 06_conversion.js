console.log(`${'3'+2}`);
console.log(`${'3' + undefined}`);

console.log(`${ '6' - true}`);
console.log(`${ '7' - false}`);

console.log(`${'4' - '2'}`);

console.log(`${false - undefined}`);

console.log("================ Explicit Conversion ==============");
var num2="30";//string to number==>+num2
var num1=true;//boolean to number
var result=Number(num1);
console.log(`Boolean to number: ${result} and it's type: ${typeof result} `);

var num2="38";// string to number
var result=Number(num2);
console.log(`Boolean to number: ${result} and it's type: ${typeof result} `);


var num3=410;//conversion number to boolean
var result=Boolean(num3);
console.log(`number to boolean: ${result} and it's typ:e ${typeof result}`);

var num3=0;//conversion number to boolean
var result=Boolean(num3);
console.log(`number to boolean: ${result} and it's type: ${typeof result}`);

var num4="Bill Gates";//conversion number to boolean
var result=Boolean(num4);
console.log(`number to boolean: ${result} and it's type: ${typeof result}`);


console.log("============ Any type to String Explicit Conversion ============");

var num5=100;
var result=String(num5);
console.log(`number to string: ${result} , and it's type ${typeof result}`);

var num6=true;
var result=String(num6);
console.log(`number to string: ${result} , and it's type ${typeof result}`);