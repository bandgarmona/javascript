

console.log("1.Add 10 into each element and new array result on console.");
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
const arrayNew=[];
arrayNumbers.forEach((element)=>{
    arrayNew.push(element+10);
});
console.log(`New array is:${arrayNew}`);
console.log("------------------------------------------------------------");

console.log("2.Square the each array element and log on console.");
const arrayTrans = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);
console.log("------------------------------------------------------------");


console.log("3.Add the index value into its corresponding each array element and log new array result on console.");
const array=[];
arrayNumbers.forEach((element,index)=>{
    array.push(element+index);
});
console.log(array);