


const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("Given Array:",arrayNumbers);

console.log("-------------------------------------------------------------------");

console.log("1.Find the total elements availabel or length and log on console ");
length=arrayNumbers.length;
console.log(`Total element available in array: ${length}`);

console.log("-------------------------------------------------------------------");


console.log("2.Log the first element and last element in arrayNumbers and log on console");
const first=arrayNumbers[0];
const last=arrayNumbers[arrayNumbers.length-1];
console.log(`First Element is:${first}`);
console.log(`Last Element is:${last}`);

console.log("-------------------------------------------------------------------");


console.log("3.Log the third last element using length property and log on console ");
var arrslice=arrayNumbers.slice(-3);
console.log(arrslice); 

console.log("-------------------------------------------------------------------");


console.log("4.Find the all evev numbers using for in loop ang log on console");
for (const num of arrayNumbers){
  if (num%2===0) {
    console.log("Even Number is:",num);
  }
}

console.log("-------------------------------------------------------------------");


console.log("5.Find the all odd numbers using for in loop ang log on console");
for (const num of arrayNumbers){
    if (num%2!=0) {
      console.log("Odd Number is:",num);
    }
  }

  console.log("-------------------------------------------------------------------");


  console.log("6.Find all even positioned elements from arrayNumbers,sum it and on console ");
  var sum=0
  for(let index=0;index<arrayNumbers.length;index++){
        if (index%2==0) {
         sum=sum+arrayNumbers[index];
         console.log(`Even position:${index} ==> element is:${arrayNumbers[index]}`);

        }
        
      }
      console.log(`Sum of Even position element is:${sum}`);

      console.log("-------------------------------------------------------------------");


      console.log("7.Find all Odd positioned elements from arrayNumbers,sum it and on console ");
      var sum=0
      for(let index=0;index<arrayNumbers.length;index++){
            if (index%2!==0) {
             sum=sum+arrayNumbers[index];
             console.log(`Odd position:${index} ==> element is:${arrayNumbers[index]}`);
    
            }
            
          }
          console.log(`Sum of Odd position element is:${sum}`);

          console.log("-------------------------------------------------------------------");


          console.log("8.find the sum of all elements from arrayNumbers,log on console");
          var sum=0;
          for(let index=0;index<arrayNumbers.length;index++){
            sum=sum+arrayNumbers[index];

          }
          console.log("sum of all elements in array is:",sum);

          console.log("-------------------------------------------------------------------");


          // console.log("9.find the number which are multiply of 5");
          // var num=0;
          // for(let index=0;index<arrayNumbers.length;index++){
          // if (index%5===0) {
          //   num=num+index;
          // }
          // }
          // console.log(num);
          // console.log("-------------------------------------------------------------------");


console.log("10.Is 115 available in arrayNumbers?");

let isAvailable= arrayNumbers.includes(115)
console.log(isAvailable);

console.log("-------------------------------------------------------------------");


console.log("11.Is number 23 availabel in arrayNumbers?");
let available=arrayNumbers.includes(20);
console.log(available);
console.log("-------------------------------------------------------------------");


console.log("12.Insert number-->55,66 before index 3 and log array on console");
arrayNumbers.splice(3,0,55,66,);
console.log(arrayNumbers);

console.log("-------------------------------------------------------------------");

console.log("13.Delete 3 elements starting from index 4 and log arrayNumbers on console");
 var array=arrayNumbers.splice(4,3); 
console.log(arrayNumbers);

