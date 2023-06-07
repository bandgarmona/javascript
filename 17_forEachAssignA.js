console.log("1.log the array element with it's index using ForEach() with arrow function");
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach( (element, index) => {
    console.log(`Index is:${index},Element is:${element}`);
});
console.log("---------------------------------------------------");


console.log("2.Find the Positive numbers and log on console.");
arrayNumbers.forEach( (element) => {
  if (element>0) {
    console.log(`Positive element is:${element}`);

  }
});
console.log("---------------------------------------------------");


console.log("3.Find the Negative numbers and log on console.");
const arrayNew=[];
arrayNumbers.forEach( (element) => {
  if(element<0){
  arrayNew.push(element);
  }
});
console.log(`Negative Number is:${arrayNew}`);
console.log("---------------------------------------------------");


console.log("4.Find the even numbers and log on console using forEach()  with arrow function.");
arrayNumbers.forEach( (element) => {
    if (element%2==0) {
        console.log(`Even number is:${element}`);
    }
} );
console.log("---------------------------------------------------");


console.log("5.Find the sum of all elements from arrayNumbers and log on sum value on console.");
let elementSum=0;
arrayNumbers.forEach( (element) => {
    elementSum=elementSum+element;
});
console.log(`Sum of Element is:${elementSum}`);
console.log("---------------------------------------------------");


console.log("6.Log the only even indexed array value on console.forEach() with arrow function prefered. ");
arrayNumbers.forEach( (element,index) => {
  if(index%2==0){
    console.log(`index :${index},Element:${element}`);
  }
});