
function fibonacci(num){
var a=0,b=1;
for(var i=0;i<=num;i++){
var temp=a+b;
console.log(temp);
a=b;
b=temp;
}
}
console.log("Fibonacci Series.....");
fibonacci(5)