 


console.log("Function Expression with no return value to check TCS interview Eligibility");
console.log("--------------------------------------------");

var tcs=function tcsEligibility(gradScore,hscScore,sscScore,candidateName){
    var result=(gradScore>=70 && hscScore>=80 && sscScore>=90) ? `Congrates ${candidateName} you are Eligible for TCS Interview.` : `Unfortunately ${candidateName} you are not Eligibie for TCS Interview.`;
    console.log(result);
}
console.log("Candidate Name=Monali");
console.log("Graduation Score= 80");
console.log("HSC Score= 86");
console.log("SSC Score=90");
var result=tcs(80,86,90,"Monali");

console.log("****************************");

console.log("Candidate Name= Gouri");
console.log("Graduation Score= 70");
console.log("HSC Score= 65");
console.log("SSC Score=55");
var result=tcs(70,65,55,"Gouri");

console.log("***************************");

console.log("Candidate Name=Shweta");
console.log("Graduation Score= 60");
console.log("HSC Score= 79");
console.log("SSC Score=88");
var result=tcs(60,79,88,"Shweta");