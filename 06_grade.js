


console.log("Design a grade system with function with argument marks and no return value");
console.log("-----------------------------------------------------------");

function gradeCalculation(marks) {
  if (marks == undefined || isNaN(marks) || marks <= 0 || marks > 100) {
    console.log(`Invalid Marks: ${marks}`);
    console.log("please Provide valid Marks");

  } else {
    console.log(`Valid Marks: ${marks}`);
    if (marks >= 90) {
      console.log(`Funtastic Marks: ${marks} , Your Garde is A+`);
    } else {
      if (marks >= 75 && marks <= 90) {
        console.log(`Excellent Marks: ${marks} , Your grade is A`);
      } else {
        if (marks>=50 && marks<=75) {
          console.log(`Good marks ${marks},your grade is B`);
        } else {
          if (marks >= 35 && marks <= 50) {
            console.log(`Marks is ${marks},your grade is C , Need Improvement`);
          } else {

          }
        }
      }
    }
  }
}

//handling invalid input
gradeCalculation(98);
console.log("-------------------");

gradeCalculation(80);
console.log("-------------------");

gradeCalculation(90);
console.log("-------------------");

gradeCalculation(0);
console.log("-------------------");

gradeCalculation(150);
console.log("-------------------");

gradeCalculation(-7);
console.log("-------------------");

gradeCalculation(35);
console.log("-------------------");

gradeCalculation(29);
console.log("-------------------");

gradeCalculation(64);
console.log("-------------------");

gradeCalculation(49);
console.log("-------------------");

gradeCalculation(91);
console.log("-------------------");

 gradeCalculation("Eighty");
 console.log("-------------------");

 gradeCalculation(undefined);
 console.log("-------------------");

gradeCalculation(null);
// gradeCalculation(NaN);
// gradeCalculation("20"); //valid input
// gradeCalculation(69);
