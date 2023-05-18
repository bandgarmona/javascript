
console.log("write a function voteEligibility() with one arg-->age to check wheather he or she is eligiblefor voting or not,Then according display massage on console,don't return value please" );

console.log("------------------------------------------------------------------------");

function voteEligibility(age){
    if (age==null || age==undefined) {
        console.log(`Invalid Data : ${age}`);
    } else {
    if (age==0 || age>=120 ) {
        console.log(`Invalid Data :${age}`);
    } else {
        if (18<=age) {
            console.log(` Age ${age} you are eligible for vote`);
        } else {
            console.log(`Age ${age} you are not eligible for vote`);
        }
    }
}
}
console.log("age is:45");
voteEligibility(45);

console.log("------------------");

console.log("age is:17");
voteEligibility(17);

console.log("------------------");


console.log("age is:8");
voteEligibility(8);

console.log("------------------");

console.log("age is:20");
voteEligibility(20);

console.log("------------------");


console.log("age is:-10");
voteEligibility(-10);

console.log("------------------");


console.log("age is:200");
voteEligibility(200);

console.log("------------------");


console.log("age is:null");
voteEligibility(null);

console.log("------------------");


console.log("age is:undefined");
voteEligibility(undefined);



    