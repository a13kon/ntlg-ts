class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Student extends User {
    cource: string;
    constructor(name: string, cource: string) {
        super(name);
        this.cource = cource;
    }
}

class Asp extends Student {
    salary: number;
    constructor(name: string, cource: string, salary: number) {
        super(name, cource);
        this.salary = salary;
    }
}

const user = new User('userName');
const student = new Student('studentName', 'math');
const asp = new Asp('aspName', 'cource', 200);

console.log(user);
console.log(student);
console.log(asp);