let person={
    height:"6feet",
    name:"Bill Gates",
    city:"Pune",
    age:54,
    isMarried:true
}
Object.freeze(person);//Freeze an object
person.age=65;//update not allowed as person is freezed
delete person.city;//Delete not allowed as person object is freezed
person.pin =441109;
console.table(person);

console.log("-----------freezing an array-------------");
array=[22,33,44,55,66]
Object.freeze(array);
array[2]=100;
console.table(array);
