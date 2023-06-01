


function Student(name,age,gender,city){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.city=city;
}
showDetails=function(){
 console.log(`details is ${this.name},${this.age},${this.gender},${this.city}`);
}

Student.prototype.country="India";

const abhi=new Student("Abhijit",21,"Male","Pune");
const poonam=new Student("Poonam",20,"female","Mumbai");
const rushi=new Student("Rushi",23,"Male","Indor");
const snehal=new Student("Snehal",24,"female","Surat");

console.log(abhi.country);
console.log(poonam.country);