console.log("1.With No args and No return Value");
let show=()=>{
    console.log("Good Morning, Today is Monday");
}
show();
console.log("-----------------------------------------------");

console.log("2.With 3bargs and no return value for received 3 parameters perform the multiplication");
let display =(num1,num2,num3=1)=>{
 num4=num1*num2*num3;
 console.log(`Multiplication is:${num4}`);
}
display(5,5,2);
display(10,4);
console.log("-----------------------------------------------");

console.log("3.With 5 args and return value such as for received params it should do the addition");
let addition=(n1,n2,n3,n4,n5)=>{
    n6=n1 + n2 + n3 + n4 + n5;
    console.log(`Addition is: ${n6}`);
}
addition(100,100,200,349,756);
addition('I am','learning','ES6','features','depth');