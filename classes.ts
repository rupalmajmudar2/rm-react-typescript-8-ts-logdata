class Employee {
    /*age: number;

    constructor(age:number) {
        this.age = age;
    }*/
    // the above is done as
    constructor(public age: number) { }  //state + constructor!
    
    startShift(): void {
        console.log('Employee start to shift');
    }
    endShift(): void {
        console.log('Employee end to shift');
    }
}

class Mechanic extends Employee {
    constructor(public name: string, age: number) { //_not_ "public age"
        super(age);
    }
    startShift(): void {
        console.log('Mechanic start to shift');
    }
}

const employee = new Employee(29);
console.log(employee.age);
employee.startShift();
employee.endShift();

const mechanic = new Mechanic("Rupal", 30);
mechanic.startShift();
mechanic.endShift();