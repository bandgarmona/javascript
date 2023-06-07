class Employee{
    constructor(emp_id,emp_name,emp_dep,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dep=emp_dep;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
  }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"sonali","Finance",45000,"Infosys");
const emp_monika=new Employee(77,"monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infosys");


const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("1.Find all the employee working in 'TCS' and log only employee names and company name on the console");
for(const employee of array_employees){
    if(employee.emp_company=="TCS"){
        console.log(` ${employee.emp_name} Working in ${employee.emp_company} Company`);
    }
}
console.log("--------------------------------------------------------");

console.log("2.Find the 'Finance' department employee ,log only department and employee name on console");
for(const employee of array_employees){
   if(employee.emp_dep=="Finance")
   console.log(`${employee.emp_name} working in ${employee.emp_dep} department`);
}
console.log("--------------------------------------------------------");


console.log("3.Find the Employee whose name starts with 'R' and complete employee details on console");
for(const employee of array_employees){
   if(employee.emp_name.startsWith("r")){
    console.log(`Employee: emp_id: ${employee.emp_id}, emp_name: ${employee.emp_name},  emp_dep: ${employee.emp_dep}, emp_salary: ${employee.emp_salary}, emp_company: ${employee.emp_company}`);

}
}
console.log("--------------------------------------------------------");


console.log("4.find the employee whose salary is greater than 75000 and log on console emp name,company and salary");
for(const employee of array_employees){
   if (employee.emp_salary>75000){
    console.log(`Emp Name:${employee.emp_name} ,company:${employee.emp_company} ,salary:${employee.emp_salary}`);
   }
}
console.log("--------------------------------------------------------");


console.log("5.Find the emp's whose salary greater than or equal 50000 and from IT department");
for(const employee of array_employees){
  if(employee.emp_salary>=50000 && employee.emp_dep=="IT"){
    console.log(`Employee: emp_id: ${employee.emp_id}, emp_name: ${employee.emp_name},  emp_dep: ${employee.emp_dep}, emp_salary: ${employee.emp_salary}, emp_company: ${employee.emp_company}`);

}
}
console.log("--------------------------------------------------------");


console.log("6.Find out all the employee from company 'Infosys' and log on console ");
for(const employee of array_employees){
    if(employee.emp_company=="Infosys"){
        console.log(`Employee: emp_id: ${employee.emp_id}, emp_name: ${employee.emp_name}, emp_dep: ${employee.emp_dep}, emp_salary: ${employee.emp_salary}, emp_company: ${employee.emp_company}`);
    }

}