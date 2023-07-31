

`Use Strict`;
function hello(greetCallback,sayByeCallback){
    console.log("Hello");
    greetCallback(100);
    sayByeCallback("c u tomarrow");
}
let greet=function(num){
     console.log("Good Morning",num);
}
hello(greet);

let sayBye=function(message){
    console.log(`Good Bye,${message}`);
}
hello(greet,sayBye);