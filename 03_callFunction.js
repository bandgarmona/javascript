


const person={
    name:"Stew",
    age:54,
}
function sayHello(company,role){
    console.log(`${person.name},${person.age},${company},${role}`);
}

sayHello.call(person,"Apple","CEO");

console.log("Apply()");
sayHello.apply(person,["Apple","CEO"]);

console.log("Bind()");
let funRef=sayHello.bind(person);
funRef("Apple","CEO");