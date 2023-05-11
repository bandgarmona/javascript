
function personalDetails( firstName,lastName,collegeName){
    console.log("-------- My Personal Details ---------");
    console.log("My Name is:",firstName,lastName);
    console.log("My College Name is:",collegeName);

}
personalDetails("Monali","Bandgar","Sangola College Sangola");
console.log("*********************************************");

console.log("-----------Swap Values -------------");


function swapValuesDude( arg1,arg2){
    console.log("Before Swap::","arg1:",arg1,"arg2:",arg2);
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After Swap::","arg1:",arg1,"arg2:",arg2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000)
console.log("***********************************************");

console.log("-------------- Add Three Values ----------");

function addThreeValues(a,b,c){
    console.log("values::",a,b,c);
    var result=a+b+c;
    console.log("Addition is::",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
