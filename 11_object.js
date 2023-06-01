let person={
    height:"6feet",
    name:"Bill Gates",
    city:"Pune",
    age:54,
    isMarried:true,
    address:{
        street:"Wkad Road",
        landmark:"Near Datta Mandir",
        city:"Pune",
        pin:431220,
        state:"MH",
        country:"India",
    },
    walk:function(totalWalk){
        console.log(`${this.name} yes..I can walk ${totalWalk}`);
    },
    details:function(){
        console.log(`person Details:Name${this.name},city:${this.city},age:${this.age}`);
    },
    getdetails:function(){
        let details=`Name ${this.name},age:${this .age},Ismarried:${this.isMarried},city:${this.city}`;
        return details;
    }
};
console.log(`Type of person is ${typeof person}`);

console.log(`------------Accessing object properties-------------`);
//dot notation
const personName=person.name;
console.log(`Person name is:${personName}`);
console.log(`Person city is:${person.city}`);
console.log(`Person Height is:${person[`height`]}`);

console.log("---------Adding object Properties---------");
person.gender="Male";
person.state="Maharashtra";
console.log(person);

console.log("------------------Deleting object properties-----------");
delete person.height;
console.log(person);

console.log("---------involing or calling object method-------------");
person.walk("5km");
person.details();
const details=person.getdetails();
console.log(`Details about person is:${details}`); 

console.log("------------Accessing nested object properties------------");
let personCountry=person.address.country;
console.log(personCountry);
person.address.pin=556677;
console.log(person.address);


console.table(person);
console.log(person);
// console.table(person);

console.log("---------Updating object properties---------");
person.city="Mumbai";
person.isMarried=false;
console.log(`Person city is:${person.city}`);
console.log(`person married stastus is:${person.isMarried}`);

console.log("-------------creating an empty object-----------");
let student={

}
console.log(student);
student.marks="99%";
console.log(student);
const isCityAvailable="city" in student;
console.log(`Is city available in student object:${isCityAvailable}`);
console.log(`Is marks available in student object:${"marks" in student}`);