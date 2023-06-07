


'use strict'
const array=[11,22,33,44,55,66];
console.log(array);
console.log(...array);


const person={
    name:"stew",
    age:57,
    country:"US"
}
const person2={...person}
console.log(person2);

function show(aadharNo,role,...parameters){
    console.log(aadharNo,role,parameters);
}
show(834638084642,"CEO",23,"Elon","US");

function division(num1,num2=1){
    if(num2==0){
        num2=1;
    }
    console.log(num1/num2);

}
division(10,5);
division(7,0);
division(7);


console.log("=========Object Destructuring=========");
const student={
    name:"stew",
    age:57,
    country:"US",
    pin:413309,
    rollNo:111,
    college:"SMS",
    marks:"90%",
    degree:"BE CSE"
}

const{rollNo,name,college,degree,country}=student;
console.log(rollNo,name,college,degree,country);


const{pin,age,ismarried=false}=student;//const pin=student.pin
console.log(pin,age,ismarried);


const arr=[11,22,33];
const[element1,element2,num1,num2=0]=arr;
console.log(element1,element2,num1,num2);


console.log("---------Remove duplicate elements from array---------");
const arrayNum=[11,3,4,11,4,7,3];
const setOfNum=[...new Set(arrayNum)];
// for (const element of arrayNum) {
//     setOfNum.add(element);
// }
console.log(setOfNum);
