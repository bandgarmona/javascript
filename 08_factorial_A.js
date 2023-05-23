


function factorialofNum(num){
    console.log(`number: ${num}`);
    if (num==null || num==undefined || isNaN(num) ) {
        console.log("Invalid Input");
    }else if(num==0){
        console.log(`The Factorial of ${num} is : 1`);
    }
    else{
     let factorial=1;
     for (index = num; index >=1; index--) {
    factorial=factorial*index;
    }
    console.log(`The Factorial of ${num} is:${factorial}`);
    }
}
factorialofNum(5);
console.log("--------------------");
factorialofNum(3);
console.log("--------------------");

factorialofNum(null);
console.log("--------------------");

factorialofNum(8);
console.log("--------------------");

factorialofNum(undefined);
console.log("--------------------");

factorialofNum(9);
console.log("--------------------");

factorialofNum(0);
console.log("--------------------");

factorialofNum(NaN);






