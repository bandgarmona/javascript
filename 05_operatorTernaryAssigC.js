
console.log("1.Write a normal function 'maleMarriageEligiblity()' with args gender age and boyName.Function should msg as per the step 1.2 according to condition check.");
function maleMarriageEligibility(gender,age,boyName){
    var result= (gender=="male" && age>=21) ? ` Hey ${boyName} You are eligible for marriage` : ` Hey ${boyName} you are not eligible for Marriage`;
console.log(result);
return result;
}
console.log("Gender=Male  Age= 25  Boy Name:Billgates");
maleMarriageEligibility("male",25,"Billgates");

console.log("-------------------------------------------------");

console.log("Gender=Male  Age= 17  Boy Name:Stev Jobs");
maleMarriageEligibility("male",17,"Stev Jobs");


console.log("**************************************************************************************");

console.log("2.Write a function 'femaleMarriageEligibility' with 3 args gender,age,girlName.Function should return msg as per step 2.2 according to condition check.");

function femaleMarriageEligibility(gender,age,girlName){
    var result= (gender=="female" && age>=18) ? ` Hey ${girlName} You are eligible for marriage` : ` Hey ${girlName} you are not eligible for Marriage`;
console.log(result);
return result;
}
console.log("Gender=Female  Age=16  GirlName=Jenifer");
femaleMarriageEligibility("female",16,"Jenifer");

console.log("------------------------------------------------");
console.log("Gender=Female  Age=27  GirlName=Malinda Gates");

femaleMarriageEligibility("female",27,"Malinda Gates");