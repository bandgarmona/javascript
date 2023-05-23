


var arrayRollNumber=[45,87,56,90,65];
console.log(`Type of Array: ${typeof arrayRollNumber}`);

let lengthArray=arrayRollNumber.length;
console.log(`Length of array is: ${lengthArray}`);

//Accessing array element
const zerothIndexValue=arrayRollNumber[0];
console.log (`Zeroth index value: ${zerothIndexValue}`);

//acess the array element 90
const thirdIndexValue=arrayRollNumber[3];
console.log(`Third index Value:${thirdIndexValue}`);

// accessing Last element
let arrayLength=arrayRollNumber.length;
const lastElement=arrayRollNumber[arrayLength-1];
console.log(`Last element:${lastElement}`);

//adding element in the last position
arrayRollNumber.push(80);
console.log(arrayRollNumber);

//adding element in the first position
arrayRollNumber.unshift(80);
console.log(arrayRollNumber);

//Removing last index
arrayRollNumber.pop();
console.log(arrayRollNumber);

////Removing first index
arrayRollNumber.shift();
console.log(arrayRollNumber);

// arrayRollNumber.push(89,87,76);
// console.log( arrayRollNumber);

var arrayRollNumber=[67,56,78,90,60,90,40];
//update array element
console.log(`updating the array value`);
arrayRollNumber[0]=788;
console.log(arrayRollNumber);

// update the last element with value 77
arrayRollNumber[arrayRollNumber.length-1]=77;
console.log(arrayRollNumber);

// let str="The Kerala Story is the good Movie";
// let words=str.split(" ");
// console.log(words);

console.log("slice()");
var arrayRollNumber=[67,56,78,90,60,90,40];
const sliceArray=arrayRollNumber.slice(3);
console.log(sliceArray);

const sliceArr=arrayRollNumber.slice(2,5);
console.log(sliceArr);

console.log("slice()");
var arrayRollNumber=[67,56,78,90,60,90,40];
const arrayspliced=arrayRollNumber.splice(3);
console.log(arrayRollNumber);
console.log(arrayspliced);


var arrayRollNumber=[67,56,78,90,60,90,40,99,80];
let arrspliced=arrayRollNumber.splice(2,5);
console.log(arrayRollNumber);
console.log(arrayspliced);

// splice for insertion
var arrayRollNumber=[67,56,78,90,60,90,40,99,80];
console.log(arrayRollNumber);
arrayRollNumber.splice(2,0,666,444)
console.log(arrayRollNumber);

// splice for insertion by replacing element
var arrayRollNumber=[67,56,78,99,80];
arrayRollNumber.splice(1,1,99,88,77,66)
console.log(arrayRollNumber);
