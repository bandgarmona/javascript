class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("1.Find all the employee from wipro.");
const arrayWiproEmployee=arrayEmps.filter((employee)=>{
    return employee.emp_company=="Wipro";
});
const arrayWiproEmployeeNames=arrayWiproEmployee.map((employee)=>{
    return employee.emp_name;
});

console.log(arrayWiproEmployeeNames);
console.log("---------------------------------------------------------");

console.log("2.Find all the employee from 'IT' or 'HR'.");
const arrayEmployees=arrayEmps.filter((employee)=>{
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
});
const arrayEmployeesNames=arrayEmployees.map((employee)=>{
    return employee.emp_name;
});

console.log(`Employee Working in 'HR' or 'IT' Department is:${arrayEmployeesNames}`);
console.log("---------------------------------------------------------");



console.log("3.Find all the employees whose emp id's are greater than 50.");
const arrayId=arrayEmps.filter((employee)=>{
    return employee.emp_id>50;
});
    const arrayIds=arrayId.map((employee)=>{
   return employee.emp_name;
    
});
console.log(arrayIds);

console.log("---------------------------------------------------------");


console.log("4.Find all the employee whose names start with letter 'A' or 'V' or 'M'");
const arrayLetter=arrayEmps.filter((employee)=>{
    if(employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")){      
          return employee.emp_name;
    }
});
const arrName=arrayLetter.map((employee)=>{
    return employee.emp_name;
});
console.log(arrName);
console.log("---------------------------------------------------------");


console.log("5.Find the average salary of the employee for all the departmrnt");
let sumSalary = 0;
arrayEmps.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / arrayEmps.length;
console.log(`Average Salary is : ${averageSalary}`);
console.log("-------------------------------------------------------");

// console.log("Find the average salary for 'IT' department ");
// let sumSal=0;
// ITDepartment.forEach((employee)=>{
//    sumSal=sumSal+employee.emp_dept;
// });
// const average=sumSal/ITDepartment.length;
// console.log(average);