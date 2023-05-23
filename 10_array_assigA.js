


var arrayFruit=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log("Array is:",arrayFruit);
console.log("-------------------------------------------");
const first=arrayFruit[0];
const last=arrayFruit[arrayFruit.length-1];
console.log("1.Log First and Last element on console.");
console.log(`First Element is:${first}`);
console.log(`Last Element is:${last}`);

console.log("------------------------------------");

console.log("2.'Papaya' before the element 'Banana' ");
arrayFruit.splice(0,0,"Papaya");
console.log(`Array is: ${arrayFruit}`);

console.log("------------------------------------");
console.log("3.Remove 'Mango' from array");

var fruit=arrayFruit.splice(4,1); 
console.log(`Removed element:${fruit}`);
console.log(`Updated Array is: ${ arrayFruit}`);

console.log("------------------------------------");
console.log("4.Add element or insert an element 'Pineapple' at last position");

arrayFruit.push("Pineapple");
console.log(`Updated array is:${arrayFruit}`);

console.log("------------------------------------");
console.log("5.Insert an element-'DragonFruit' before waterMelon");

arrayFruit.splice(4,0,"DragonFruit");
console.log(`Updated array is: ${arrayFruit}`);

console.log("------------------------------------");
console.log("6.Replace an element 'Orange' with 'Kiwi'");

arrayFruit.splice(2,1,"Kiwi");
console.log(`Updated array is:${arrayFruit}`);

console.log("------------------------------------");
console.log("7.Log the element starting from index 1 to 4");

var arrspliced= arrayFruit.slice(1,5);
console.log(`Updated array is:${arrspliced}`);

console.log("------------------------------------");
console.log("8.Only Select 3 element and log on console");

var arrslice=arrayFruit.slice(arrayFruit.length-3);
console.log(`Updated array is: ${arrslice}`);

