


console.log(myName);//we can access it is because hoisting
var myName="MB";

show();//normal function or ames function are hoisted that's why we are able to call or invoke it evenbefore its declaration
function show(){
    console.log("Show Function");
}

display();
var display=function(){ //Function Expression never hoisted
    console.log("inside function Expression");
}