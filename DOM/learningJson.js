

const jsonStr=`{

    "name":"MS Dhoni",
    "age":38,
    "isMarrried":true,
    "address":{
      "street":"ABC",
      "pin":413309,
      "city":"Ranchi"
    },
    "Hobbies":["Biking","Running","Playing Cricket"],
    "drink":null
}`;
const msDhoni=JSON.parse(jsonStr);
console.log(typeof jsonStr);
console.log(typeof msDhoni);

console.log(msDhoni);
console.log(msDhoni.Hobbies);
console.log(msDhoni.age);

const college={
    name:"D.Y.Patil college pune",
    year:2021,
    city:"Pune"

}