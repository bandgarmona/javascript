let person={
    height:"6feet",
    name:"Bill Gates",
    city:"Pune",
    age:54,
    isMarried:true
}
let student={

}
student=person;//shallow clone
Object.assign(student,person);
student.age=90;
person.age=56;

console.table(person);
console.table(student);