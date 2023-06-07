

console.log("1.Shallow clone Array");
const arrayNums=[20,3,4,56,90,400,49];
console.log(`Original Array:${arrayNums}`);
arrayNums.push(55,66);
console.log(`Upodated Array:${arrayNums}`);
console.log("--------------------------------------");

console.log("2.Deep Clone Array");
const deepClonedarryNums=JSON.parse(JSON.stringify(arrayNums));
arrayNums.push(10,25);
console.log(`Original Array:${arrayNums}`);
console.log(`Deep Cloned Array:${deepClonedarryNums}`);
console.log("--------------------------------------");

console.log("3.Concat Array Using Spread operator");
arrayEven=[2,30,14,8];
console.log(`Original Array:${arrayEven}`);
const array=arrayEven.concat(arrayNums);
console.log(`concat array:${array}`);
console.log("--------------------------------------");

console.log("4.Employee_Info");
const employee_Info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40.0000INR",
        aug_month:"50.0000INR",
        jun_month:"65.00000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
console.log(`5.Employee adress is:`);
console.log(`colony:${employee_Info.address.locality.colony}`);
console.log(`street:${employee_Info.address.locality.street}`);
console.log(`city:${employee_Info.address.city}`);
console.log(`Mobile Numbers:${employee_Info.mobiles}`);
console.log("--------------------------------------");

console.log("6.Perform deep clone using JSON.stringfy()");
const deepClonedemployee_Info=JSON.parse(JSON.stringify(employee_Info));
employee_Info.salary.july_month="80.0000INR";
console.log(`Given Salary:${deepClonedemployee_Info.salary.july_month}`);
console.log(`Updated Salary:${employee_Info.salary.july_month}`);
console.log("--------------------------------------");

console.log("7.updated Coutry");
console.log(`Before updated country:${employee_Info.address.country}`);
employee_Info.address.country="United Kingdom";
console.log(`After Updated Country:${employee_Info.address.country}`);
