





// var num1=13;
// var isEven = num1%2==0;
//     if (isEven) {
//         console.log(`Is Even: ${isEven} , Even number: ${num1}`);
//     } else {
//         console.log(`Is Even: ${isEven} , Odd number: ${num1}`);

//     }
//     console.log("After if else Statement");


    function marriageEligibility(age,gender,name){
     if (age==null || age==undefined || gender==null || gender==undefined) {
            console.log(`Invalid Input  ${name}  ${age} ${gender}`);
        } else {
            if ((gender=="male" && age<21 || age>90)){
                console.log(`Invalid Input ${name} ${age} ${gender}`);
            }
            else {
                if ((gender=="female" && age<18 || age>90)){
                    console.log(`Invalid Input ${name} ${age} ${gender}`);
                }
                if (gender=="transgender"){
                    console.log(`Not Allowed ${name} ${age} ${gender} as constitution`);
                }
                else{
                    if(gender=="male"){
                        console.log(`You are Eligible ${name} ${age} ${gender}`);
                    }
                    else{
                        console.log(`You are Eligible ${name} ${age} ${gender}`);
                    }
                }
            }
            
        }

    }
    marriageEligibility(23,"male","Mahesh"); 
    marriageEligibility(34,"female","Gouri");
    marriageEligibility(null,"male","ram")