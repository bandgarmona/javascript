
console.log("Design a function expression using if else to  check given year is leap or not.");

var life =function checkLeapYear(year){
    if (year==null || year==undefined || isNaN(year) ) {
        console.log((`Invalid Input: ${year}`));
    } else {
        console.log(`year: ${year}`);
       if (year%4==0) {
        console.log(`${year} is leap year`);
       } else {
        console.log(`${year} is not leap year`);
       }
    }
}
life(2020);
 console.log("-----------------");
life(1999);
console.log("-----------------");

life(1600);
console.log("-----------------");

life(2022);
console.log("-----------------");

life(1945);
console.log("-----------------");

life(null);

life("Twenty Twenty");

life(undefined);

life(NaN);
console.log("-----------------");

life(1750);
