
console.log("Function expression with no return value to check TCS interview Eligibility.");
console.log("-------------------------------------------");

function tcsInterview(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are Eligible for TCS interview.`);
    } else {
        console.log(`Unfotunately ${candidateName} you are not eligible for TCS Interview`);
    }
}
console.log("Candidate Name:Monali");
console.log("Graduation Score:80");
console.log("HSC Score:86");
console.log("SSC Score:90");
tcsInterview(80,86,90,"Monali")

console.log("--------------------------------");

console.log("Candidate Name:Gouri");
console.log("Graduation Score:70");
console.log("HSC Score:65");
console.log("SSC Score:55");
tcsInterview(70,65,55,"Gouri");

console.log("-------------------------------------");

console.log("Candidate Name:Shweta");
console.log("Graduation Score: 60");
console.log("HSC Score: 79");
console.log("SSC Score:88");
tcsInterview(60,79,88,"Shweta");