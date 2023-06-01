let person={
    height:"6feet",
    name:"Bill Gates",
    city:"Pune",
    age:54,
    isMarried:true
}
const address={
    street:"Wkad Road",
    landmark:"Near Datta Mandir",
    city:"Pune",
    pin:431220,
    state:"MH",
    country:"India"
}
const mark={
    english:99,
    programming:100,
    math:89
}

Object.assign(person,address);
const mergedObject=Object.assign({},address,mark);//copy address and mark into the new object mergedObject
console.table(person);
console.table(mergedObject);