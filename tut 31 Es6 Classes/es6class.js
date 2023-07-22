console.log("ES6 Classes");

class Employee {
    constructor(name, exp, division) {
        this.name = name;
        this.exp = exp;
        this.division = division;
    }

    slogan() {
        return `Compny CEO Name is : ${this.name}`
    }

    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(name, exp, division, lan, salary) {
        super(name, exp, division);
        this.language = lan;
        this.salary = salary;
    }

    favlanguage(){
        if(this.language == "python"){
            return "python";
        }
        else{
            return "java";
        }
    }

    static multiply(a, b){
        return a* b;
    }
}


ali = new Programmer("ali", 4, 1, 'python', 120000);
console.log(ali);
console.log(ali.favlanguage());
console.log("Add ",Programmer.add(4,5));
console.log("Multiply ",Programmer.multiply(4,5));

// asghar = new Employee("asghar", "2 year", "1st");
// console.log(asghar);
// console.log(asghar.add(49, 7));
// // static methods we can itself class 
// console.log(Employee.add(4, 8));
// // but other menthods cannot like this and its error
// // console.log(Employee.slogan());
