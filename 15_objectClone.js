const student={
    name:"Mohit",
    age:21,
    city:"Pune"

}
const studentCopy=student
student.name="Mohit Sharma";
console.table(student);
console.table(studentCopy.name);

let age=21;
let ageStudent=age;
ageStudent=22;
console.log(`age ${age}`);
console.log(`ageStudent ${ageStudent}`);

console.log("---------Spread OPerator---------");
const studentObj={
    name:"Mohit",
    age:21,
    city:"pune"
}
//...Spread Operator
const clonedObject={...studentObj};
clonedObject.city="Mumbai";
console.log(clonedObject.city);
console.log(studentObj.city);

let person={
    fullName:"virat Kohli",
    age:54,
    isMarried:true,
    address:{
        street:"Wakad Road",
        country:"India",
        pin:786543
    }

}
//shallow clone

const deepClonedPerson=JSON.parse(JSON.stringify(person));

person.address.street="Hinjewadi Road";

console.log( person.address.street);
console.log("cloned Object");
console.log(deepClonedPerson.address.street);