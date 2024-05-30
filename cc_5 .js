// The purpose of this project is to manage employee salaries and extend it to handle special calcs for managers including bonuses

// U94741303

// Implement Employee class w/ name, salary, annual salary calc
class Employee {
    constructor(name, salary, annualSalary) {
        this.employeeName = name;
        this.employeeSalary = salary;
        this.employeeAnnualSalary = annualSalary;
    }
}

// Create manager subclass w/ annual salary and bonus calculation
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.employeeAnnualSalary = salary * 0.15 + salary;
        this.employeeBonus = (salary * 0.15 + salary) - salary;
        this.employeeDepartment = department;

    }
}

// Instantiate 2 manager objects that calculate annual salaries with bonus
manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager2 = new Manager("Debbi Little", 7205, "Finance");
console.log(manager1);
console.log(manager2);