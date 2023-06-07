


const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("1.find out all the numbers which are greater than 50 and log on console.");
const arrayGreater=arrayNumbers.filter((element)=>{
    return element>50;
});
console.log(`Greater than 50 numbers is:${arrayGreater}`);
console.log("-----------------------------------------------------------");


console.log("2.Find out all the even number and log on console.");
const arrayEven=arrayNumbers.filter((element)=>{
    return element%2==0;
});
console.log(`Even Numbers is:${arrayEven}`);
console.log("-----------------------------------------------------------");


console.log("3.Find out all the odd number and log on console.");
const arrayOdd=arrayNumbers.filter((element)=>{
    return element%2!=0;
});
console.log(`Odd Numbers is:${arrayOdd}`);
console.log("-----------------------------------------------------------");

console.log("4.Find out all the numbers which are multiply of 5.");
const arrayMultiply5=arrayNumbers.filter((element)=>{
    return element%5==0;
});
console.log(` Numbers which  is Multiple of 5:${arrayMultiply5}`);
console.log("-----------------------------------------------------------");

console.log("5.Find out all numbers which are between 20 and 50.");
const arrayBetween=arrayNumbers.filter((element)=>{
    return element<50 && element>20;
});
console.log(`Numbers between 20 and 50 is:${arrayBetween}`);




